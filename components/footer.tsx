import Link from "next/link"
import Image from "next/image"
import Button from "react-bootstrap/esm/Button"
import React, { useState } from "react";


export default function Footer() {
    return (<>
        <footer className="footer">
            © 2023, All Right Reserved. 
            <div className="logoIMG" > <Image className="img-fluid" src="/Logo.png" width={200} height={"75"} alt="logo"></Image></div>
             Developed by pgauto-108
        </footer>

        <footer className="text-center ">
            
        
        </footer>

    </>)
}