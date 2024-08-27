import './NavBar.css';
import Image from "next/image";
import {NavbarLinks} from "@/components/NavBar/NavbarLinks";
import {NavbarMenuToggle} from "@/components/NavBar/NavbarMenuToggle";
import React from "react";

interface NavBarProps {
    logoSrc: string
}


export const NavBar: React.FC<NavBarProps> = ({logoSrc}) => {


    return <header className="primary__header">
        <div className="navbar__wrapper">
            <NavbarMenuToggle/>
            <nav id="mobile-screen-navigation" className="navbar__navigation navbar__navigation--mobile">
                <NavbarLinks/>
            </nav>
            <div className={'navbar__logo__container'}>
                <div className="navbar__logo">
                    <Image src={logoSrc} alt="Amalur modas" width={1200} height={466}/>
                </div>
            </div>
            <nav id="large-screen-navigation" className="navbar__navigation">
                <NavbarLinks/>
            </nav>
        </div>
    </header>;
}