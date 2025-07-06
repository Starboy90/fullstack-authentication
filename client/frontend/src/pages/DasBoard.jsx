import React from 'react'
import { useEffect, useState } from 'react'
//import './d.css'



const DasBoard = () => {

  const [userData,setuserData]= useState({

    firstName:"",
    lastName:"",
    email:"",

  });

  useEffect(()=>{
    
    const fetchData = async()=>{
      const email= localStorage.getItem("email");
      
      if(!email)return;

      try{
        const response = await fetch(`https://fullstack-authentication-r5f6.onrender.com/api/auth/DasBoard?email=${email}`,{
          
           method:"GET",
           headers:{'Content-Type':'application/json'},
           

          }
        );

        const data = await response.json();

        if (response.ok){
          setuserData({
            firstName: data.firstName,
            lastName:data.lastName,
            email:data.email
          });
        }

        else {
          alert(data.messsege || "Failed to Load");
        }
      }
      catch(error){
        console.error("Error DasBpard Data");
        alert("Something Went Wrong")
      }
    
    } ;

      fetchData();
  

  },[]);







  return (
    <div>
         <div >
      <div >
        Welcome: <strong>{userData.firstName}</strong> {userData.lastName}
      </div>
      <div >
        Email: <strong>{userData.email}</strong>
      </div>

    </div>
    </div>
  )
}

export default DasBoard
