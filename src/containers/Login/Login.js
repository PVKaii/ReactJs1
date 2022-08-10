import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { actLoginRequest } from "../../actions/AuthTodo";
import LoginForm from "../../components/Login/LoginForm"

function Login(props) {
    var [user,setUser] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const onLogin= async ()=>{
       await dispatch(actLoginRequest(user,navigate,props.onLogin));
        // window.location.reload();
        props.onLogin();
    }
    
    const onChange= (e)=>{
        var name=e.target.name;
        var value=e.target.value;
        setUser({...user,[name]:value})
    }

    return(
        <div>
            <LoginForm onLogin={onLogin} onChange={onChange}/>
        </div>
    )
}

export default Login