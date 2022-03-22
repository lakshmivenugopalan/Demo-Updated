import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import validate from "./Validation";

export default function Edit({ data }) {
    const [state, setstate] = useState(data);
    console.log("state1", state)
    let obj = {}
    const [update, setUpdate] = useState(true)
    const [errors, setErrors] = useState({});
    const [isValid, setIsvalid] = useState(false);


    const [job, setJob] = useState({
        fields: {
            image: { value: [], required: false },
            title: { value: state?.title, required: true },
            position: { value: state?.position, required: true },
            place: { value: state?.place, required: true },
            rating: { value: state?.rating, required: true },
            date: { value: state?.date, required: true },
            day: { value: state?.day, required: true },
            header1: { value: state?.header1, required: true },
            description1: { value: state?.description1, required: true },
            header2: { value: state?.header2, required: true },
            description2: { value: state?.description2, required: true },
            list1: { value: state?.list1, required: true },
            list2: { value: state?.list2, required: true },
        }
    })

    const ID = state?.id


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
    function edit(e) {
        e.preventDefault();
        setErrors(validate(job))
        setIsvalid(true);
        const obj1 = JSON.stringify(job)
        { obj === obj1 ? setUpdate(false) : setUpdate(true) }
    }

    const [selectedFile, setSelectedFile] = useState([]);

    const [fileBase64String, setFileBase64String] = useState("")


    function handlefileChange1(e) {
        setSelectedFile(e.target.files)
        console.log(e.target.files)

    }

    const encodeFileBase64 = (file) => {
        var reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                var Base64 = reader.result;
                if (Base64 !== undefined && !job.fields.image.value.includes(Base64)) {
                    job.fields.image.value.push(Base64)
                    setstate({ ...state, image: Base64 })
                }
                setFileBase64String(Base64)
            }
            reader.onerror = (error) => {
                console.log('error :', error)
            }
        }
    }


    encodeFileBase64(selectedFile[0])


    useEffect(() => {
        obj = JSON.stringify(job)

    }, [])

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isValid) {
            if (update) {
                axios.put("http://localhost:9502/Jobs", state)
                    .then(response => 
                        {
                        if (response.status === 200)
                            toast.success("updated successfully");
                         }
                        )
            }
            else {
                toast.info("There is no change")
                }

        }
    }, [errors, isValid])





    return (
        <Form>
            <Form.Group>
                <Form.Control

                    placeholder="Name of the Company"
                    required
                    name="title"
                    value={job.fields.title?.value}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Position"
                    required
                    name="position"
                    value={job.fields.position?.value}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="rating"
                    required
                    name="rating"
                    value={job.fields.rating?.value}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="day"
                    required
                    name="day"
                    value={job.fields.day.value}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="heading"
                    required
                    name="header1"
                    value={job.fields.header1.value}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder=""
                    required
                    name="description"
                    value={job.fields.description1.value}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="heading"
                    required
                    name="header2"
                    value={job.fields.header2.value}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="description"
                    required
                    name="description2"
                    value={job.fields.description2.value}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder=""
                    required
                    name="list1"
                    value={job.fields.list1.value}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder=""
                    required
                    name="list2"
                    value={job.fields.list2.value}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label><b>Hero Image</b></Form.Label>
                <Form.Control type="file"
                    name="hero"

                    onChange={(e) => { handlefileChange1(e); }} />

                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <ToastContainer />

            <Button onClick={edit} variant="success" type="submit" block> Edit</Button>
        </Form>
    )
}
