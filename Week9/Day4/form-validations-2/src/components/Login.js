import React, { useState } from "react";

import { Header, FormBody, FormForm, Forminput, FormButton, Remember, CheckBox, Forgot, New } from "../styled-components/FormStyle"
import { createClient } from '@supabase/supabase-js'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// Create a single supabase client for interacting with your database 
const supabase = createClient("https://rkghunufxflcdhxdffkk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTIyNzA0NSwiZXhwIjoxOTQ2ODAzMDQ1fQ.AiXHSApnrip0Jjl2AyDuVPBU7HOtxPpnV784z0qBKEc")

export default function Form(props) {
const [formData, setFormData] = useState({username: "", password: ""});
  
const history = useHistory();
const dispatch = useDispatch();



const login = async (e) => {
  e.preventDefault();
  const { user, session, error } = await supabase.auth.signIn({
    email: formData.username,
    password: formData.password,
  });
  if (session) {
    history.push("/dashboard")
    dispatch({type:"SET_USER", payload: formData.username})
  } else {
    alert(error.message)
  }
  
};
 
const register = async (e) => {
  e.preventDefault();
  const { user, session, error } = await supabase.auth.signUp({
    email: formData.username,
    password: formData.password,
  });
  if (user) {
    history.push("/login")
  } else {
    alert(error.message)
  }
 
};

  
  
  
  return (
    <FormBody>
    
      <FormForm>
        <Header>Login to continue!</Header>
        <Forminput
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="Username"
          name="username"
          value={formData?.username}
        />
        
        <Forminput
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="password"
          placeholder="Password"
          name="password"
          value={formData?.password}
        />
       
        
        <div>
          <CheckBox type="checkbox" name="" id="" />
          <Remember>Remember Me</Remember>
          {props?.register ? (<FormButton onClick={(e)=>register(e)} type="submit" value="REGISTER"  />
          ) : (

          <FormButton onClick={(e)=>login(e)}type="submit" value="LOGIN" />
          )}
          
        </div>
        <Forgot>Forgot your password?</Forgot>
        <New>New here? Sign up</New>
        
        
      </FormForm>
    </FormBody>
  );
}

