export const callAPi = (method,body,endpoint)=>{

   return fetch(`http://localhost:8081/${endpoint}`,
   {
    method : method,
    headers: getHeader(),
    body : body,
    redirect : "follow"
   }
   )
}


const getHeader = ()=>{
   if(localStorage.getItem("user")!==null){
      const token = JSON.parse(localStorage.getItem("user")).accessToken;
      return {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
      }
   }
   return {'Content-Type': 'application/json'}
}