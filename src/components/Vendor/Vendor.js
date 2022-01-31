import React from 'react';
import './Vendor.css'

const Vendor = () => {
    return (
        <>
            <section className='container'>
                <div className="vendor">
                    <h2>Become a vendor</h2>
                    <form>
                        <div className='row mt-5'>
                            <label htmlFor="">CashBack ID:</label>
                            <input type="text" class="form-control" placeholder="" aria-label="Cash Back ID" />
                        </div>

                        <div>
                            <h3>Personal Info:</h3>
                            <div className='row mt-4'>
                                <label htmlFor="">Name:</label>
                                <input type="text" class="form-control" placeholder="" aria-label="Name" />
                            </div>
                            <div className='row mt-4'>
                                <label htmlFor="">Phone:</label>
                                <input type="text" class="form-control" placeholder="" aria-label="Phone" />
                            </div>
                            <div className='row mt-4'>
                                <label htmlFor="">Email:</label>
                                <input type="email" class="form-control" placeholder="" aria-label="Email" />
                            </div>
                        </div>

                        <div>
                            <h3>Bank Details</h3>
                            <hr style={{ padding: 0, margin: 0 }} />
                            <div className='row mt-4'>
                                <label htmlFor="">Bank:</label>
                                <input type="text" class="form-control" placeholder="" aria-label="Bank" />
                            </div>
                            <div className='row mt-4'>
                                <label htmlFor="">Account Number:</label>
                                <input type="text" class="form-control" placeholder="" aria-label="Account" />
                            </div>
                            <div className='row mt-4'>
                                <label htmlFor="">Bank Name:</label>
                                <input type="text" class="form-control" placeholder="" aria-label="BankName" />
                            </div>
                        </div>

                        <div>
                            <h3>Identification</h3>
                            <div className='row mt-4'>
                                <label htmlFor="">Means of Identification:</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="1">International Passport</option>
                                    <option value="2">National ID</option>
                                    <option value="3">Drivers License</option>
                                </select>
                            </div>
                            <div className='row mt-4'>
                                <label htmlFor="">Image of ID:</label>
                                <input type="file" class="form-control" id="inputGroupFile02"/>
                            </div>
                            <div className='row mt-4'>
                                <label htmlFor="">Passport</label>
                                <input type="file" class="form-control" id="inputGroupFile02"/>
                            </div>
                        </div>

                        <div className='mt-5' style={{textAlign:"center"}}>
                            <button style={{ padding: "8px 60px", backgroundColor: "orange", color: "black", fontWeight:700, border: "none" }}
                                className="mt-4">Send</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Vendor;
