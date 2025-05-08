import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {

    const {Component} = props;
    const navigate = useNavigate()

    useEffect(()=>{
        let sign = localStorage.getItem('sign');
        if(sign){
          navigate('/sign');
        }
    });
  return (
    <div>
      <Component />
    </div>
  )
}

export default Protected;
