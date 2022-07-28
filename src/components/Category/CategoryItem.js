import { Component } from "react";


class CategoryItem extends Component{
    render(){
        var {category,index} = this.props;
        return(
            <tr>
              <th scope="row">{index +1}</th>
              <td>{category.name}</td>
              <td>
                <div>
                <button className="btn btn-primary" style={{marginRight:"15px"}}>Edit</button>
                <button className="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr>

        )
    }
}

export default CategoryItem 