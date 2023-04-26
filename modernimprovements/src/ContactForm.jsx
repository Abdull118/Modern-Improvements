import React, { useState } from "react";
import axios from 'axios';
import './contactForm.css'
import ReactGA from 'react-ga';
const ContactForm = () => {

    const API_ENDPOINT = 'https://glorious-outerwear-fly.cyclic.app/send-email/';

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        customService: "",
        phone: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // send formData to server to be sent as an email
        // ...
        ReactGA.event({
            category: 'Button',
            action: 'Click',
            label: 'Form Submitted',
        });
        axios.post(API_ENDPOINT, formData, {

        })
            .then(response => {
                console.log(response);
                // Handle success
            })
            .catch(error => {
                console.error(error);
                // Handle error
            });
    };

    return (
        <form onSubmit={handleSubmit} className="contactForms" id="contact">
            <div>
                <div className="solutions">Ensuring All Of Your Solutions Are At Your Fingertips.</div>
                <div className="contactUs">Contact Us Today!</div>

                <div className="telephone">Tel: <a href="tel:9342049409" >+1 {"("}934{")"} 204-9409</a></div>
                <div className="emailaddress">Email: <a href="mailTo:naimi.airsh@gmail.com">naimi.airsh@gmail.com</a></div>
            </div>

            <div>

                <div className="nameAndService">
                    <div className="nameSection">
                        {/* <label htmlFor="name">Name:</label> */}
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name*"
                            value={formData.name}
                            onChange={handleChange}
                            className="namePlaceholder"
                            required={true}
                        />
                    </div>

                    <div>
                        {/* <label htmlFor="service">Service Requested:</label> */}
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="serviceRequest"
                            required={true}
                        >
                            <option value="Service Request">Service Request*</option>
                            <option value="painting">Painting</option>
                            <option value="flooring">Flooring</option>
                            <option value="kitchen remodeling">Kitchen Remodeling</option>
                            <option value="bathroom remodeling">Bathroom Remodeling</option>
                            <option value="other">Other</option>
                        </select>
                        {formData.service === "other" && (
                            <div>
                                {/* <label htmlFor="customService">Custom Service:</label> */}
                                <input
                                    type="text"
                                    id="customService"
                                    name="customService"
                                    value={formData.customService}
                                    onChange={handleChange}
                                    placeholder="Describe Other Service"
                                    className="otherService"
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="contactInfo">
                    <div>
                        {/* <label htmlFor="email">Email:</label> */}
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            className="emailInfo"
                            required={true}
                        />
                    </div>

                    <div>
                        {/* <label htmlFor="phone">Phone:</label> */}
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone #*"
                            className="phoneNumberInfo"
                            required={true}
                        />
                    </div>
                </div>



                <button type="submit" className="submitBtn">Submit</button>
            </div>
        </form>
    );
};

export default ContactForm;
