import NotFoundPage from "../../pages/NotFoundPage"

const notFoundRouter = [{
    path : "/notfound",
    exact : false,
    page : NotFoundPage,
    authenticate:false,
    role:[]
}]


export default notFoundRouter