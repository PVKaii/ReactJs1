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
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <Link className="navbar-brand" to="/">Food Center</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {this.showMenus(menus)}
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
}

export default Menu