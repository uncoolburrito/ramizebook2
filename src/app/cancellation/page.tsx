import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";

export default function CancellationPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-32 px-6 md:px-12 pb-20">
                <FadeIn className="max-w-4xl mx-auto prose dark:prose-invert">
                    <h1>Cancellation & Refund Policy</h1>
                    <p>
                        This cancellation policy outlines about how you can cancel or seek a refund for a product / service that you have purchased through the Platform. Under this policy:
                    </p>
                    <ul>
                        <li>
                            Cancellations will only be considered if the request is made <strong>7 days</strong> of placing the order. However, cancellation request may not be entertained if the orders have been communicated to such sellers / merchant(s) listed on the Platform and they have initiated the process of shipping them, or the product is out for delivery. In such an even, you may choose to reject the product at the doorstep.
                        </li>
                        <li>
                            <strong>Ebook Library Inc.</strong> does not accept cancellation requests for perishable items like flowers, eatables, etc. However, the refund / replacement can be made if the user establishes that quality of the product delivered is not good.
                        </li>
                        <li>
                            In case of receipt of damaged or defective items, please report to our customer service team. The request would be entertained once the seller/ merchant listed on the Platform, has checked and determined the same at its own end. This should be reported within <strong>7 days</strong> of receipt of products.
                        </li>
                        <li>
                            In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within <strong>7 days</strong> of receiving the product. The customer service team after looking into your complaint will take an appropriate decision.
                        </li>
                        <li>
                            In case of complaints regarding the products that come with a warranty from the manufacturers, please refer the issue to them.
                        </li>
                        <li>
                            In case of any refunds approved by <strong>Ebook Library Inc.</strong>, it will take <strong>7 days</strong> for the refund to he processed to you.
                        </li>
                    </ul>
                </FadeIn>
            </main>
            <Footer />
        </div>
    );
}
