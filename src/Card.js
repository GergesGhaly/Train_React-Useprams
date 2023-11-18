import React, { useState } from 'react'
import {  Link } from "react-router-dom";


const Card = ({el,Removhandel,admin}) => {


  return (
    <div className="card" style={{ width: "18rem"  }} >
        
  
    <Link to={`/cards/${el.id}`} >
  <img src={el.img||'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg'} className="card-img-top" alt="Photo Error" />
    </Link>
  <div className="card-body">
    <h5 className="card-title">
      {el.namee}
    </h5>
    <p className="card-text">
      {el.num.substring(0, 100)}
    </p>
    <div className='btn-group'>
      
    
      
    {
      admin&&
    <a onClick={()=>Removhandel(el.id)} href="#" className="btn btn-danger">
      Delete
    </a>
    }
    </div>

  </div>
</div>
  )
}

export default Card