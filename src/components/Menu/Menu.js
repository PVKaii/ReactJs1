import { Component } from "react";
import {  Link } from 'react-router-dom';

const menus=[
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
    }
]

class Menu extends Component{
    render(){
        return(
            <div className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </div>
        );
    }

    showMenus=(menus)=>{
        return(
            menus.map((menu,index)=>(
                <li key={index} >
                    <Link to={menu.to}>
                        {menu.name}
                    </Link>
                </li>
            ))
        )
    }
}

export default Menu