import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { BackButton } from "@/components/ui/BackButton";

export default function LicensePage() {
    return (
        <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
            <Header />





            <main className="flex-grow px-6 md:px-12 py-32">
                <FadeIn className="max-w-3xl mx-auto">
                    <div className="mb-8">
                        <BackButton />
                    </div>
                    <h1 className="font-display font-bold text-4xl mb-12">License</h1>

                    <div className="space-y-12 text-secondary-text leading-relaxed">

                        {/* Section 1 */}
                        <section>
                            <h2 className="font-display font-bold text-xl text-foreground mb-4">1. About This Project</h2>
                            <p className="mb-4">
                                This website is a student project created for educational and demonstration purposes.
                                It is not a commercial product, and no copyrighted materials are being redistributed for profit or public distribution.
                            </p>
                            <p>
                                The website design, layout, animations, and all custom UI code are original work created for this project.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="font-display font-bold text-xl text-foreground mb-4">2. Book Content License (Public Domain Works)</h2>
                            <p className="mb-4">
                                The books featured on this website—Plato’s <em>The Republic</em>, Marcus Aurelius’ <em>Meditations</em>, and Aristotle’s <em>Nicomachean Ethics</em>—are works whose original texts are in the public domain.
                            </p>
                            <p className="mb-4">This means:</p>
                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                <li>They may be freely copied, distributed, and adapted.</li>
                                <li>No permission is required for personal, educational, or creative use.</li>
                            </ul>
                            <p className="mb-4">
                                The summaries, descriptions, or edits included on this website are written for educational demonstration only.
                            </p>
                            <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-sm text-sm">
                                <p className="font-bold mb-1">Note:</p>
                                <p>
                                    Any chapter text included here is either adapted from public domain sources, or placeholder text used only for demo purposes. No modern translations under copyright have been included.
                                </p>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="font-display font-bold text-xl text-foreground mb-4">3. Website Code License (MIT License)</h2>
                            <p className="mb-4">
                                The source code for this website (UI components, pages, layouts, styles, and scripts) is released under the MIT License.
                            </p>

                            <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-sm font-mono text-xs md:text-sm overflow-x-auto">
                                <p className="mb-4">MIT License<br />Copyright (c) 2025 Ramiz Rahman</p>
                                <p className="mb-4">
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the &quot;Software&quot;), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                </p>
                                <p className="mb-4">
                                    The above copyright notice and this permission notice shall be included in
                                    all copies or substantial portions of the Software.
                                </p>
                                <p>
                                    THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                    IN THE SOFTWARE.
                                </p>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="font-display font-bold text-xl text-foreground mb-4">5. No Legal Advice</h2>
                            <p>
                                This page is for informational purposes only. It does not constitute legal advice.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="font-display font-bold text-xl text-foreground mb-4">6. Contact</h2>
                            <p>
                                If you have questions about licensing, attribution, or usage, you can reach the project maintainer at: <a href="mailto:hey@ramiz.com" className="text-foreground hover:underline">hey@ramiz.com</a>
                            </p>
                        </section>

                    </div>
                </FadeIn>
            </main>

            <Footer />
        </div>
    );
}
