import React from 'react'
import { useState } from 'react'
import './SignIn.css'

const SignIn = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [user,setUser]=useState({

    firstName:"",
    lastName:"",
    email:"",
    password:""
  });

   const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleInput =(e)=>{

    let name = e.target.name;
    let value = e.target.value;
   setUser({
  ...user, [name]: value,
});

  }

  const handleForm=async(e)=>{
  e.preventDefault();

  try{
    const response = await fetch("https://fullstack-authentication-r5f6.onrender.com/api/auth/Register",{
      method:"post",
      
       headers: {
       "Content-Type": "application/json",
      },

    
      body :JSON.stringify(user),
    });
  console.log("resposne dta:",response);
  if(response.ok){

    const responseData = await response.json();
    alert("regisration succecful");
    setUser({firstName:"",lastName:"",email:"",password:""});
    console.log(responseData);

  }else{
    alert("user already");
    console.log("error inside responce","error");
  }


  }
  
  catch(error){
    console.error("Error",error);
  }
  }

 
 return(
 
 <div className="container">
      <div className="left-panel">
        <h1>
          Capturing Moments,<br />Creating Memories
        </h1>
      </div>
      <div className="right-panel">
        <h2>Create an account</h2>
        <p>
          Already have an account?{' '}
          <a href="http://localhost:5173/Login" style={{ color: '#A881E6' }}>
            Log in
          </a>
        </p>
        <form onSubmit={handleForm}>
          <div className="name-fields">
            <input type="text" name='firstName' placeholder="First name"value={user.firstName} onChange={handleInput} required/>
            <input type="text" name='lastName' placeholder="Last name"value={user.lastName} onChange={handleInput}required/>
          </div>
          <input type="email"name='email' placeholder="Email"value={user.email} onChange={handleInput} />
          <input type="password" name='password'placeholder="Enter your password"value={user.password} onChange={handleInput}required/>
          <div className="checkbox">
            <input type="checkbox" id="terms"  checked={isChecked} onChange={handleCheckboxChange} required/>
            <label htmlFor="terms">
              I agree to the{' '}
              <a href="#" style={{ color: '#A881E6' }}>
                Terms & Conditions
              </a>
            </label>
          </div>
          <button type="submit" className="btn" disabled={!isChecked}>
            Create account
          </button>
        </form>
        <div className="divider">Or register with</div>
        <div className="social-buttons">
          <button type="button">Google</button>
          <button type="button">Apple</button>
        </div>
      </div>
    </div>
 )
}

export default SignIn
