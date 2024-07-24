import React, { useContext } from "react";
import Usercontext from "./Usercontext";
const Usercontext = ({ children }) => {
  const [user, setuser] = React.useState(null);
  return (
    <Usercontext.Provider value={{ user, setuser }}>
      {children}
    </Usercontext.Provider>
  );
};
export default useContext;
