import { NextResponse } from "next/server";
import { phonepe } from "@/lib/phonepe";
import crypto from "crypto";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const merchantId = formData.get("merchantId") as string;
        const transactionId = formData.get("transactionId") as string;
        // PhonePe might send 'code', 'merchantId', 'transactionId', 'providerReferenceId', 'amount', 'checksum'

        // Note: The field name for transaction ID might be 'merchantTransactionId' or 'transactionId'. 
        // Checking PhonePe docs: usually 'merchantTransactionId' in the status check, but in the redirect POST body it might be different.
        // Let's assume we get 'merchantTransactionId' or we can use the one we passed in the URL if we used GET.
        // But since we are doing POST, let's look at the body.

        // Actually, the best way is to check the status with PhonePe using the ID we have.
        // If we don't have the ID in the body, we can't check.
        // Let's log the body to be sure in a real app, but here we assume standard fields.

        const mId = merchantId || phonepe.merchantId;
        const tId = transactionId || formData.get("merchantTransactionId") as string;

        if (!tId) {
            return NextResponse.redirect(new URL("/payment/failed?reason=no_transaction_id", req.url));
        }

        // Check Status with PhonePe
        const saltKey = phonepe.saltKey;
        const saltIndex = phonepe.saltIndex;

        const statusPath = `/pg/v1/status/${mId}/${tId}`;
        const stringToHash = statusPath + saltKey;
        const sha256 = crypto.createHash("sha256").update(stringToHash).digest("hex");
        const checksum = `${sha256}###${saltIndex}`;

        const response = await fetch(`${phonepe.hostUrl}${statusPath}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-VERIFY": checksum,
                "X-MERCHANT-ID": mId,
            },
        });

        const result = await response.json();

        if (result.success && result.code === "PAYMENT_SUCCESS") {
            // Set cookie
            const cookieStore = await cookies();
            cookieStore.set("ebook_access", "true", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: "/",
            });

            return NextResponse.redirect(new URL("/library?payment=success", req.url));
        } else {
            return NextResponse.redirect(new URL("/payment/failed", req.url));
        }

    } catch (error) {
        console.error("Payment verification error:", error);
        return NextResponse.redirect(new URL("/payment/failed?reason=error", req.url));
    }
}

// Handle GET just in case (e.g. if user refreshes or if mode is GET)
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const tId = searchParams.get("id");

    if (!tId) {
        return NextResponse.redirect(new URL("/payment/failed?reason=no_transaction_id", req.url));
    }

    // Check Status with PhonePe (Same logic)
    // ... (Duplicating logic for brevity, or refactor)
    // For now, let's just redirect to the POST handler logic or copy it.

    try {
        const mId = phonepe.merchantId;
        const saltKey = phonepe.saltKey;
        const saltIndex = phonepe.saltIndex;

        const statusPath = `/pg/v1/status/${mId}/${tId}`;
        const stringToHash = statusPath + saltKey;
        const sha256 = crypto.createHash("sha256").update(stringToHash).digest("hex");
        const checksum = `${sha256}###${saltIndex}`;

        const response = await fetch(`${phonepe.hostUrl}${statusPath}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-VERIFY": checksum,
                "X-MERCHANT-ID": mId,
            },
        });

        const result = await response.json();

        if (result.success && result.code === "PAYMENT_SUCCESS") {
            const cookieStore = await cookies();
            cookieStore.set("ebook_access", "true", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: "/",
            });

            return NextResponse.redirect(new URL("/library?payment=success", req.url));
        } else {
            return NextResponse.redirect(new URL("/payment/failed", req.url));
        }
    } catch (error) {
        return NextResponse.redirect(new URL("/payment/failed?reason=error", req.url));
    }
}
