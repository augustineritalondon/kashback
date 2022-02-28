import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Navbar2 } from '../../components';
import image from '../../assets/images';
import './Vendor.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const Vendor = () => {

    const [formStep, setFormStep] = useState(0);

    const [cashid, setCashid] = useState('');
    const [kpin, setKpin] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [nID, setNID] = useState('');
    const [idImage, setIdImage] = useState('')
    const [errors, setErrors] = useState({
        status: false,
        msg: ""
    })
    const [banks, setBanks] = useState([]);
    const [userData, setUserdata] = useState('');
    const [checking, setChecking] = useState(false);
    // const [bname, setBname] = useState('');
    const [bcode, setBcode] = useState('');
    const [verifiedBank, setVerifiedBank] = useState([]);

    const navigate = useNavigate();

    const {
        watch,
        register,
        handleSubmit,
        formState: { wrong, isValid },
    } = useForm({ mode: "all" });


    const nextStep = (e) => {
        e.preventDefault()
        setFormStep((cur) => cur + 1);
        getBank();
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
                    {/* <button
                        className="nextButton"
                        type="button"
                        value="Prev"
                        onClick={prevStep}
                    >Prev</button> */}
                    {checking === false ? <><button
                        disabled={!(accountNumber.length === 10)}
                        className="nextButton"
                        type="button"
                        value="Next"
                        onClick={nextStep}
                    >Next</button></>: <>
                    <button
                        disabled={true}
                        className="nextButton"
                        type="button"
                        value="Next"
                        onClick={nextStep}
                    >Next</button>
                    </>}
                </>
            );
        } else if (formStep === 2) {
            return (
                <>
                    {/* <button
                        className="nextButton"
                        type="button"
                        value="Prev"
                        onClick={prevStep}
                    >Prev</button> */}
                    <button
                        disabled={!((nID.length > 0) && (idImage.length > 0))}
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
                >Confirm</button>
            );
        }
    };

    const checkData = (e, data) => {
        e.preventDefault();

        if (kpin.length !== 4 || cashid.length !== 10) {
            console.log("error, please check your code")
            setErrors({
                ...errors,
                status: true,
                msg: "error, please check your that your cash id and pin is correct"
            })
        } else {
            setChecking(true)
            setErrors({
                ...errors,
                status: true,
                msg: "A network error"
            })
            console.log("its working here")

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = {
                id: cashid,
                pin: kpin
            };

            var requestOptions = {
                method: 'POST',
                body: JSON.stringify(raw),
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://buzz-servre.herokuapp.com/api/v1/vendor/apply", requestOptions)
                .then(response => response.text())
                .then(result => {
                    data = JSON.parse(result)
                    if (data.success === true) {
                        console.log(data)
                        if (data.isVendor === true) {
                            alert("Already a vendor")
                            Swal.fire({
                                title: "Error!",
                                text: "This user is already a vendor.",
                                icon: "error",
                                confirmButtonText: "Go back to home"
                            }).then(()=>{
                                if(data.value){
                                    navigate('/')
                                }
                            })
                        } else {
                            setUserdata([data])
                        }
                        setErrors(false)
                        setChecking(false)
                    } else {
                        // console.log("cashback id and pin is wrong")
                        console.log(data)
                        setChecking(false)


                    }
                })
                .catch(error => {
                    console.log('error', error)
                    setChecking(false)
                    setErrors({
                        ...errors,
                        status: true,
                        msg: "A network error"
                    })
                });

            // console.log(cashid + kpin)
        }



    }

    const getBank = (data) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        console.log("Loading")

        fetch("https://buzz-servre.herokuapp.com/api/v1/vendor/banks", requestOptions)
            .then(response => response.text())
            .then(result => {
                data = JSON.parse(result);
                // const newData = data.data.data
                if (data.success === true) {
                    setBanks(data.data.data)
                    // setBcode(data.data.data.code)
                    console.log("Done")
                }

                // setBanks(data) 

                // console.log(banks)
            })
            .catch(error => console.log('error', error));
    }

    const submitForm = () => {

        console.log(cashid + `\n` + accountNumber + `\n` + bcode + `\n` + idImage )

        var formdata = new FormData();
        formdata.append("ID", idImage);
        formdata.append("accountNo", accountNumber);
        formdata.append("bank", bcode);
        formdata.append("BeneficiaryID", cashid);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://buzz-servre.herokuapp.com/api/v1/vendor/register", requestOptions)
            .then(response => response.text())
            .then(result => {
                
                let newResult = JSON.parse(result);

                if( newResult.success === true ){
                    console.log("result is true", newResult.success)
                    Swal.fire({
                        title: "Success!",
                        text: "Your registration was successful.",
                        icon: "success",
                        confirmButtonText: "Continue"
                    }).then((result) => {
                        if(result.value){
                            navigate('/');
                        }
                    })
                }else{
                    console.log("result is false", newResult)
                    Swal.fire({
                        title: "Error!",
                        text: "Please check your network connection.",
                        icon: "error",
                        confirmButtonText: "Try again"
                    })
                }
                console.log(newResult.success)
            })
            .catch(error => {
                Swal.fire({
                    title: "Error!",
                    text: "Please check your network connection.",
                    icon: "error",
                    confirmButtonText: "Try again"
                })
            });
    }

    const verifyBank = (data) => {

        console.log(accountNumber)
        console.log(bcode)

        // var raw = "{\r\n    \"acc_number\":\"0690000032\",\r\n    \"bank_code\":\"044\"\r\n}";
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = {
            acc_number: accountNumber,
            bank_code: bcode
        };

        console.log("this is raw:" + raw.acc_number + "and bank:" + raw.bank_code)

        var requestOptions = {
            method: 'POST',
            body: JSON.stringify(raw),
            headers: myHeaders,
            redirect: 'follow'
        };
        setChecking(true)
        fetch("https://buzz-servre.herokuapp.com/api/v1/vendor/verify-bank", requestOptions)
            .then(response => response.text())
            .then(result => {
                data = JSON.parse(result);
                if (data.success === true) {

                    if (bankName.length > 0 || accountNumber > 0) {
                        console.log(data.data)
                        setVerifiedBank([data.data])
                        // console.log("this is the bank Data Here" + bankNewData)
                        setChecking(false)
                    } else {
                        setChecking(false)
                        setErrors({
                            ...errors,
                            status: true,
                            msg: "error, please check that your account number and bank is correct"
                        })
                    }
                }
            })
            .catch(error => {
                console.log('error', error)
                setChecking(false)
                setErrors({
                    ...errors,
                    status: true,
                    msg: "Network Issues!"
                })
            });
    }

    return (
        <>
            <Navbar2 />
            <section className='container'>
                <div className="vendor">
                    {console.log(banks)}


                    <div className="row background">
                        <div className='b-image'></div>
                        <div className="col-lg-6 col-md-6 col-12 ">
                            <div className='color'></div>
                            {/* <img src={image.one} alt="" /> */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className='form-content'>
                                <h2>Become a vendor</h2>
                                <form onSubmit={handleSubmit(submitForm)}>

                                    {formStep === 0 && (
                                        <div>
                                            <div className="row">
                                                {userData.length < 1 && <>
                                                    <div className=' col-6 mt-5'>
                                                        <label htmlFor="">Cash back ID:</label>
                                                        <input type="text" className="form-control" name='cashID' value={cashid} onChange={(e) => {
                                                            setCashid(e.target.value)
                                                        }} placeholder="" aria-label="Cash Back ID"
                                                        />

                                                    </div>
                                                    <div className='col-6 mt-5'>
                                                        <label htmlFor="">Four digit pin:</label>
                                                        <input type="password" className="form-control" name='kPIN' value={kpin} onChange={(e) => setKpin(e.target.value)} placeholder="" aria-label="Cash Back ID" />
                                                    </div></>
                                                }
                                                {!checking && <>
                                                    {errors.status === true && <p className='errors'>{errors.msg}</p>}</>
                                                }
                                                {userData.length < 1 && <>
                                                    {!checking && <button className='nextButton' onClick={checkData} style={{ margin: "20px 12px", marginBottom: 0, width: "100px", padding: "4px 20px" }}>Verify</button>}

                                                    {checking && <button className='nextButton' onClick={checkData} style={{ margin: "20px 12px", marginBottom: 0, width: "150px", padding: "4px 20px" }} >Checking...</button>}</>
                                                }
                                            </div>

                                            {userData.length > 0 && <>
                                                <div>
                                                    <h5 style={{ marginTop: "30px", fontWeight: "bold", color: "#3BB19B" }}>Personal Info:</h5>
                                                    <div className='mt-4'>
                                                        <label htmlFor="">Name:</label>
                                                        <span> &nbsp;<b>{userData[0].name}</b></span>
                                                        {console.log(userData)}
                                                    </div>
                                                    <div className='mt-4'>
                                                        <label htmlFor="">Phone:</label>
                                                        <span> &nbsp;<b>{userData[0].phone}</b></span>
                                                        {/* <input type="text" className="form-control" value={phone} placeholder="" aria-label="Phone" disabled /> */}
                                                    </div>
                                                    <div className='mt-4'>
                                                        <label htmlFor="">Email:</label>
                                                        <span> &nbsp;<b>{userData[0].email}</b></span>
                                                    </div>
                                                </div></>
                                            }
                                        </div>
                                    )}

                                    {formStep === 1 && (
                                        <div>
                                            <h5 style={{ marginTop: "30px", fontWeight: "bold", color: "#3BB19B" }}>Bank Details</h5>
                                            <hr style={{ padding: 0, margin: 0 }} />
                                            <div className='mt-4'>
                                                <label htmlFor="">Bank:</label>
                                                {/* <input type="text" className="form-control" placeholder="" aria-label="Bank" /> */}
                                                <select className="form-select" aria-label="Default select example" onChange={(e) => {
                                                    setBankName(e.target.value);
                                                    // console.log(e.target.value)

                                                }}>
                                                    <option value="">Select Bank</option>
                                                    {banks.length > 0 ? <>{
                                                        banks.map(bank => (
                                                            <option value={bank.name}>{bank.name}</option>
                                                        ))
                                                    }</> : <><option>Please wait....</option></>}
                                                </select>
                                            </div>
                                            <div className='mt-4'>
                                                <label htmlFor="">Account Number:</label>
                                                <input type="number" className="form-control" aria-label="Account" maxlength="10" onChange={(e) => {
                                                    setAccountNumber(e.target.value)

                                                    banks.find((e) => {
                                                        if (e.name === bankName) {
                                                            // console.log("this is bank name" + bankName, "this is ename" + e.name)
                                                            var index = banks.indexOf(e);
                                                            // console.log(banks[index].code)
                                                            setBcode(banks[index].code)
                                                        }
                                                    })
                                                }} onKeyUp={() => {
                                                    if (accountNumber.length === 10) {
                                                        verifyBank();
                                                    } else {
                                                        setErrors({
                                                            // ...errors,
                                                            // status: true,
                                                            // msg: 
                                                        })
                                                    }
                                                    // if (accountNumber.length === 10 ) {
                                                    //     setErrors({...errors, status:false, msg: ''});
                                                    // }else {
                                                    //     setErrors({
                                                    //         ...errors,
                                                    //         status: true,
                                                    //         msg: "Account number should be 10 digits"
                                                    //     }) 
                                                    // }
                                                    // {accountNumber.length === 10 ? setFormValid1(true) : setFormValid1(false)}
                                                }} />
                                                {accountNumber.length !== 10 && (accountNumber && <p className='errors'>Account number should be 10 digits</p>)}
                                            </div>

                                            {checking && <p>loading ...</p>}
                                            
                                            {verifiedBank.length > 0 && <>
                                                <div className='mt-4'>
                                                    <label htmlFor="">Bank Name:</label>
                                                    <input type="text" className="form-control" placeholder={verifiedBank[0].data.account_name} disabled aria-label="BankName" onKeyUp={() => {
                                                        // {(accountName.length > 0) && (accountNumber.length === 0) ? setFormValid1(true) : setFormValid1(false)}
                                                    }} />
                                                    {/* {(accountName.length === 0) && <p className='errors'>Please Enter Your Bank Name</p>} */}
                                                </div>
                                            </>}
                                        </div>
                                    )}

                                    {formStep === 2 && (
                                        <div>
                                            <h5 style={{ marginTop: "30px", fontWeight: "bold", color: "#3BB19B" }}>Identification</h5>
                                            <div className='mt-4'>
                                                <label htmlFor="">Means of Identification:</label>
                                                <select className="form-select" aria-label="Default select example" onChange={(e) => setNID(e.target.value)}>
                                                    <option value=""></option>
                                                    <option value="InternationalPassport">International Passport</option>
                                                    <option value="NationalID">National ID</option>
                                                    <option value="DriversLicense">Drivers License</option>
                                                </select>
                                            </div>
                                            <div className='mt-4'>
                                                <label htmlFor="">Image of ID:</label>
                                                <input type="file" className="form-control" id="inputGroupFile02" onChange={(e) => setIdImage(e.target.value)} />
                                            </div>
                                            {/* <div className='mt-4'>
                                                <label htmlFor="">Passport</label>
                                                <input type="file" className="form-control" id="inputGroupFile02" />
                                            </div> */}
                                        </div>
                                    )}


                                    {/* <div className='mt-5' style={{ textAlign: "center" }}>
                                        <button style={{ padding: "8px 60px", backgroundColor: "orange", color: "black", fontWeight: 700, border: "none" }}
                                            className="mt-4">Send</button>
                                    </div> */}

                                    {userData.length > 0 && <>{renderButton()}</>}


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
