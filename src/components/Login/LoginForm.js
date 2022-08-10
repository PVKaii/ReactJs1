import { Component } from "react";

class LoginForm extends Component{
    render(){
        return (
            <div className="wrapper fadeInDown">
              <div id="formContent">
                {/* Tabs Titles */}
                {/* Icon */}
                <div className="fadeIn first">
                  {/* <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> */}
                </div>
                {/* Login Form */}
                <form>
                  <input type="text" id="login" className="fadeIn second" name="email" placeholder="username" value={this.props.username} onChange={(e)=>{this.props.onChange(e)}}/>
                  <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" value={this.props.password} onChange={(e)=>{this.props.onChange(e)}} />
                </form>
                <button type="submit" className="btn btn-success" onClick={()=>{this.props.onLogin()}}> Đăng nhập</button>
                {/* Remind Passowrd */}
                <div id="formFooter">
                  {/* <a className="underlineHover" href="#">Forgot Password?</a> */}
                </div>
              </div>
            </div>
          );
    }
}


export default LoginForm