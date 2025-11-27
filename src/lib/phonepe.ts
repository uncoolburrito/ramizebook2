import crypto from "crypto";

const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
const SALT_INDEX = 1;
const MERCHANT_ID = "PGTESTPAYUAT";
const HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";

export const phonepe = {
    merchantId: MERCHANT_ID,
    saltKey: SALT_KEY,
    saltIndex: SALT_INDEX,
    hostUrl: HOST_URL,

    generateTransactionId: () => {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000000);
        return `MT${timestamp}${random}`;
    },

    calculateChecksum: (payload: string, apiEndpoint: string) => {
        const stringToHash = payload + apiEndpoint + SALT_KEY;
        const sha256 = crypto.createHash("sha256").update(stringToHash).digest("hex");
        return `${sha256}###${SALT_INDEX}`;
    },

    verifyChecksum: (payload: string, checksum: string) => {
        // Note: Verification logic depends on what PhonePe sends back.
        // Usually it's similar: SHA256(payload + saltKey) + ### + saltIndex
        const stringToHash = payload + SALT_KEY;
        const sha256 = crypto.createHash("sha256").update(stringToHash).digest("hex");
        const calculatedChecksum = `${sha256}###${SALT_INDEX}`;
        return checksum === calculatedChecksum;
    }
};
