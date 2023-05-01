import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./SignupPage.scss"

const SignupPage = () => {
  const navigate = useNavigate()

  // input field states
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email , setEmail] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('firstName', firstName)
    formData.append('lastName',lastName)
    formData.append('email', email)

    const response = await fetch("http://localhost:3000/api/basicRoutes/getDetails", {
      method:"POST",
      body:formData
    })
    const json = await response.json()

    if(response.ok){
      if(json.msg === "ok"){
        navigate("/success")
      }else{
        navigate("/faliure")
      }
    }
  }

  return (
    <div className='signup'>
      <h1>Ravindu's News Leter 📧</h1>
      <div className="signup-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input 
              type="text" 
              required
              onChange={e=>setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input 
              type="text" 
              required
              onChange={e=>setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              required
              onChange={e=>setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <button>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupPage