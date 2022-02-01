import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import image from '../../assets/images';
import './Vendor.css'

const Vendor = () => {

    const [formStep, setFormStep] = useState(0);

    const {
        watch,
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: "all" });


    const nextStep = (e) => {
        e.preventDefault()
        setFormStep((cur) => cur + 1);
    };

    const prevStep = () => {
        setFormStep((cur) => cur - 1);
    };

    const renderButton = () => {
        if (formStep > 2) {
            return undefined;
        } else if (formStep === 1) {
            return (
                <>
                    <button
                        className="nextButton"
                        type="button"
                        value="Prev"
                        onClick={prevStep}
                    >Prev</button>
                    <button
                        className="nextButton"
                        type="button"
                        value="Next"
                        onClick={nextStep}
                    >Next</button>
                </>
            );
        } else if (formStep === 2) {
            return (
                <>
                    <button
                        className="nextButton"
                        type="button"
                        value="Prev"
                        onClick={prevStep}
                    >Prev</button>
                    <button
                        disabled={!isValid}
                        className="nextButton"
                        type="submit"
                        value="Submit"
                    >Submit</button>
                </>
            );
        } else {
            return (
                <button
                    disabled={!isValid}
                    className="nextButton"
                    type="button"
                    value="Next"
                    onClick={nextStep}
                >Next</button>
            );
        }
    };

    return (
        <>
            <section className='container'>
                <div className="vendor">

                    <div className="row background">
                        <div className="col-lg-6 col-md-6 col-12 ">
                            <div className='color'></div>
                            {/* <img src={image.one} alt="" /> */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className='form-content'>
                                <h2>Become a vendor</h2>
                                <form>

                                    {formStep === 0 && (
                                        <div>
                                            <div className='row mt-5'>
                                                <label htmlFor="">Four digit pin:</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Cash Back ID" />
                                            </div>

                                            <div>
                                                <h3>Personal Info:</h3>
                                                <div className='row mt-4'>
                                                    <label htmlFor="">Name:</label>
                                                    <input type="text" className="form-control" placeholder="" aria-label="Name" />
                                                </div>
                                                <div className='row mt-4'>
                                                    <label htmlFor="">Phone:</label>
                                                    <input type="text" className="form-control" placeholder="" aria-label="Phone" />
                                                </div>
                                                <div className='row mt-4'>
                                                    <label htmlFor="">Email:</label>
                                                    <input type="email" className="form-control" placeholder="" aria-label="Email" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {formStep === 1 && (
                                        <div>
                                            <h3>Bank Details</h3>
                                            <hr style={{ padding: 0, margin: 0 }} />
                                            <div className='row mt-4'>
                                                <label htmlFor="">Bank:</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Bank" />
                                            </div>
                                            <div className='row mt-4'>
                                                <label htmlFor="">Account Number:</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Account" />
                                            </div>
                                            <div className='row mt-4'>
                                                <label htmlFor="">Bank Name:</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="BankName" />
                                            </div>
                                        </div>
                                    )}

                                    {formStep === 2 && (
                                        <div>
                                            <h3>Identification</h3>
                                            <div className='row mt-4'>
                                                <label htmlFor="">Means of Identification:</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected></option>
                                                    <option value="1">International Passport</option>
                                                    <option value="2">National ID</option>
                                                    <option value="3">Drivers License</option>
                                                </select>
                                            </div>
                                            <div className='row mt-4'>
                                                <label htmlFor="">Image of ID:</label>
                                                <input type="file" className="form-control" id="inputGroupFile02" />
                                            </div>
                                            <div className='row mt-4'>
                                                <label htmlFor="">Passport</label>
                                                <input type="file" className="form-control" id="inputGroupFile02" />
                                            </div>
                                        </div>
                                    )}


                                    {/* <div className='mt-5' style={{ textAlign: "center" }}>
                                        <button style={{ padding: "8px 60px", backgroundColor: "orange", color: "black", fontWeight: 700, border: "none" }}
                                            className="mt-4">Send</button>
                                    </div> */}

                                    {renderButton()}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Vendor;
