'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

export default function Navbar(props){
    const {scrollValue} = props;
    let scroll = false;
    if(scrollValue > 20){
        scroll = true;
    }else{
        scroll
    }

    return (
        <header className={`w-full fixed z-50 duration-300 ${scroll ? "bg-[rgba(0,0,0,0.8)]":""}`}>
            <nav className="py-8 px-8 flex justify-between lg:w-11/12 lg:mx-auto">
                <div>
                    <a href="#">
                    <img src="/images/logo.svg"/>
                    </a>
                </div>
                <div className="hidden md:block">
                    <ul className="flex gap-4 text-white">
                        <li><a href="#" className="after:content-[''] after:block after:w-0 after:h-0.5 after:duration-300 after:bg-white hover:after:w-full">Equipment</a></li>
                        <li><a href="#" className="after:content-[''] after:block after:w-0 after:h-0.5 after:duration-300 after:bg-white hover:after:w-full">About us</a></li>
                        <li><a href="#" className="after:content-[''] after:block after:w-0 after:h-0.5 after:duration-300 after:bg-white hover:after:w-full">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <a href="#" className="text-lg hover:text-[#FBD784] text-white">
                    <span className="mr-2"><FontAwesomeIcon icon={faCircleUser} /></span>
                        Account
                    </a>
                </div>
            </nav>
        </header>
    );
}