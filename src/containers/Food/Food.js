import { Component } from "react";
import FoodItem from "../../components/Food/FoodItem";
import FoodList from "../../components/Food/FoodList";
import { connect } from 'react-redux';

class Food extends Component{
    constructor(props){
        super(props);
    }


    render(){
        var {foods} = this.props;
        console.log("123 " +foods)
        return(
            <div>
                <FoodList>
                    {this.loadFoodItems(foods)}
                </FoodList>
            </div>

        )
    }

    loadFoodItems(foods){
        return foods.map((food,index)=>(
            <FoodItem key={index} food={food} index={index} onDelete={this.onDelete}/>
        ))
    }


    onDelete = (id) => {
        this.props.state.foods=this.props.state.foods.filter(food=>food.id!==id);
    }
}


const mapStateToFoods = state =>{
    console.log("state " +state)
    return {
        foods : state.foodReducer
    }
}

export default connect(mapStateToFoods,null)(Food)