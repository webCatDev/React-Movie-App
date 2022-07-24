import { Fragment } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
    return (
        <Fragment>
            <header>
                <Navbar />
                <Sidebar/>
            </header>
            <main>
                {children}
            </main>
        </Fragment>
    );
}

export default Layout;