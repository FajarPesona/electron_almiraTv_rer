import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonHome = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/home")}>Home</button>;
};

export default ButtonHome;
