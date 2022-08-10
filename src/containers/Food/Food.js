import {useEffect } from "react";
import FoodItem from "../../components/Food/FoodItem";
import FoodList from "../../components/Food/FoodList";
import { useDispatch, useSelector } from 'react-redux';
import { actDeleteFoodRequest,actFetchFoodsRequest } from "../../actions/FoodTodos";
import {  Link } from 'react-router-dom';
function Food(props){

    const foods=useSelector(state=>state.foodReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actFetchFoodsRequest())
    },[dispatch])

    const loadFoodItems = (foods)=>{
        return foods.map((food,index)=>(
            <FoodItem key={index} food={food} index={index} onDelete={onDelete}/>
        ))
    }

    const onDelete=(id)=>{
        dispatch(actDeleteFoodRequest(id));
    }

    return(
            <div>
            <Link to={`./add`} className="btn btn-success col-2" style={{marginBottom:"10px"}}>Add</Link>
                <FoodList>
                    {loadFoodItems(foods)}
                </FoodList>
            </div>
    )
}

export default Food



