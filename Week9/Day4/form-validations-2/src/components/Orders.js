import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import {Orderlayout} from "../styled-components/OrderStyle"
import MaterialTable from 'material-table'
const columns = [
		{
		  title: "Order ID",
		  field: "id"
		},
		{
		  title: "Name",
		  field: "Name"
		},
		{
			title: "Address",
			field: "Address"
		  }
	  ];
export default function Orders() {
	 const { handleSubmit, register } = useForm();
  const [data] = useState([
    {
      id: 13532,
	  Name: "Jordan",
	  Address: "123 Main St"
    },
	{
		id: 13533,
		Name: "Bob",
		Address: "124 Main St"
	  },
	  {
		id: 13534,
		Name: "Sue",
		Address: "125 Main St"
	  },
	
    
  ]);

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Orderlayout>
	
      <MaterialTable
        columns={columns}
		
        data={data}
        options={{
          paging: false,
          search: false,
          draggable: false
        }}
        
      />
    
	</Orderlayout>
  );
}

	

        

  

