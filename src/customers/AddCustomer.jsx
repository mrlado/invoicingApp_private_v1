import { List } from "antd";
import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// import Select2 from 'react-select2-wrapper';
import DatabaseDetails, { db } from '../Database';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import { getFirestore, collection, setDoc, doc,set, add, getDoc } from "firebase/firestore";
import {v4 as uuidv4} from "uuid"




const CusatomerChoose = window.localStorage.getItem('CusatomerChoose')
const Json = JSON.parse(CusatomerChoose)



const AddCustomer = () => {

    const [menu, setMenu] = useState(false)
    const dataid = uuidv4()
    let [clients,setClient] = useState({
        name:"",
        contactname:"",
        web:"",
        tel:"",
        Email:"",
        country:"",
        state: "",
        city:"",
        postcode:"",
        add: "",
        PrimaryContactName:""
    })
    const [newData , setNewdata] = useState({})

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }

    const [date, setDate] = useState(new Date());
	const [currencyOptions, setcurrencyOptions] = useState( [
        { id: 1, text: 'Select Currency' },
        { id: 2, text: 'EUR Euro' },
        { id: 3, text: 'INR Indoan Rupee' },
        { id: 4, text: 'USD- US Dollar' }
    ]);
    const [countryOptions, setcountryOptions] = useState( [
        {  id: 1, text: 'Select Country' },
        {  id: 2, text: 'Afghanistan' },
        {  id: 3, text: 'Albania' },
        {  id: 4, text: 'American Samoa' },
        {  id: 5, text: 'Algeria' },
        {  id: 6, text: 'Andorra' },
        {  id: 7, text: 'Angola' },
        {  id: 8, text: 'Anguilla' },
        {  id: 9, text: 'United States' }
    ]);

    const formHandler = (e) => {
        const Name = e.target.name
        setClient({...clients,[Name]:e.target.value})
    }
    const redirect = () => {
		window.location.href = '/customers'
	 }
    const handleSubmit = (e) =>{
        e.preventDefault()

       
    }
        return (

            <>
            <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          
          <Header onMenuClick={(value) => toggleMobileMenu()} />
          <Sidebar />
                <div className="page-wrapper">
                    <div className="content container-fluid">
                    
    
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h3 className="page-title">Customers</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/index">Dashboard</Link></li>
                                        <li className="breadcrumb-item"><Link to="/customers">Customers</Link></li>
                                        <li className="breadcrumb-item active">Add Customers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Basic Info</h4>
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" className="form-control"name="name" onChange={formHandler} value={clients.name}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="email" className="form-control" name="Email" onChange={formHandler} value={clients.Email}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Primary Currency</label>
                                                        {/* <Select2
                                                             className="w-100"
                                                             defaultValue={2}
                                                            data={currencyOptions}
                                                            options={{
                                                                placeholder: 'Currency',
                                                            }}
                                                        /> */}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Primary Contact Name</label>
                                                        <input type="text" className="form-control" name='PrimaryContactName' onChange={formHandler} value={clients.PrimaryContactName} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Phone</label>
                                                        <input type="text" className="form-control" name='tel' onChange={formHandler} value={clients.tel} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Website</label>
                                                        <input type="text" className="form-control" name='web' onChange={formHandler} value={clients.web } />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <h4 className="card-title mt-4">Billing Address</h4>
                                        <form  onSubmit={handleSubmit}>
                                        <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" className="form-control"  name='name' onChange={formHandler} value={clients.name} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>State</label>
                                                        <input type="text" className="form-control"  name='state' onChange={formHandler} value={clients.state} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <textarea rows="5" cols="5" className="form-control" name='add' onChange={formHandler} placeholder={clients.add}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                    <label>Country</label>
                                                    <input type="text" className="form-control" name='country' onChange={formHandler} value={clients.country} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <input type="text" className="form-control" name='city' onChange={formHandler} value={clients.city} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Phone</label>
                                                        <input type="text" className="form-control"  name='tel' onChange={formHandler} value={clients.tel} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Zip Code:</label>
                                                        <input type="text" className="form-control" name='postcode' onChange={formHandler} value={clients.postcode} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-end mt-4">
                                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Customer</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
           </>
        );
}
export default AddCustomer;