import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import registration from '../assets/registration.png'
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const Frominput = styled(TextField)({
        width: '75%',
        marginTop: '34px',
        borderRadius : '9px',

  });

  const Mybutton = styled(Button)({
    fontSize: '20px',
    padding: '20px 132px',
    backgroundColor: '#5F35F5',
    marginTop:'52px',
    borderRadius : '86px',
    width : '75%',

    fontFamily: [
      'Nunito Sans',
 
    ].join(','),

  });
  

const Ragistration = () => {

  let [reg, setReg] =useState({
    email:"",
    fullName : "",
    password : ""

  })
  let [error, setError] =useState({
    emailerror:"",
    fullNameerror : "",
    passworderror : ""

  })

  let handlechange =(e)=>{

    setReg({...reg , [e.target.name] : e.target.value})

  }
  let handleclick = ()=>{
    if(reg.email == ""){

      setError({...error , emailerror : "please give an email"})

    }

    else{
      let emailpattern =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if(!(emailpattern.test(reg.email))){
        setError({...error , emailerror : "please give an valid email"})
      }
      else{
        setError({...error , emailerror : ""})
      }
    }

    if(reg.fullName==""){
      setError({...error , fullNameerror : "Please give you full name"})
    }

    if(reg.password==""){
      setError({...error , passworderror : "Please set a password"})
    }
    else{
      let passwordvalidation =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      if(!(passwordvalidation.test(reg.password))){
        setError({...error , passworderror : "Please use a lower case[a-z] a uppercase[A-Z] a number [1-9] a special charecter"})

      }
      else{
        setError({...error , passworderror : ""})
      }
    }
  }
   
  return (
    <Grid container >
    <Grid item xs={6}>
      <div className='regFrom'>
      <h1 className='regHeading'>Get started with easily register</h1>
      <p className='regPera'>
      Free register and you can enjoy it
      </p>

      <div>
     <div>
     <Frominput onChange={handlechange} name="email" id="outlined-basic" label="Email Address" variant="outlined" />
    {error.emailerror &&
     <Alert severity="error">
     {error.emailerror}
   </Alert>
    }
     </div>
     <div>
     <Frominput onChange={handlechange} name="fullName" id="outlined-basic" label="Full Name" variant="outlined" />
     {error.fullNameerror &&
     <Alert severity="error">
     {error.fullNameerror}
   </Alert>
    }
     </div>
     
      <Frominput onChange={handlechange} name="password" id="outlined-basic" label="Password" variant="outlined"  type="password"/>
      {error.passworderror &&
     <Alert severity="error">
     {error.passworderror}
   </Alert>
    }
      </div>
      <Mybutton onClick={handleclick} variant="contained">Sign up</Mybutton>
      <p className='regsinin'>Already  have an account ? <span>
      Sign In</span></p>
      </div>
    </Grid>
    <Grid item xs={6}>
      <img className='regimg' src={registration} alt="cover pic" />
      
    </Grid>
  </Grid>
    
  )

}

export default Ragistration


