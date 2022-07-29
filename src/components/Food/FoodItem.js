import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {  Link } from 'react-router-dom';

library.add(faCheck,faXmark)

class FoodItem extends Component{
    render(){
        var {food,index} = this.props;
        return(
            <tr>
              <th scope="row">{index +1}</th>
              <td>{food.name}</td>
              <td>{food.quantity}</td>
              {/* <td><FontAwesomeIcon icon="fa-solid fa-check" /></td> */}
              <td>{food.available ? <FontAwesomeIcon icon="fa-solid fa-check" /> : <FontAwesomeIcon icon="fa-solid fa-xmark" />}</td>
              <td>
                <div>
                <Link to={`./edit/${food.id}`} className="btn btn-primary" style={{marginRight:"15px"}}>Edit</Link>
                <button className="btn btn-danger" onClick={()=>this.props.onDelete(food.id)}>Delete</button>
                </div>
              </td>
            </tr>

        )
    }
}

export default FoodItem 