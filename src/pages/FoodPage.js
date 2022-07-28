import { Component } from "react";
import Food from "../containers/Food/Food";

class FoodPage extends Component{
    render(){
        return(
            <div>
                <header>
                    <h2 style={{margin : "30px"}}>
                        Food Manager
                    </h2>
                </header>
                <body>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <Food />
                    </div>
                </body>
            </div>
        )
    }

}

export default FoodPage