import { Component } from "react";
import {  Link } from 'react-router-dom';
import { checkRole, ROLE_ADMIN } from "../../contants/RoleContants";

const adminMenus=[
    {
        name : "Trang chủ",
        to :"/",
    },
    {
        name : "Món ăn",
        to :"/food",
    },
    {
        name : "Loại",
        to :"/category",
    },
]

const memberMenus=[
    {
        name : "Trang chủ",
        to :"/",
    },
    {
        name : "Món ăn",
        to :"/food",
    }
]

const unauthorizeMenus = [
    {
        name : "Đăng nhập",
        to :"/login",
    },
    {
        name : "Đăng ký",
        to :"/register",
    }
]


const authorizeMenus = [
    {
        name : "Đăng xuất",
        to :"/logout",
    }
]


class Menu extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <Link className="navbar-brand" to="/">Food Center</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {
                    this.authorizeShowMenus()
                }
              </ul>
              <ul className="navbar-nav ml-auto">
                {
                    localStorage.getItem("user") ? this.showMenus(authorizeMenus): this.showMenus(unauthorizeMenus)
                }

              </ul>
            </div>
          </nav>
        );
    }

    showMenus=(menus)=>{
        return(
            menus.map((menu,index)=>(
                <li key={index} className="nav-item">
                    <Link to={menu.to}  className="nav-link" >
                        {menu.name}
                    </Link>
                </li>
            ))
        )
    }

    authorizeShowMenus=()=>{
        if(localStorage.getItem("user")===null){
           return this.showMenus(memberMenus)
        }
        else{
            if(checkRole(ROLE_ADMIN)) return this.showMenus(adminMenus)
            else return this.showMenus(memberMenus)
        }
    }
}

export default Menu