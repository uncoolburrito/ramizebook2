import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-32 px-6 md:px-12 pb-20">
                <FadeIn className="max-w-4xl mx-auto prose dark:prose-invert">
                    <h1>Privacy Policy</h1>

                    <h3>1. Data Collection</h3>
                    <p>
                        We collect personal information such as your name, email address, and payment information when you register and make purchases on our Platform. We may also collect non-personal information such as browser type, operating system, and IP address to improve our services.
                    </p>

                    <h3>2. Use of Data</h3>
                    <p>
                        We use your data to:
                    </p>
                    <ul>
                        <li>Process your orders and provide access to our services.</li>
                        <li>Communicate with you regarding your account and transactions.</li>
                        <li>Improve our Platform and user experience.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>

                    <h3>3. Data Protection</h3>
                    <p>
                        We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                    </p>

                    <h3>4. Data Sharing</h3>
                    <p>
                        We do not sell your personal data to third parties. We may share your data with trusted third-party service providers who assist us in operating our Platform, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                    </p>

                    <h3>5. Cookies</h3>
                    <p>
                        We use cookies to enhance your experience on our Platform. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your Web browser (if you allow) that enables the site&apos;s or service provider&apos;s systems to recognize your browser and capture and remember certain information.
                    </p>
                    <p>
                        We use cookies to:
                    </p>
                    <ul>
                        <li>Understand and save user&apos;s preferences for future visits.</li>
                        <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future.</li>
                    </ul>
                    <p>
                        You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. If you turn cookies off, some features will be disabled.
                    </p>
                </FadeIn>
            </main>
            <Footer />
        </div>
    );
}
