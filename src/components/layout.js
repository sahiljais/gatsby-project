import React from "react";
import Footer from "./footer";
import Header from "./header";
import "../styles/index.scss"
import {container, content} from "../components/layout.module.scss"

const Layout = ({children}) => {
    return(
        <div className={container}>
            <div className={content}>
            <Header />
            {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout