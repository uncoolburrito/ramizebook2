import { NextResponse } from "next/server";
import { phonepe } from "@/lib/phonepe";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
    try {
        const { amount = 100 } = await req.json(); // Default 1 INR (100 paise)

        const transactionId = phonepe.generateTransactionId();
        const merchantUserId = uuidv4(); // In a real app, this would be the logged-in user's ID

        const data = {
            merchantId: phonepe.merchantId,
            merchantTransactionId: transactionId,
            merchantUserId: merchantUserId,
            amount: amount, // in paise
            redirectUrl: `http://localhost:3000/api/payment/verify?id=${transactionId}`,
            redirectMode: "REDIRECT",
            callbackUrl: `http://localhost:3000/api/payment/callback`, // Won't work on localhost but required
            mobileNumber: "9999999999", // Dummy for testing
            paymentInstrument: {
                type: "PAY_PAGE"
            }
        };

        const payload = JSON.stringify(data);
        const base64Payload = Buffer.from(payload).toString("base64");
        const checksum = phonepe.calculateChecksum(base64Payload, "/pg/v1/pay");

        const response = await fetch(`${phonepe.hostUrl}/pg/v1/pay`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-VERIFY": checksum,
            },
            body: JSON.stringify({
                request: base64Payload
            })
        });

        const result = await response.json();

        if (result.success) {
            return NextResponse.json({
                url: result.data.instrumentResponse.redirectInfo.url,
                transactionId
            });
        } else {
            return NextResponse.json({ error: result.message || "Payment initiation failed" }, { status: 500 });
        }

    } catch (error) {
        console.error("Payment initiation error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
