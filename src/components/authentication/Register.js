import React, { useState,useEffect } from "react"
import axios from "../../http"
import Loading from "./../loading"
import { Link, useHistory } from "react-router-dom";
import Header from "../header/Header"



 const Register = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory("")
    

    useEffect(() => {
      if (localStorage.getItem("authToken")) {
        history.push("/");
      }
    }, [history]);

    const nameHandler = (e) =>{
        setName(e.target.value)
    }

    const emailHandler = (e) =>{
        setEmail(e.target.value)
    }

    const passwordHandler = (e) =>{
        setPassword(e.target.value)
    }

    const registerHandler = async (e)=>{
        e.preventDefault()
        setLoading(true)
        setError('');
        try {
            const { data } = await axios.post("auth/register",{name, email, password})
            localStorage.setItem("authToken", data.token)
            history.push("/");
            setLoading(false)
        } catch (error) {
          console.log(error.response.data.error)
            setError(error.response.data.error);
            setLoading(false)

            setTimeout(() => {
                setError("")
            }, 5000);
        }
        setName("")
        setPassword("")
        setEmail("")
    }
      return (
        <div>
            {loading ? <Loading /> :
                    <div>
                        <section className="hero is-primary is-fullheight">
                        <h1 className="is-size-4	m-5"><Header /></h1>
                    <div className="hero-body">
                      <div className="container">
                        <div className="columns is-centered">
                          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                               <div className={error ? "notification is-warning" : ""}>
                                {error}
                                </div>
                            <form onSubmit={registerHandler} className="box">
                            <div className="field">
                                <label htmlFor="" className="label">Name</label>
                                <div className="control has-icons-left">
                                  <input type="text" onChange={nameHandler} placeholder="Name" value={name} className="input" required />
                                  <span className="icon is-small is-left">
                                    <i className="fa fa-globe"></i>
                                  </span>
                                </div>
                              </div>
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

                              <div className="field">
                                <input type="submit" value="Register" className="button is-link" />
                              </div>
                              <p>already account? <Link className="has-text-link" to="/login">Login</Link></p>
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

export default Register;