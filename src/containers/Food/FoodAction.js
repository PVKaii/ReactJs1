import { Component } from "react";
import FoodForm from "../../components/Food/FoodForm";

class FoodAction extends Component{
    render (){
        return(
            <div>
                <FoodForm food={{
                    name:"",
                    available:true,
                    quantity:0
                }}/>
            </div>
        )
    }
}

export default FoodAction