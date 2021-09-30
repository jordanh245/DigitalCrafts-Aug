import React, { useState } from "react";

import { Header, FormBody, FormForm, Forminput, FormButton } from "../styled-components/FormStyle"


export default function Form() {
  const [formData, setFormData] = useState({});

  return (
    <FormBody>
      
      <Header>Sign In</Header>
     
      <FormForm>
        <Forminput
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="username"
          name="username"
          value={formData?.username}
        />
        <Forminput
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="email"
          name="email"
          value={formData?.email}
        />
        <Forminput
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="password"
          placeholder="password"
          name="password"
          value={formData?.password}
        />
        
       
          <FormButton type="submit" />
        
      </FormForm>
    </FormBody>
  );
}

