import React, { useState,useEffect } from "react"
import axios from "../../http" 
import Loading from "./../loading"
import { Link,useHistory } from "react-router-dom";
import Header from "../header/Header"
import GoogleSocialAuth from "./GoogleLog"
import FacebookSocialAuth from "./FacebookLog"



const Login= () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory("");

    useEffect(() => {
      if (localStorage.getItem("authToken")) {
        history.push("/");
      }
    }, [history]);

    const emailHandler = (e) =>{
        setEmail(e.target.value)
    }

    const passwordHandler = (e) =>{
        setPassword(e.target.value)
    }

    const loginHandler = async (e)=>{
        e.preventDefault()
        setLoading(true)
        setError('');
        try {
            const {data} = await axios.post("auth/login",{email, password})
            localStorage.setItem("authToken", data.token)
            setLoading(false)
            console.log(data)
            history.push("/")
        } catch (error) {
            setError(error.response.data.error)
            setLoading(false)
            setTimeout(() => {
                setError("")
            }, 7000);
        }
        setPassword("")
        setEmail("")
    }
    return (
      <div>
            {loading ? <Loading/> :
            <div>
                <div className="hero is-primary is-fullheight">
                    <h1 className="is-size-4	m-5"><Header /></h1>
                    <div className="hero-body">
                      <div className="container">
                        <div className="columns is-centered">
                          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                <div className={error ? "notification is-warning" : ""}>
                                {error}
                                </div>
                            <form onSubmit={loginHandler} className="box">
                              <div className="field">
                                <label htmlFor="" className="label">Email</label>
                                <div className="control has-icons-left">
                                  <input type="email" onChange={emailHandler} placeholder="e.g. example@gmail.com" value={email} className="input" required />
                                  <span className="icon is-small is-left">
                                    <i className="fa fa-envelope"></i>
                                  </span>
                                </div>
                              </div>
                              <div className="field">
                                <label htmlFor="" className="label">Password</label>
                                <div className="control has-icons-left">
                                  <input type="password" onChange={passwordHandler} placeholder="*******" value={password} className="input" required />
                                  <span className="icon is-small is-left">
                                    <i className="fa fa-lock"></i>
                                  </span>
                                </div>
                              </div>
                              <p className="has-text-link m-2"><Link to="/forgotpassword">Forgotpassword</Link></p>
                              <div className="field">
                                <input type="submit" value="Login" className="button is-link" />
                                
                              </div>
                                <p>Don't have an account? <Link className="has-text-link" to="/register">Register</Link></p>
                            <div className="columns is-inline-flex is-tab">
                                    <div className="column is-half mt-5 ml-2 "><GoogleSocialAuth /></div>
                                    <div className="column is-half"><FacebookSocialAuth/></div>
                            </div>
                            </form>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Login