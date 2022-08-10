import {  useEffect, useState } from "react";
import { actAddFoodRequest,  actEditFoodRequest, actGetEditFoodRequest } from "../../actions/FoodTodos";
import FoodForm from "../../components/Food/FoodForm";
import {  useDispatch, useSelector } from 'react-redux';

function FoodAction(props){
    const food = useSelector(state=>state.foodActionReducer);
    var [state,setState] = useState(food);
    const dispatch = useDispatch();
    let id = props.id;

    useEffect(()=>{
        if(id){
            dispatch(actGetEditFoodRequest(id));
        }
    },[dispatch,id])

    useEffect(()=>{
        setState(food)

    },[food])


    const onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        setState({...state,[name]:value})
    }

    const onSave = (e)=>{
        e.preventDefault();
        var food = {
            id:state.id,
            name:state.name,
            available:state.available,
            quantity:state.quantity,
            category:4
        }
        console.log("food")
        console.log(food)
        if(id){
            dispatch(actEditFoodRequest(food));
        }
        else{
            dispatch(actAddFoodRequest(food))
        }
        onBack(e);
    }
    const onBack = (e)=>{
        e.preventDefault();
        props.navigate(-1)
    }    

    return(
        <div>
            <FoodForm food={state}
             onChange={onChange}  onSave={onSave} onBack={onBack}
             />
        </div>
    )
}

export default FoodAction
