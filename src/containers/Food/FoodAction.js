import { Component } from "react";
import { actAddFood, actEditFood, actFindFood } from "../../actions/FoodTodos";
import FoodForm from "../../components/Food/FoodForm";
import { connect } from 'react-redux';
class FoodAction extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            quantity : 0,
            available: true
        }
    }

    componentDidMount(){
        if(this.props.id!=null){
            this.props.loadEditFood(this.props.id);
        }
    }
    // componentWillReceiveProps(nextProps,preState){
    //     return {
    //         id:1,
    //         name:"food3",
    //         quantity : 10,
    //         available: true
    //     }
    // }




    // getDerivedStateFromProps(nextProps,preState){
    //     console.log(nextProps.food)
    //     return {
    //         id:nextProps.food.id,
    //         name:nextProps.food.name,
    //         quantity : nextProps.food.quantity,
    //         available: nextProps.food.available
    //     }
    // }


    componentDidUpdate(nextProps,preState){
        if(this.props.food!==nextProps.food){
            this.setState({
                id:this.props.food.id,
                name:this.props.food.name,
                quantity : this.props.food.quantity,
                available: this.props.food.available
            })
        }
    }
    render (){
        return(
            <div>
                <FoodForm food={{
                    id:this.state.id,
                    name:this.state.name,
                    available:this.state.available,
                    quantity:this.state.quantity
                }} onChange={this.onChange}  onSave={this.onSave} onBack={this.onBack}/>
            </div>
        )
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e)=>{
        e.preventDefault();
        var food = {
            id:this.state.id,
            name:this.state.name,
            available:this.state.available,
            quantity:this.state.quantity
        }
        console.log(food)
        if(this.props.id){
            this.props.editFood(food);
        }
        else{
            this.props.addFood(food);
        }
        this.onBack(e);
    }
    onBack = (e)=>{
        e.preventDefault();
        this.props.navigate(-1)
    }    

}

const mapDispatchtoProps = dispatch =>{
    return{
        loadEditFood : (id)=>{
            dispatch(actFindFood(id))
        },
        editFood : (food)=>{
            dispatch(actEditFood(food))
        },
        addFood : (food)=>{
            dispatch(actAddFood(food))
        }
        
    }
}

const mapStateToProps = state =>{
    return{
        food : state.foodActionReducer
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(FoodAction)