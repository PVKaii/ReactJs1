import { Component } from "react";
import FoodItem from "../../components/Food/FoodItem";
import FoodList from "../../components/Food/FoodList";
import { connect } from 'react-redux';
import { actDeleteFood, actFetchFoods } from "../../actions/FoodTodos";
import {  Link } from 'react-router-dom';
class Food extends Component{
    componentDidMount(){
        this.props.fetchAllFoods();
    }


    render(){
        var {foods} = this.props;
        console.log("123 " +foods)
        return(
            <div>
            <Link to={`./add`} className="btn btn-success col-2" style={{marginBottom:"10px"}}>Add</Link>
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
        this.props.deleteFood(id)
    }
}


const mapStateToProps = state =>{
    console.log("state " +state)
    return {
        foods : state.foodReducer
    }
}

const mapDispatchtoProps = (dispatch)=>{
    return {
        fetchAllFoods : ()=>{
            dispatch(actFetchFoods())
        },
        deleteFood : (id)=>{
            dispatch(actDeleteFood(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Food)