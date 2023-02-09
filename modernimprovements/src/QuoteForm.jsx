import React, { useEffect, useState } from "react";
import axios from 'axios';
import './quoteForm.css'
import Sidebar from "./SideBar";
import './sideBar.css'
import './App.css'
const QuoteForm = ({ setOpenQuote }) => {
    const API_ENDPOINT = 'http://localhost:4000/send-email/';

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        customService: "",
        phone: "",
        description: "",
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
        <div className="background">

            <form onSubmit={handleSubmit}>
                <div className="quoteForm">
                    <div className="quoteFormInfo">
                        <button className="closeOut" onClick={() => { setOpenQuote(false) }}>X</button>
                        <div className="contactUsQuote">Request A Quote From Modern Improvement Contractors Inc.</div>
                        <div>We'll be in contact in a few minutes!</div>
                        <div>Need a faster answers? Contact Us Below!</div>
                        <div className="telephoneq">Tel: <a href="tel:3474001820" >+1 {"("}347{")"} 400-1820</a></div>
                        <div className="emailaddressq">Email: <a href="mailTo:naimi.airsh@gmail.com">naimi.airsh@gmail.com</a></div>
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

                        <div>
                            <input
                                type="text"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Project Description"
                                className="projectDescription"
                                required={false}
                            />
                        </div>


                        <button type="submit" className="submitBtnq">Submit</button>
                    </div>
                </div>
            </form></div>
    );
};

export default QuoteForm;
