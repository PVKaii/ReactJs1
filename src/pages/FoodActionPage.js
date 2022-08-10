import { Component } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import FoodAction from "../containers/Food/FoodAction";

// class FoodActionPage extends Component{


//     render(){      
//         return(
//             <div>
//                 <FoodAction/>
//             </div>
//         )
//     }
// }


const FoodActionPage =()=>{

    let {id} = useParams();
    let navigate = useNavigate()
    return(
            <div>
                <FoodAction id={id} navigate={navigate}/>
            </div>
    )
}

export default  FoodActionPage