import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Alert, Button, Container, Form, InputGroup } from 'react-bootstrap';
import GlobalForm from '../Components/Atoms/Global-form';
import * as Icon from "react-icons/fa";
import { UserContext } from '../context/User-context';
import { useMutation, useQuery } from 'react-query';
import { API } from '../config/Api';

function EditProfile() {
    const title = "Edit Profile";
    document.title = "Foodways | " + title;

    const [state, dispatch] = useContext(UserContext);
    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    let { data: profile } = useQuery("profileEditCache", async () => {
        const response = await API.get("/Profile/" + id);
        return response.data.data;
    })

    const [form, setForm] = useState({
        fullname: "",
        phone: "",
        image: "",
        address: "",
        location: "",
    })

    useEffect(() => {
        if (profile) {
            setPreview(profile.image);
            setForm({
                ...form,
                fullname: profile.fullname,
                phone: profile.phone,
                address: profile.address,
                location: profile.location,
            })
        }
    }, [profile]);

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === "file" ? e.target.files : e.target.value,
        });

        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        // return console.log("dta form", form)
        try {

            const formData = new FormData();
            if (form.image) {
                formData.set("image", form?.image[0], form?.image[0]?.name);
            }
            formData.set("fullname", form.fullname);
            formData.set("phone", form.phone);
            formData.set("address", form.address);
            formData.set("location", form.location);

            const response = await API.patch("/Profile/" + profile.id, formData);

            if (response.data.code === 200) {
                const alert = (
                    <Alert variant="success" className="py-1 fw-bold">
                        Profile has been Updated
                    </Alert>
                )
                setMessage(alert);
            }
            setPreview(null);
            const timer = setTimeout(navigates, 1000);

            function navigates() {
                navigate(`/Profile/${id}`);
            }


        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <Container>
                <div className="Edit-profile mt-5 d-md-flex align-items-center">
                    <p className="fs-5 fw-bold me-3"><Link to={`/Profile/${id}`} className="text-danger"><Icon.FaArrowLeft /> Back |</Link> </p>
                    {state.user.role === "Partner" ? (
                        <p className='fs-3 fw-bold'>Edit Profile Partner</p>
                    ) : (
                        <p className='fs-3 fw-bold'>Edit Profile</p>
                    )}
                </div>
                <hr />
                {message && message}
                <Form onSubmit={(e) => handleOnSubmit(e)}>
                    {preview && (
                        <div>
                            <img className='rounded mb-2'
                                src={preview}
                                style={{
                                    maxWidth: "150px",
                                    maxHeight: "150px",
                                    objectFit: "cover",
                                }}
                                alt="No image found"
                            />
                        </div>
                    )}
                    <div className="mb-3 d-md-flex gap-3">
                        <Form.Group className="w-100" controlId="formBasicEmail">
                            <Form.Label>
                                Fullname
                            </Form.Label>
                            <GlobalForm
                                type='text'
                                name='fullname'
                                defaultValue={form?.fullname}
                                onChange={handleOnChange}
                                placeholder={form?.fullname}
                            />
                        </Form.Group>
                        <Form.Group className='w-100 text-end' controlId="formBasicimage">
                            <GlobalForm
                                type="file"
                                name="image"
                                onChange={handleOnChange}
                                hidden
                            />
                            <Form.Label className="btn text-white" style={{
                                backgroundColor: "#433434"
                            }}>
                                Upload image &nbsp; <Icon.FaImage />
                            </Form.Label>
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3 border-2" controlId="formBasicPhone">
                        <Form.Label>
                            Phone Number
                        </Form.Label>
                        <GlobalForm
                            type='text'
                            name='phone'
                            defaultValue={form?.phone}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>
                            Address
                        </Form.Label>
                        <GlobalForm
                            type='text'
                            name='address'
                            defaultValue={form?.address}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicLocation">
                        <Form.Label>
                            Location
                        </Form.Label>
                        <div className="mb-3 d-md-flex gap-3">
                            <GlobalForm
                                type='text'
                                name='location'
                                defaultValue={form?.location}
                                onChange={handleOnChange}
                            />
                            <button className="btn text-white mt-3 mt-md-0 d-flex gap-2 justify-content-center align-items-center" style={{ backgroundColor: "#433434" }}>Select on map <Icon.FaMapMarkedAlt /></button>
                        </div>
                    </Form.Group>
                    <Form.Group className='mt-5 d-flex justify-content-md-end justify-content-center'>
                        <Button type='submit' style={{ backgroundColor: "#433434", width: "200px" }} className="border-0 mb-5">
                            Save
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default EditProfile;