import { Component } from "react";

class FoodList extends Component{
    render(){
        return(
            <div className="container">
            <table className="table table-striped col-5">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">name</th>
                <th scope="col">quantity</th>
                <th scope="col">available</th>
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

export default FoodList