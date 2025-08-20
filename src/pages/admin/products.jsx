import axios from "axios"

export default function products(){

 axios.get("http://localhost:3000/api/products").then((res)=>{
    console.log(res)
})


   return(
    <div>
        <h1>Admin Products Page</h1>
    </div>
   )
    
}