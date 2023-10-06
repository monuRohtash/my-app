
import HeaderItem from "./HeaderItem";
import React from "react";
 function Navbar(){
    return(

        <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark ">
<div className="d-flex justify-content-center">
            <a className="navbar-brand" href="#">Home</a>
                <ul className="navbar-nav">

                    <li className="">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Register</a>
                    </li>
                </ul>
</div>
        </nav>


        </div>

    );
 }
 export default Navbar;
