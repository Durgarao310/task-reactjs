import React, { useState } from "react"
import axios from "../../http"
import Loading from "./../loading"
import Header from "../header/Header"


export default function ForgotPassword(){
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    
    const emailHandler = (e) =>{
        setEmail(e.target.value)
    }

    const fotgotPasswordHandler = async (e)=>{
        e.preventDefault()
        setLoading(true)
        setError('');
        try {
            const {data} = await axios.post("auth/login",{email})
            localStorage.setItem("authToken", data.token)
            setLoading(false)
            console.log(data)
        } catch (error) {
            setError(error.response.data.error)
            setLoading(false)
            setTimeout(() => {
                setError("")
            }, 7000);
        }
        setEmail("")
    }
    return (
        <div>
            {loading ? <Loading /> :
                    <div>
                        {error}
                  <section className="hero is-primary is-fullheight">
                  <h1 className="is-size-4	m-5"><Header /></h1>
                    <div className="hero-body">
                      <div className="container">
                        <div className="columns is-centered">
                          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                <div className={error ? "notification is-warning" : ""}>
                                {error}
                                </div>
                            <form onSubmit={fotgotPasswordHandler} className="box">
                              <div className="field">
                                <label htmlFor="" className="label">Email</label>
                                <div className="control has-icons-left">
                                  <input type="text" onChange={emailHandler} placeholder="email@gmail.com" value={email} className="input" required />
                                  <span className="icon is-small is-left">
                                    <i className="fa fa-lock"></i>
                                  </span>
                                </div>
                              </div>
                              <div className="field">
                                <input type="button" value="ForgotPassword" className="button is-success" />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>
              </div>
            }
        </div>
    )
}