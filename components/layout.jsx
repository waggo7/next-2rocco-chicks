import Footer from "./footer";
import Head from 'next/head'
import HomePage from "../pages/index.jsx";
import NavBar from "./navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://app.snipcart.com" />
                <link rel="preconnect" href="https://cdn.snipcart.com" />
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />

            </Head>
            <NavBar />
            {children}
            <Footer />
            <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
            <div hidden id="snipcart" data-api-key="MjkyMDQzMGQtMjg4YS00YmQ3LTg3N2QtZTlmNTA0YzZlMDIyNjM3OTE4ODYwNDU2NTk0ODc5" />
        </div>
    )
}
export default Layout;