import React, { useState } from "react";

import { Header, FormBody, FormForm, Forminput, FormButton, Remember, CheckBox, Forgot, New } from "../styled-components/FormStyle"


export default function Form() {
  const [formData, setFormData] = useState({});

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
        {/* <Forminput
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="email"
          name="email"
          value={formData?.email}
        /> */}
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
          <FormButton type="submit" value="LOGIN" />
          
        </div>
        <Forgot>Forgot your password?</Forgot>
        <New>New here? Sign up</New>
        
        
      </FormForm>
    </FormBody>
  );
}

