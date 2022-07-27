import { Component } from "react";
import FoodItem from "../../components/Food/FoodItem";
import FoodList from "../../components/Food/FoodList";

class Food extends Component{
    constructor(props){
        super(props);
        this.state={
            foods : [
                {
                    name : "food 1",
                    quantity:10,
                    available:true
                },
                {
                    name : "food 2",
                    quantity:10,
                    available:true
                },
                {
                    name : "food 3",
                    quantity:10,
                    available:false
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <FoodList>
                    {this.loadFoodItems(this.state.foods)}
                </FoodList>
            </div>

        )
    }

    loadFoodItems(foods){
        return foods.map((food,index)=>(
            <FoodItem key={index} food={food} index={index}/>
        ))
    }
}

export default Food