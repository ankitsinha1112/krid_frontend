import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import axios from "axios";
import { toast } from "react-toastify";
import "./appForm.css"
import jsPDF from 'jspdf';

const Form = () => {

    const [loading, setLoading] = useState(false);
    const [forms, setForms] = useState({
        sno: '',
        name: '',
        father_husband_name: '',
        dob: '',
        membership_no: '',
        res_address: '',
        res_taluk: '',
        res_district: '',
        per_address: '',
        per_taluk: '',
        per_district: '',
        family_details: '',
        phoneNo: '',
        aadharno: '',
        fee: '',
        amountpaid: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        const { name, value } = e.target;
        setForms({ ...forms, [e.target.name]: e.target.value })
        // if (name === 'phoneNo' && value.length > 10) {
        //     validator.message('phoneNo', 'Phone number should not exceed 10 digits', 'max:10');
        // } else {
        //     validator.showMessages();
        // }
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(e)
        const sno = forms.sno;
        const name = forms.name;
        const father_husband_name = forms.father_husband_name;
        const dob = forms.dob;
        const membership_no = forms.membership_no;
        const res_address = forms.res_address;
        const res_taluk = forms.res_taluk;
        const res_district = forms.res_district;
        const per_address = forms.per_address;
        const per_taluk = forms.per_taluk;
        const per_district = forms.per_district;
        const family_details = forms.family_details;
        const phoneNo = forms.phoneNo;
        const aadharno = forms.aadharno;
        const fee = forms.fee;
        const amountpaid = forms.amountpaid;
        if (validator.allValid()) {
            try {
                setLoading(true);
                const res = await axios.post(
                    `https://krid-backend.onrender.com/api/form`,
                    // `${process.env.REACT_APP_BASE_URL}/api/contact`,
                    {
                        sno,
                        name,
                        father_husband_name,
                        dob,
                        membership_no,
                        res_address,
                        res_taluk,
                        res_district,
                        per_address,
                        per_taluk,
                        per_district,
                        family_details,
                        phoneNo,
                        aadharno,
                        fee,
                        amountpaid
                    }
                );
                if (res.data.success) {
                    toast.success('Application Submitted Successfully!');
                    setForms({
                        sno: '',
                        name: '',
                        father_husband_name: '',
                        dob: '',
                        membership_no: '',
                        res_address: '',
                        res_taluk: '',
                        res_district: '',
                        per_address: '',
                        per_taluk: '',
                        per_district: '',
                        family_details: '',
                        phoneNo: '',
                        aadharno: '',
                        fee: '',
                        amountpaid: ''
                    })
                } else {
                    console.log("Error Occurred");
                    toast.error(res.data.message);
                }
            } catch (error) {
                console.log(error.response.data.errors[0].msg);
                // console.log(res.data);
                if(error.response.data.errors[0].param==="phoneNo")
                {
                    toast.error(
                        "Phone Number Must be of 10 digits only!!"
                    );
                }
                else if(error.response.data.errors[0].param==="aadharno")
                {
                    toast.error(
                        "Aadhar Number is of 12 digits only!!"
                    );
                }
                else{
 toast.error(
                    "Error occurred while submitting. Please try again."
                );
                }
                
               
            } finally {
                setLoading(false);
                validator.hideMessages();
               
                // push('/');
            }
        } else {
            validator.showMessages();
        }
    };
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.setTextColor(255, 0, 0);
        const titleWidth = doc.getStringUnitWidth("Form Data For Kridaverse") * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const centerX = (doc.internal.pageSize.width - titleWidth) / 2;
        const paddingTop = 20;
        doc.text("Form Data For Kridaverse", centerX, paddingTop);
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        // Add form data to the PDF
        Object.keys(forms).forEach((key, index) => {
            doc.text(`${key}: ${forms[key]}`, 10, paddingTop + 20 + (index * 10));
        });
    
        // Save the PDF
        doc.save("Saved_form_data.pdf");
    };
    
    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="sno" style={{ marginBottom: '0.5rem' }}>
                            Sl number<span style={{color:"rgba(255, 0, 0, 1)"}}>*</span>
                        </label>
                        <input
                            value={forms.sno}
                            type="text"
                            id='sno'
                            name="sno"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Lorem ipsum dolor sit "
                        />
                        {validator.message('sno', forms.sno, 'required')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="name" style={{ marginBottom: '0.5rem' }}>
                            Applicant’s Name<span style={{color:"rgba(255, 0, 0, 1)"}}>*</span>
                        </label>
                        <input
                            value={forms.name}
                            type="text"
                            id='name'
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Lorem ipsum dolor sit"
                        />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="father_husband_name" style={{ marginBottom: '0.5rem' }}>
                            Father/ Husband name<span style={{color:"rgba(255, 0, 0, 1)"}}>*</span>
                        </label>
                        <input
                            value={forms.father_husband_name}
                            type="text"
                            id='father_husband_name'
                            name="father_husband_name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Lorem ipsum dolor sit"
                        />
                        {validator.message('father/husband name', forms.father_husband_name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="dob" style={{ marginBottom: '0.5rem' }}>
                            DOB<span style={{color:"rgba(255, 0, 0, 1)"}}>*</span>
                        </label>
                        <input
                            value={forms.dob}
                            type="date"
                            id='dob'
                            name="dob"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Lorem ipsum dolor sit"
                        />
                        {validator.message('DOB', forms.dob, 'required')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="membership_no" style={{ marginBottom: '0.5rem' }}>
                            Introducer name and membership number
                        </label>
                        <input
                            value={forms.membership_no}
                            type="number"
                            id='membership_no'
                            name="membership_no"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Lorem ipsum dolor sit"
                        />
                        {/* {validator.message('Introducer name and membership number', forms.membership_no, 'required|number')} */}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="res_address" style={{ marginBottom: '0.5rem' }}>
                            Member Residential Address
                        </label>
                        <input
                            value={forms.res_address}
                            type="text"
                            id='res_address'
                            name="res_address"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Lorem ipsum dolor sit"
                        />
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="res_taluk" style={{ marginBottom: '0.5rem' }}>
                        Taluk
                        </label>
                        <input
                            value={forms.res_taluk}
                            type="text"
                            id='res_taluk'
                            name="res_taluk"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Lorem ipsum dolor sit"
                        />
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="res_district" style={{ marginBottom: '0.5rem' }}>
                        District
                        </label>
                        <input
                            value={forms.res_district}
                            type="text"
                            id='res_district'
                            name="res_district"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Lorem ipsum dolor sit"
                        />
                    </div>
                </div>
                <hr style={{margin:"2.5rem 0"}}/>

                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="per_address" style={{ marginBottom: '0.5rem' }}>
                        Member Permanent Address
                        </label>
                        <input
                            value={forms.per_address}
                            type="text"
                            id='per_address'
                            name="per_address"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Lorem ipsum dolor sit"
                        />
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="per_taluk" style={{ marginBottom: '0.5rem' }}>
                        Taluk
                        </label>
                        <input
                            value={forms.per_taluk}
                            type="text"
                            id='per_taluk'
                            name="per_taluk"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Lorem ipsum dolor sit"
                        />
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="per_district" style={{ marginBottom: '0.5rem' }}>
                        District
                        </label>
                        <input
                            value={forms.per_district}
                            type="text"
                            id='per_district'
                            name="per_district"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Lorem ipsum dolor sit"
                        />
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="family_details" style={{ marginBottom: '0.5rem' }}>
                        Family Details
                        </label>
                        <input
                            value={forms.family_details}
                            type="text"
                            id='family_details'
                            name="family_details"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            // placeholder="Lorem ipsum dolor sit"
                        />
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-group inputOutline">
                        <label htmlFor="phoneNo" style={{marginBottom:'0.5rem'}}>
                        Phone number<span style={{color:"rgba(255, 0, 0, 1)"}}>*</span>
                        </label>

                        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">(+91) -</span>
                        <input
                            value={forms.phoneNo}
                            type="phone"
                            className="form-control"
                            name="phoneNo"
                            id='phoneNo'
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            aria-describedby="basic-addon1"
                            />
                            </div>
                        {validator.message('Phone number', forms.phoneNo, 'required|phone')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="aadharno" style={{ marginBottom: '0.5rem' }}>
                        Aadhar Number<span style={{color:"rgba(255, 0, 0, 1)"}}>*</span>
                        </label>
                        <input
                            value={forms.aadharno}
                            type="number"
                            id='aadharno'
                            name="aadharno"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="(XXXX-XXXX-XXXX)"
                        />
                        {validator.message('Aadhar Number', forms.aadharno, 'required')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="fee" style={{ marginBottom: '0.5rem' }}>
                        Membership Fee
                        </label>
                        <input
                            value={forms.fee}
                            type="number"
                            id='fee'
                            name="fee"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="1000000"
                        />
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field inputOutline">
                        <label htmlFor="amountpaid" style={{ marginBottom: '0.5rem' }}>
                        amount Paid in Cash
                        </label>
                        <input
                            value={forms.amountpaid}
                            type="number"
                            id='amountpaid'
                            name="amountpaid"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="1000000"
                        />
                    </div>
                </div>
            </div>
            <div className="submit-area" style={{marginBottom:"2rem"}}>
                {/* <button type="submit" className="theme-btn">Submit Now</button> */}
                <button type="button" className="btn btn-outline-secondary btn-lg mr" onClick={generatePDF} >Save in draft</button>
                <button type="submit" className="btn btn-outline-danger btn-lg">Submit</button>
            </div>
        </form >
    )
}

export default Form;