import React from "react";
import Navbar from "../Navbar";
import {Outlet} from "react-router-dom"


export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet context={{ name: ""}} />
        </div>
    )
}