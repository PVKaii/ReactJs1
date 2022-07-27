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
                    <Food/>
                </body>
            </div>
        )
    }

}

export default FoodPage