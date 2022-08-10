import HomePage from "../../pages/HomePage";

const homeRoutes=[
    {
        path : "/",
        exact : true,
        page : HomePage,
        authenticate:false,
        role:[],
    }
]

export default homeRoutes