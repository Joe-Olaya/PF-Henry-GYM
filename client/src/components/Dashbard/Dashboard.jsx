import { useState } from "react"
import HomeDash from "./HomeDash"
import Sidebar from "./Sidebar"


export default function Dashboard(){
    
    const [toggle, setToggle]=useState(true)
    const Toggle =() => {
      setToggle(!toggle)
    }
    
    
   const [actualSection,setActualSection]=useState({
    GeneralSection:true,
    ProductsSection:false,
    UserSection:false,
    CreateSection:false,
    SalesSection:false
  })
    
  const changeSection =(section)=>{
   
     let defaults={
      GeneralSection:false,
      ProductsSection:false,
      UserSection:false,
      CreateSection:false,
      SalesSection:false
       }
    defaults[section]=true
     setActualSection( defaults)
    console.log(section)
  }
   return(
    <div className='container-fluid min-vh-100 backgroundStyles'>
         
            <div className='row'>
            {toggle && 
            <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
            <Sidebar changeSection={changeSection}/>
            </div>}
        
            {toggle &&<div className='col-2 col-md-2'></div>}

        <div className='col-9 col-md-10'>
            <HomeDash 
            Toggle={Toggle}
            GeneralSection={actualSection.GeneralSection}
            SalesSection={actualSection.SalesSection}
            ProductsSection={actualSection.ProductsSection}
            UserSection={actualSection.UserSection}
            CreateSection={actualSection.CreateSection}
            />
        </div>
        
        </div>  
    </div>
   )
}