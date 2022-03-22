import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import  validate from "./Validation";
import{  ToastContainer,toast } from "react-toastify"



function Add() {

    const [job, setJob] = useState({

        fields: {
            title: { value: "", required: true },
            position: { value: "", required: true },
            place: { value: "", required: true },
            rating:{value:"",required:true},
            icon:{value:[],required:false},
        }
    })
    
    const [state, setstate] = useState({})
    const[errors,setErrors]=useState({})
    const [isValid, setIsValid] = useState(false);


    const [selectedFile, setSelectedFile] = useState({});
    const [fileBase64String, setFileBase64String] = useState("")
    function handlefileChange1(e) {
        setSelectedFile(e.target.files)
       
    }
    console.log(selectedFile)
    const encodeFileBase64 = (file) => {
        var reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                var Base64 = reader.result;
                if (Base64 !== undefined && !job.fields.icon.value.includes(Base64)){
                job.fields.icon.value.push(Base64)
                setstate({...state,image:Base64})
                }
                setFileBase64String(Base64)
            }
            reader.onerror = (error) => {
                console.log('error :', error)
            }
        }
    }


    encodeFileBase64(selectedFile[0])

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setJob({
            ...job, fields: { ...job.fields, [name]: { ...job.fields[name], value: value } }
        });
        setstate({
            ...state, [name]: value
        });
    }

    function adding(e) {
        e.preventDefault();
        setErrors(validate(job))
        setIsValid(true);
    }

    useEffect(() => {

        if (Object.keys(errors).length === 0 && isValid) {
            
        axios.post("http://localhost:9502/Jobs", state)
        .then(response => {
           if(response.status===200)
           toast.success("added successfully")
            console.log(response);
          
        })
           
        }
    }, [errors, isValid])


    return (

        <Form>
            <Form.Group>

                <Form.Control
                    type="text"
                    placeholder="Name of the Company"
                    required
                    name="title"
                    value={job.title}
                    onChange={handleChange}
                  

                />
  {errors.title && <p className="error"style={{color:"red"}}>{errors.title} </p>}

            </Form.Group>

            <Form.Group>

                <Form.Control
                    type="text"

                    name="position"
                    placeholder="position"
                    value={job.position}
                    required
                    onChange={handleChange}
                />
 {errors.position && <p className="error"style={{color:"red"}}>{errors.position} </p>}

            </Form.Group>

            <Form.Group>

                <Form.Control
                    type="text"
                    placeholder="place"
                    name="place"
                    value={job.place}
                    required
                    onChange={handleChange}
                />

            </Form.Group>
            {errors.place && <p className="error"style={{color:"red"}}>{errors.place} </p>}

            <Form.Group>

                <Form.Control
                    type="text"
                    placeholder="rating"
                    name="rating"
                    value={job.rating}
                    required
                    onChange={handleChange}
                />

            </Form.Group>
            {errors.rating && <p className="error"style={{color:"red"}}>{errors.rating} </p>}

            <Form.Group>

                <Form.Control
                    type="text"
                    placeholder="date"
                    name="date"
                    value={job.date}
                    required
                    onChange={handleChange}
                />

            </Form.Group>
            {errors.date && <p className="error"style={{color:"red"}}>{errors.date} </p>}
            <Form.Group>

                <Form.Control
                    type="text"
                    placeholder="day"
                    name="day"
                    value={job.day}
                    required
                    onChange={handleChange}
                />

            </Form.Group>

            <Form.Group>

                <Form.Control
                    type="text"
                    placeholder="header1"
                    name="header1"
                    value={job.header1}
                    required
                    onChange={handleChange}
                />

            </Form.Group>
            <Form.Group>

                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="description1"
                    name="description1"
                    value={job.description1}
                    required
                    onChange={handleChange}
                />

            </Form.Group>
            <Form.Group>

                <Form.Control
                    type="text"
                    placeholder="header"
                    name="header2"
                    value={job.header2}
                    required
                    onChange={handleChange}
                />

            </Form.Group>


            <Form.Group>

                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="description"
                    name="description2"
                    value={job.description2}
                    required
                    onChange={handleChange}
                />

            </Form.Group>



            <Form.Group>

                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="list"
                    name="list1"
                    value={job.list1}
                    required
                    onChange={handleChange}
                />

            </Form.Group>


            <Form.Group>

                <Form.Control
                   as="textarea"
                   rows={3}
                    placeholder="list"
                    name="list2"
                    value={job.list2}
                    required
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label><b>Hero Image</b></Form.Label>
                <Form.Control type="file" name="hero" onChange={(e) => { handlefileChange1(e); }} />
                <Form.Text className="text-muted">
                   
                </Form.Text>
            </Form.Group>

            <ToastContainer/>
            <Button onClick={adding} variant="success" type="submit" block> Add</Button>

        </Form>

    )
}

export default Add