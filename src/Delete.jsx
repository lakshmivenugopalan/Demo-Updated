import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from 'react-bootstrap';


export default function Delete({ data,job }) {

    const [state, setState] = useState(data);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    console.log("state1", state)




    const ID = state.id
   
   

    // function delete(ID){

    // }

    function del(e){
      
        e.preventDefault();
        console.log("fggfg",state)
      
        axios.delete(`http://localhost:9502/Jobs/${state.id}`)
        .then(response=> {
            if(response.status===200)
            toast.success("deleted");

             console.log("success")
            
        }).catch((error)=>{
            console.log(error)
        })

    }



    return (
        <div>

             <Form>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="id"
                        
                        name="title"
                        value={ID}
                      
                    />
                </Form.Group>

                <ToastContainer/>



        <Button onClick={del} variant="success" type="submit">delete </Button>
            </Form> 


           

        </div>
    )
}

