import React from "react";
import {HandThumbUpIcon} from '@heroicons/react/24/outline'
export default function Post({title,text,time}){
    return(
        <>
        <div className="px-6 bg-bg_dark text-gray-300 w-full">
            <div className="border border-reddit_border bg-bg_dark-brighter p-2">
            <div className="title text-xl">:: {title}</div>
            <br></br>
            <div className="text">{text}</div>
            <br></br>
            <div className="text-xs">Posted at {time} 
            </div>
            </div>
        </div>
        <br></br>
        </>
    )
}