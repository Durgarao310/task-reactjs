import React, { useState } from "react"
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import Logout from "../authentication/Logout";


export default function Home(){
    const token = localStorage.getItem("authToken")
        const home  = "this is home page" 
    return (
        <div>{ token ?   home : <Redirect to="/login" /> }
        <Logout />
        </div>

    )
}