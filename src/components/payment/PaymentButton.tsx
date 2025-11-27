"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Loader2, Lock } from "lucide-react";

export function PaymentButton() {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        try {
            setLoading(true);
            const response = await fetch("/api/payment/initiate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount: 100 }), // 1 INR
            });

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error("Payment initiation failed", data.error);
                alert("Payment initiation failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button size="lg" className="gap-2" onClick={handlePayment} disabled={loading}>
            {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
                <Lock className="w-4 h-4" />
            )}
            Unlock Library (₹1)
        </Button>
    );
}
