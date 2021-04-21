import React from "react"
import { Link } from "react-router-dom";
import Typical from 'react-typical'

export default function Header(){
    return (
        <div className="header">
            <h1><Link className="" to="/">
                <Typical
                    steps={['CDX', 1500, 'SAI', 1500]}
                    loop={Infinity}
                    wrapper="p"
                />
                </Link></h1>
        </div>
    )
}