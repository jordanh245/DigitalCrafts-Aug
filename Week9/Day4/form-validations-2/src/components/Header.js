import React, { useEffect, useState } from "react";
import { Headernav, UserButton, UserImg, UserHeader, UserInfo } from '../styled-components/HeaderStyle'
import { useDispatch, useSelector } from "react-redux";

const URL = "https://randomuser.me/api/";

export default function Header(props) {

  
const viewSidebar = props.viewSidebar
 const setviewSidebar = props.setviewSidebar

 const dispatch = useDispatch();
 const userData = useSelector((state) => state.userData);
 const user = useSelector((state)=> state.LoginInfo.userData)
  // useEffect is a hook
  // hook that fires when the component is mounted
  useEffect(() => {
    const getNewsData = async () => {
      const getTheNews = await fetch(URL, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonNews = await getTheNews.json();
      console.log(jsonNews);
      dispatch({
        type: "GET_USER",
        
      });
    };
    getNewsData();
    return () => {};
  },[]);

  

  return (
    <Headernav>
      <UserButton onClick={()=> setviewSidebar(!viewSidebar)}>{viewSidebar ? "Hide Sidebar" : "Show Sidebar"}</UserButton>
      <UserHeader> User Logged In</UserHeader>
      <UserInfo>
       {user}
      </UserInfo>  
    </Headernav>
  );
}