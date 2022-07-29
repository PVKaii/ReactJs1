import FoodActionPage from "../../pages/FoodActionPage";
import FoodPage from "../../pages/FoodPage"

const foodRoutes=[
    {
        path : "/food",
        exact : true,
        page : FoodPage
    },
    {
        path : "/food/edit/:id",
        exact : false,
        page : FoodActionPage
    },
    {
        path : "/food/add",
        exact : false,
        page : FoodActionPage
    }
]

export default foodRoutes;