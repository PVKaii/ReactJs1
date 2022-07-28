import { Component } from "react";
import CategoryItem from "../../components/Category/CategoryItem";
import CategoryList from "../../components/Category/CategoryList";

class Category extends Component{
    constructor(props){
        super(props);
        this.state={
            categorys : [
                {
                    name : "category 1",
                },
                {
                    name : "category 2",
                },
                {
                    name : "category 3",
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <CategoryList>
                    {this.loadCategoryItems(this.state.categorys)}
                </CategoryList>
            </div>

        )
    }

    loadCategoryItems(categorys){
        return categorys.map((category,index)=>(
            <CategoryItem key={index} category={category} index={index}/>
        ))
    }
}

export default Category