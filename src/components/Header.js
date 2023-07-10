import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
export default function Header(){
    return(
        <header className="flex w-screen h-20 bg-bg_dark-brighter p-2 flex-row border border-gray-600" id="header">
            <img src="https://i.imgur.com/VUnkfgdl.png" style={{filter:"invert(100%)"}}></img>
            <h2 className="text-gray-300 mt-5 ml-2">Anony Most</h2>
            <InformationCircleIcon className="text-white w-6 h-6 absolute right-5 top-7"></InformationCircleIcon>
        </header>
    )
}