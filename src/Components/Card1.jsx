import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Card.css';
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import Edit from '../Edit'
import Delete from '../Delete';


function Card1({ data }) {
  const [id, setId] = useState(null)
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const handleClose = () => setShow(false)
  const handleClose1 = () => setShow1(false)

  const [job, setJob] = useState([])

  //   function edit(i){
  //     setId(i);
  //    setShow(true)
  // }

  useEffect(() => {
    axios.get('http://localhost:9502/Jobs')
      .then(response => {
        const jobData = response.data;
        console.log(jobData)
        setJob(jobData)
      });

  }, [])
  console.log("state", job)






  return (

    <div className="job-card-main" >
      {
        job.map((item, i) => {
          return (
            <div className='job-first-main' >
              <div className="jobCard-first">
                <div className="jobCard-first-logo"><img src={item.image} className='hp' /></div>
                <div className="jobCard-first-rating"><p className='number'> {item.rating}</p></div>
              </div>
              <div className="jobCard-second">
                <p className='sub-title' >{item.title}</p>
                <p className='job-title' onClick={() => { data(item) }}>{item.position}</p>
                <p className='job-place'>{item.place}</p>
                <div className='tags'>
                  <p> C#</p>
                  <p> C++</p>
                  <p> Python</p>
                </div>
              </div>

              <div className="jobCard-third">
                <div className="jobCard-third-heart"><i><FaHeart /></i></div>
                <div className="jobCard-third-date">{item.date}</div>

                <Button onClick={() => { setId(i);setShow1(true) }}>Delete</Button>
              </div>
              <Button onClick={() => { setId(i); setShow(true) }} type="primary" > Edit</Button>
                {/* <Button onClick={edit(i)} type="primary" > Edit</Button> */}

            </div>
          )
        })
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Edit</Modal.Title></Modal.Header>
        <Modal.Body>

          <Edit data={job[id]} />
          </Modal.Body>
         
          <Modal.Footer>
            <Button onClick={handleClose} varient="secondary">Close</Button>
       
          </Modal.Footer>
       
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title>Delete</Modal.Title></Modal.Header>
        <Modal.Body>
      
          <Delete data={job[id]} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose1} varient="secondary">Close</Button>
          </Modal.Footer>
       
      </Modal> 


    </div>


  );
}

export default Card1