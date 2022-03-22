
import React,{useState} from 'react';
import './App.css';
import Nav from './Components/Nav'
import { Modal} from 'react-bootstrap'
import Search1 from './Components/Search1';
import Card1 from './Components/Card1';
import MsPage  from './Pages/MsPage';
import { Button} from 'react-bootstrap';
import Add from './Add';

function App() {
 
    const[show,setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false)
    
         
  const[showPage,setShowPage]=useState('')

 
 
 
   
  return (
    <div className="App">
      <Nav />
    
      <Search1/>
      <Button onClick={handleShow} type="seconday"> Add</Button>
  
      
      <div className='jobDetails-main'>
        <div className="jobDetails-content">


          <Card1 data={setShowPage}
                     />
         
        </div>


      
        < MsPage item={showPage}/>
        
               
      
      </div>



      <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
     <Modal.Title> Add Job</Modal.Title></Modal.Header>
      <Modal.Body>
     <Add/>
     <Modal.Footer>
       <Button onClick={handleClose}varient="secondary">Close</Button>
             </Modal.Footer>
                 </Modal.Body>
               
      </Modal>

    </div>

  );
}

export default App;
