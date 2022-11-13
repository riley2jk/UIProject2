import React from "react";
import "./index.scss";
import SideNav from "../SideNav";
import ToDo from "../ToDo";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="App">
            <SideNav />
            <div className="page">
                <span className="page-bar" />
                <Outlet />
            </div>
            <ToDo />
        </div>
    );
};

export default Layout;
