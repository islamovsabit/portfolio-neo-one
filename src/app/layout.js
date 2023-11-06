import Header from "@/Components/web/Header/Header_alisa";
import Footer from "@/Components/web/Footer/Footer_alisa";
import Head from './head.js'
import { ThemeProvider } from "./context/Context";
import Check from './check/check.jsx';
import Aos from './aos';
import "./globals.scss";
export const metadata = {
    title: "Neo Portfolio",
    description: "Neo Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head/>
            <body id="body">
                <ThemeProvider>
                    <Header />
                    <Check />
                    <Aos />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
