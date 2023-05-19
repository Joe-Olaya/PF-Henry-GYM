import React from 'react'
import Nav from './Nav'


function HomeDash({Toggle}) {
  return (
    <div className='px-1'>
      <Nav Toggle={Toggle}/>
      
      <div className='container-fluid'> 
         <div className='row g-3 my-2'> 
         <div className='col-md-3 p-1'>  
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>                               
                <h3 className='fs-2'>210</h3>                                
                 <p className='fs-5'>Users</p> 
                  <i className='bi bi-people p-3 fs-1'></i>                          
              </div>  
            </div>  
         </div>

           <div className='col-md-3 p-1'>  
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
            <div>                               
                <h3 className='fs-2'>230</h3>                                
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
         
        

         <table className="table caption-top bg bg-white rounded">
          <caption className='text-white fs-4'> Users Info </caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User</th>
      <th scope="col"> phone </th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td> 322 </td>
      <td> Mark@fat</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td> 444</td>
      <td>Jacob@mdo.com</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry </td>
      <td>555</td>
      <td> Larry@..</td>
    </tr>
  </tbody>
</table>
      


      </div>
      </div>
    </div>
  )
}

export default HomeDash;