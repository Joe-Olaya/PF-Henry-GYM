import React from 'react'
import './style.css'
import logo from "../../assets/logoy.png"

function Sidebar ({changeSection})  {
  return (
    <div className='bg-white sidebarDash p-2' >
        <div className='m-2'>
          <img src={logo}></img>
           <span className='brand-name fs-4'> Supplies and training </span>
        </div>
          <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
          <a className='list-group-item py-2 '  onClick={()=>changeSection('GeneralSection')} >
            <i className='bi bi-speedometer2 fs-5 me-3'></i>
             <button name='GeneralSection'> Dashboard </button>
          </a> 
            <a className='list-group-item py-2 ' onClick={()=>changeSection()}>
            <i className='bi bi-house fs-4 me-3'></i>
             <button > Home </button>
          </a>
          <a className='list-group-item py-2'  onClick={()=>changeSection('ProductsSection')} >
            <i className='bi bi-table fs-4 me-3'></i>
             <button name='ProductsSection'>  Products </button>
          </a> 
          <a className='list-group-item py-2 ' onClick={()=>changeSection('SalesSection')}>
            <i className='bi bi-clipboard-data fs-4 me-3'></i>
             <button  className='SalesSection' > Report </button>
          </a>
          <a className='list-group-item py-2 ' onClick={()=>changeSection('UserSection')}>
            <i className='bi bi-people fs-5 me-3'></i>
             <button  name='UserSection' > Users </button>
          </a>
          <a className='list-group-item py-2 '>
            <i className='bi bi-power fs-4 me-3'></i>
             <button > Logout </button>
          </a>
        </div>
    </div>
  )
}

export default Sidebar