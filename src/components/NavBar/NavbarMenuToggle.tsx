'use client';

import Image from "next/image";
import React, {useEffect} from "react";


export const NavbarMenuToggle: React.FC = () => {

    const [isToggled, setIsToggled] = React.useState(false);

    return <button className={`navbar__toggle-mobile ${isToggled ? 'navbar__toggle-mobile-toggled' : ''}`} role="button"
                   aria-controls="large-screen-navigation" onClick={() => setIsToggled(!isToggled)}>
        <Image className={`navbar__toggle-mobile--close-icon ${isToggled ? '' : 'navbar__toggle-mobile-hidden'}`}
               src={'/images/close-toggle-icon.svg'}
               alt="close mobile toggle"
               width={20} height={20} aria-hidden={true}/>
        <Image className={`navbar__toggle-mobile--hamburguer-icon  ${!isToggled ? '' : 'navbar__toggle-mobile-hidden'}`}
               src={'/images/hamburger-toggle-icon.svg'}
               alt="close mobile toggle" width={20} height={20} aria-hidden={true}/>
        <span className="hidden">Menu</span>
    </button>
}
