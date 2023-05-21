import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import {useSelector,useDispatch} from 'react-redux'
import { getProducts,getUsers } from '../../redux/actions';

function HomeDash({Toggle,GeneralSection,ProductsSection,UserSection,SalesSection}) {
   const dispatch=useDispatch();
   const products=useSelector(state=>state.products)
   const users =useSelector(state=>state.users)
   console.log(users);
   useEffect(()=>{
    dispatch(getProducts())
   },[])

   useEffect(()=>{
    dispatch(getUsers())
   },[])


   console.log(products)
  return (
    <div className='px-1'>
      <Nav Toggle={Toggle}/>
      
      <div className='container-fluid'> 
         <div className='row g-3 my-2'> 
         <div className='col-md-3 p-1'>  
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>                               
                <h3 className='fs-2'>{users.length}</h3>                                
                 <p className='fs-5'>Users</p> 
                 <i className='bi bi-people p-3 fs-1'></i>                          
            </div>  
            </div>  
         </div>

           <div className='col-md-3 p-1'>  
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>                               
                <h3 className='fs-2'>{products.length}</h3>                                
                 <p className='fs-5'>Products</p> 
                  <i className='bi bi-cart-plus p-3 fs-1'></i>                          
              </div>  
            </div>  
         </div>

         <div className='col-md-3 p-1'>  
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>                               
                <h3 className='fs-2'>250</h3>                                
                 <p className='fs-5'>Sales</p> 
                  <i className='bi bi-currency-dollar p-3 fs-1'></i>                          
              </div>  
            </div>  
         </div>

        

         <div className='col-md-3 p-1'>  
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
             <div>                               
                <h3 className='fs-2'>270</h3>                                
                 <p className='fs-5'>Routines</p> 
                  <i className='bi bi-universal-access p-3 fs-1'></i>                          
              </div>  
            </div>  
         </div>
         
        

         {UserSection&&
      <section>
         <table className="table caption-top bg bg-white rounded">
      <caption className='text-white fs-4'>Users </caption>
      <thead>
        <tr>  
          <th scope="col">#</th>
          <th scope="col">Name </th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Dni</th>
          <th scope="col">Phone</th>
          <th scope="col">State</th>
        </tr>
      </thead>

      <tbody className=' '>
       { users.map((i,key)=>
       <tr>
          <th scope="row">{key+1}</th>
          <td> {i.name} </td>
          <td>{i.email}</td>
          <td>{i.address}</td>
          <td>{i.dni}</td>
          <td>{i.phone}</td>
          <td>{i.state}</td>
        </tr>
       )}
       
        </tbody>

      </table>
      </section>
    }


    {ProductsSection&&
      <section>
         <table className="table caption-top bg bg-white rounded">
      <caption className='text-white fs-4'>Products </caption>
      <thead>
        <tr>  
          <th scope="col">Id</th>
          <th scope="col">Name </th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">State</th>
          <th scope="col">Image</th>
        </tr>
      </thead>

      <tbody className=' '>
       { products.map((i,key)=>
       <tr>
          <th scope="row">{key+1}</th>
          <td>{i.name}</td>
          <td> {i.price} </td>
          <td>{i.stock}</td>
          <td>{i.state}</td>
          <td>
            <a href={`${i.image}`}>
              ver imagen
            </a>
          </td>
        </tr>
       )}
       
        </tbody>

      </table>
      </section>
    }
      </div>
      </div>
    </div>
  )

}

export default HomeDash;