import { Component } from "react";
import Login from "../containers/Login/Login";

class LoginPage extends Component{

    render(){
        return (
            <div>
                <Login onLogin={this.props.onLogin}/>
            </div>
          );
    }
}


export default LoginPage