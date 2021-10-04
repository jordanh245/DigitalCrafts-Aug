
import React, { useEffect, useState } from "react";


import { Headernav, UserButton, UserImg, UserHeader, UserInfo } from '../styled-components/HeaderStyle'


const URL = "https://randomuser.me/api/";

export default function Header(props) {
  const viewSidebar = props.viewSidebar
 const setviewSidebar = props.setviewSidebar
  const [user, setUser] = useState({});
  const [counter, setCounter] = useState(0);
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
      setUser({
        ...jsonNews.results[0],
        userImage: jsonNews?.results[0]?.picture?.thumbnail,
      });
    };
    getNewsData();
    return () => {};
  }, [counter]);

  

  return (
    <Headernav>
      <UserButton onClick={()=> setviewSidebar(!viewSidebar)}>{viewSidebar ? "Hide Sidebar" : "Show Sidebar"}</UserButton>
      <UserHeader> User Logged In</UserHeader>
      
      <UserImg src={user?.picture?.large} alt="" />
      <UserInfo>
        Welcome {user?.name?.first} {""} {user?.name?.last}
      </UserInfo>
      <UserInfo>{user?.location?.city}</UserInfo>
      <UserButton onClick={() => setCounter(counter + 1)}>
        Get New User
      </UserButton>
    </Headernav>
  );
}