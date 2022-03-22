import React,{ useState,useEffect } from 'react';
import { FaCertificate } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import axios from 'axios';
import "../Components/User.css"
function User({item}) {
console.log(item);
 


  return (
   
    <div className="jobDetails-description">
    <div className="jobDetails-description-main">
      <div className="main-blank"></div>
      <div className="description-main-logo">
        <div className="main-logo-left"><i><img src={item.image} className='g'/></i></div>
        <div className="main-logo-right">
          <i className='certificate'><FaCertificate/></i>
          <i className='sharing'><FaShareAlt/></i>
          <i className='icon-hearts'><FaRegHeart/></i>
        </div>
      </div>
      <div className="description-main-content">
        <div className="main-content-head">
          <p>{item.position}</p>
        </div>
        <div className="main-content-subHead">
          <p><span>{item.title}</span>{item.place} </p>
          <p className='subHead-right'>{item.day}</p>
        </div>
        <div className="main-content-para-t1">
          <p>{item.header1}</p>
        </div>
        <div className="main-content-para-d1">
          <p>{item.description1}
          </p>
        </div>
        <div className="main-content-para-t1">
          <p>{item.header2}</p>
        </div>
        <div className="main-content-para-d1">
          <p>{item.description2}</p>
             <p>
               <li>
                 {item.list1}
                  <li>{item.list2}</li>

               </li>
                </p> 
        </div>
      </div>
    </div>
  </div>


  )
}

export default User
