// import { data } from 'jquery';
import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// import Select2 from 'react-select2-wrapper';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import { getFirestore, collection, setDoc, doc,set, add } from "firebase/firestore";
import DatabaseDetails, { db } from '../Database';



const CusatomerChoose = window.localStorage.getItem('DocID')

const DocID = JSON.parse(CusatomerChoose)
const Json = JSON.parse(window.localStorage.getItem('CustomerEdit'))

const EditCustomer = (e) => {
    
const [client,setClient] = useState({
    name:Json.name || '',
    contactname:Json.contactname || '',
    web:Json.web || '',
    tel:Json.tel || '',
    Email:Json.Email || '',
    country:Json.country || '',
    state: Json.state || '',
    city:Json.city || '',
    postcode:Json.postcode || '',
    add: Json.add || ''
})
    const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
        console.log(client)
    const [date, setDate] = useState(new Date());
	const [currencyOptions, setcurrencyOptions] = useState([
        { id: 1, text: 'Select Currency' },
        { id: 2, text: 'EUR Euro' },
        { id: 3, text: 'INR Indoan Rupee' },
        { id: 4, text: 'USD- US Dollar' }
    ]);

    const [currency, setCurrency] = useState("")

    const formHandler = (e) => {
        const Name = e.target.name
        setClient({...client,[Name]:e.target.value })
    }
    const redirect = () => {
		window.location.href = '/customers'
	 }
    const handleChange = selectedCurrency => {
        setCurrency(selectedCurrency)
    };
    
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
                                        <li className="breadcrumb-item active">Edit Customers</li>
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
                                                        <label>Display Name</label>
                                                        <input type="text" className="form-control" name='name' onChange={formHandler} value={client.name} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="email" className="form-control" name='Email' onChange={formHandler} value={client.Email} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Primary Currency</label>
                                                        {/* <Select2
                                                            defaultValue={2} className="w-100"
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
                                                        <input type="text" className="form-control" name='contactname' onChange={formHandler} value={client.name} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Phone</label>
                                                        <input type="text" className="form-control" name='tel' onChange={formHandler} value={client.tel} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Website</label>
                                                        <input type="text" className="form-control"  name='web' onChange={formHandler} value={client.web } />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <h4 className="card-title mt-4">Billing Address</h4>
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" className="form-control" name='name' onChange={formHandler} value={client.name} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>State</label>
                                                        <input type="text" className="form-control"  name='state' onChange={formHandler} value={client.state} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <textarea rows="5" cols="5" className="form-control" name='add' onChange={formHandler} placeholder={client.add}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                    <label>Country</label>
                                                    <input type="text" className="form-control" name='country' onChange={formHandler} value={client.country} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <input type="text" className="form-control" name='city' onChange={formHandler} value={client.city} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Phone</label>
                                                        <input type="text" className="form-control" name='tel' onChange={formHandler} value={client.tel} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Zip Code</label>
                                                        <input type="text" className="form-control" name='postcode' onChange={formHandler} value={client.postcode} />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <h4 className="card-title mt-4">Shipping Address</h4>
                                        <form onSubmit={handleSubmit}> 
                                            <div className="text-end">
                                                <button type="submit" className="btn btn-outline-primary btn-sm">Copy from Billing</button>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" className="form-control"  name='name' onChange={formHandler} value={client.name} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>State</label>
                                                        <input type="text" className="form-control"  name='state' onChange={formHandler} value={client.state} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <textarea rows="5" cols="5" className="form-control" name='add' onChange={formHandler} placeholder={client.add}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                    <label>Country</label>
                                                    <input type="text" className="form-control" name='country' onChange={formHandler} value={client.country} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <input type="text" className="form-control" name='city' onChange={formHandler} value={client.city} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Phone</label>
                                                        <input type="text" className="form-control"  name='tel' onChange={formHandler} value={client.tel} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Zip Code:</label>
                                                        <input type="text" className="form-control" name='postcode' onChange={formHandler} value={client.postcode} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-end mt-4">
                                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save Changes</button>
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
export default EditCustomer;