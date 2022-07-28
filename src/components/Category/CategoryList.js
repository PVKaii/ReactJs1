import { Component } from "react";

class CategoryList extends Component{
    render(){
        return(
            <div>
            <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">name</th>
              </tr>
            </thead>

            <tbody>
                {this.props.children}
            </tbody>
          </table>
            </div>
        )
    }
}

export default CategoryList