// import React from "react";
// import Profile from "../component/Profile";
// const UserContext = React.createContext();  // every context is provider 
// export default UserContext;

// <UserContext>
//   <login>
//     <Profile></Profile>
//   </login>
// </UserContext>// after wrapping this all component inside this can be accesed through user context
import React from 'react'

const UserContext = React.createContext()

export default UserContext;
