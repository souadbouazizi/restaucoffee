import React from "react";
import './Contact.css';
import { Form, FormControl, FormLabel, FormGroup } from 'react-bootstrap';
import { ContactInfo } from "../components/Contactinfo"; // Assurez-vous que le nom du fichier est correct
import { Reviews } from "../components/Reviews";

function Contact() {
    return (
        <div>
            <div className='container mt-5 h-100 justify-content-center text-center'>
                <h2 className="fs-1 mb-3">Contact Us</h2>
                <div className='row'>
                    <div className='col-md-6 d-flex align-items-center justify-content-center'>
                        <ContactInfo />
                    </div>
                    <div className='col-md-6 justify-content-center text-start'>
                        <Form>
                            <FormGroup className='row mb-3'>
                                <div className="col-md-6">
                                    <FormLabel htmlFor='first-name'>
                                        First Name
                                    </FormLabel>
                                    <FormControl type='text' id='first-name' required />
                                </div>
                                <div className="col-md-6">
                                    <FormLabel htmlFor='last-name'>
                                        Last Name
                                    </FormLabel>
                                    <FormControl type='text' id='last-name' />
                                </div>
                                <div className="col-md-6">
                                    <FormLabel htmlFor='email'>
                                        Enter your Email Address
                                    </FormLabel>
                                    <FormControl type='email' id='email' required />
                                </div>
                                <div className="col-md-6">
                                    <FormLabel htmlFor='phone-number'>
                                        Phone Number
                                    </FormLabel>
                                    <FormControl type='tel' id='phone-number' />
                                </div>
                                <div className="col-md-6">
                                    <FormLabel htmlFor='reservation-date'>
                                        Reservation Date
                                    </FormLabel>
                                    <FormControl type='date' id='reservation-date' required />
                                </div>
                                <div className="col-md-6">
                                    <FormLabel htmlFor='guest-number'>
                                        Number of Guests
                                    </FormLabel>
                                    <FormControl type='number' id='guest-number' />
                                </div>
                                <div className="col-md-12">
                                    <FormLabel htmlFor='comment'>
                                        Comments
                                    </FormLabel>
                                    <FormControl as='textarea' rows={4} id='comment' />
                                </div>
                                <div className="col-md-12">
                                    <button type='submit' className="btn btn-primary w-100 mt-2">
                                    Reserve
                                    </button>
                                </div>
                                {/* Vous pouvez ajouter d'autres champs de formulaire ici */}
                            </FormGroup>
                            {/* Vous pouvez ajouter un bouton de soumission ou des contrôles de formulaire supplémentaires ici */}
                        </Form>
                    </div>
                </div>
                <div className="my-5 reviews-section ">
                    < Reviews/>
                </div>
            </div>
        </div>
    );
}

export default Contact;
