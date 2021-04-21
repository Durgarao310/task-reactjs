import React, { useState,useEffect } from "react"
import axios from "../../http"
import Loading from "./../loading"
import { Link, useHistory } from "react-router-dom";
import Header from "../header/Header"
import { Redirect } from 'react-router';



 const Logout = () =>{
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    useEffect(() => {
      return () => {
      }
      }, []);
    const logout = async (e)=>{
        e.preventDefault()
        setLoading(true)
        setError('');
        try {
            const { data } = await axios.get("auth/logout")
            localStorage.clear()
            history.push("/login");
            setLoading(false)
        } catch (error) {
          console.log(error.response.data.error)
            setError(error.response.data.error);
            setLoading(false)

            setTimeout(() => {
                setError("")
            }, 5000);
        }

    }
      return (
        <div>
            {loading ? <Loading /> :
                    <div>
    
                            <form onSubmit={logout} className="box">
                              <div className="field">
                                <input type="submit" value="Logout" className="button is-success" />
                              </div>
                            </form>
                          </div>
            
            }
        </div>
    )
}

export default Logout;