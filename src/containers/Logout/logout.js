import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

function Logout(props){
    const navigate = useNavigate();
    useEffect(()=>{
        console.log("logot")
        localStorage.clear();
        props.onLogin();
        navigate("/login");
    })
}

export default Logout