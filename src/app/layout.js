import "./globals.css";
import Category from "@/hooks/useCategory";
import Footer from "@/components/Footer";
import Product from "@/hooks/useProducts";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Transition from "@/components/utility/Transition";
import UserNavbarWrapper from "@/components/nav/UserNavbarWrapper";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const nunito = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export const metadata = {
    title: "Fashion E-commerce",
    description: "A modern fashion e-commerce website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`scrollbar-hide ${nunito.className}`}>
                <ReactQueryProvider>
                    <UserNavbarWrapper />
                    <main className="flex flex-col min-h-[calc(100vh-2.5rem-1px)]">
                        <div className="flex flex-1 flex-col h-full">
                            <Transition>{children}</Transition>
                        </div>
                        <Footer />
                        <Toaster />
                    </main>
                    <Product />
                    <Category />
                </ReactQueryProvider>
            </body>
        </html>
    );
}
