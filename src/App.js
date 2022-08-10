import './App.css';
import Menu from './components/Menu/Menu';
import routers from './routes/routes';
import { Navigate,Routes,Route, BrowserRouter as Router } from 'react-router-dom';
import {  useEffect, useState } from 'react';


function App(){
  var [login,setLogin]= useState(localStorage.getItem("user")!==null? true : false);

  const onLogin=()=>{
    setLogin(!login);
  }

  useEffect(()=>{
    console.log("logiibnn")
  },[login])

  const showContentMenus= (routers)=> {

    var index=0;
    var routerList=[]
    routerList.push(<Route key={++index} path="*" exact={false} element={<Navigate to="/notfound" replace/>} />)
    routers.forEach(element => {
      var rout= element.map((route)=>{
        console.log(localStorage.getItem("user"))
        if(route.authenticate===false||localStorage.getItem("user")!=null){
          if(localStorage.getItem("user")&&route.role.length>0){
              
          }
          return(
            <Route key={++index} path={route.path} exact={route.exact} element={<route.page onLogin={onLogin}/>}  />
          )
        }
        else return(
          <Route key={++index} path={route.path} exact={route.exact} element={<Navigate to="/login" replace/>}  />
        )
        })
        // console.log(rout);
        routerList.push(...rout);
    }
    );
    console.log(routerList)
    return routerList;
  }


  return(
    <Router>
      <div>
          <Menu/>
          <div className='container'>
              <Routes>
                {showContentMenus(routers)}
                {/* <Route path='/' exact={true} element={HomePage} /> */}
              </Routes>
          </div>
      </div>
    </Router>
    )



}






export default App;
