import { Component } from "react";
import Category from "../containers/Category/Category";

class CategoryPage extends Component{
    render(){
        return(
            <div>
                    <h2 style={{margin : "30px"}}>
                        Category Manager
                    </h2>
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        <Category />
                    </div>
            </div>
        )
    }
}

export default CategoryPage