import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
 import {img12,img5,img2,img1,img3,img4,img11,img7,img6,img8,img9,img10,img13 } from "../_components/imagepath"
 import Header from '../layouts/Header'
 import Sidebar from '../layouts/Sidebar'

const Users = () => {

    const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }

    const data = [
        {
            "id": 1,
            "Name": "Alex Campbell",
            "img_url": img12,
            "Email": "alexcampbell@example.com",
            "RegisteredOn": "30 Mar 2020",
            "Role": "Customer",
            "status": "Active"
        },
        {
            "id": 2,
            "Name": "Barbara Moore",
            "img_url": img4,
            "Email": "barbaramoore@example.com",
            "RegisteredOn": "24 Oct 2020",
            "Role": "Customer",
            "status": "Active"
        },
        {
            "id": 3,
            "Name": "Brian Johnson",
            "img_url": img2,
            "Email": "brianjohnson@example.com",
            "RegisteredOn": "16 Nov 2020",
            "Role": "Customer",
            "status": "Active"
        },
        {
            "id": 4,
            "Name": " Charles Hafner",
            "img_url": img1,
            "Email": "charleshafner@example.com",
            "RegisteredOn": "16 Nov 2020",
            "Role": "Admin",
            "status": "Active"
        },
        {
            "id": 5,
            "Name": "Greg Lynch",
            "img_url": img5,
            "Email": "greglynch@example.com",
            "RegisteredOn": "11 Oct 2020",
            "Role": "Customer",
            "status": "Inactive"
        },
        {
            "id": 6,
            "Name": "Jennifer Floyd",
            "img_url": img11,
            "Email": "jenniferfloyd@example.com",
            "RegisteredOn": "17 Apr 2020",
            "Role": "Customer",
            "status": "Active"
        },
        {
            "id": 7,
            "Name": " John Blair",
            "img_url": img7,
            "Email": "johnblair@example.com",
            "RegisteredOn": "13 Aug 2020",
            "Role": "Customer",
            "status": "Active"
        },
        {
            "id": 8,
            "Name": "Joseph Collins",
            "img_url": img10,
            "Email": "josephcollins@example.com",
            "RegisteredOn": "9 May 2020",
            "Role": "Customer",
            "status": "Active"
        },
        {
            "id": 9,
            "Name": " Karlene Chaidez",
            "img_url": img6,
            "Email": "karlenechaidez@example.com",
            "RegisteredOn": "29 Sep 2020",
            "Role": "Customer",
            "status": "Inactive"
        },
        {
            "id": 10,
            "Name": "Leatha Bailey",
            "img_url": img9,
            "Email": "leathabailey@example.com",
            "RegisteredOn": "20 Jun 2020",
            "Role": "Customer",
            "status": "Active"
        },
        {
            "id": 11,
            "Name": "Marie Canales",
            "img_url": img3,
            "Email": "mariecanales@example.com",
            "RegisteredOn": "8 Nov 2020",
            "Role": "Customer",
            "status": "Inactive"
        },
        {
            "id": 12,
            "Name": " Russell Copeland",
            "img_url": img8,
            "Email": "russellcopeland@example.com",
            "RegisteredOn": "2 Jul 2020",
            "Role": "Customer",
            "status": "Inactive"
        },
        {
            "id": 13,
            "Name": " Wendell Ward",
            "img_url": img13,
            "Email": "wendellward@example.com",
            "RegisteredOn": "22 Feb 2020",
            "Role": "Customer",
            "status": "Active"
        }
    ]
	const columns = [      																							
		{
			name: 'Name',			
			sortable: true,
			cell: row => <Media className="user-dt"><a href="/profile" className="avatar avatar-sm me-2"><img src={row.img_url} className="avatar-img rounded-circle" /></a><Media.Body>{row.Name}</Media.Body></Media>,
            width:"250px",
		},
		{
			name: 'Email',
			selector: row=>row.Email,
			sortable: true,	
            width:"250px",			
		},
		{
			name: 'Registered On',
			selector: row=>row.RegisteredOn,
			sortable: true,
            width:"250px",
		},
		{
			name: 'Role',
			selector: row=>row.Role,
			sortable: true,
            width:"250px",
		},
		{
			name: 'status',
			selector: row=>row.status,
			sortable: true,			
			cell: row => <Media className="user-dt"><span className={`badge badge-pill badge ${ row.status == "Active" ? 'bg-success-light' : 'bg-danger-light' }`} >{row.status}</span><Media.Body></Media.Body></Media>,
            width:"250px",
		},
		{
			name: 'Action',
			selector: row=>row.action,
			sortable: true,
			cell: () => <div><a href="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1"></i> Edit</a><a href="#;" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1"></i>Delete</a> </div>,
            width:"250px",
			 
		},
		
	];
	
	const tableData = {
		columns,
		data,
	};
		
        return (

	    <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          
			<Header onMenuClick={(value) => toggleMobileMenu()} />
			<Sidebar /> 
            
                <div className="page-wrapper">
                    <div className="content container-fluid">
                    
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="page-title">Users</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/index">Dashboard</Link></li>
                                        <li className="breadcrumb-item active">Users</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                        <div className="row">
                            <div className="col-sm-12">
                            
                                <div className="card card-table">
                                    <div className="card-header">
                                        <h4 className="card-title">List of Users</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                           
                                                <DataTableExtensions
                                                {...tableData}
                                            >
                                                <DataTable
                                                    noHeader
                                                    defaultSortField="id"
                                                    defaultSortAsc={false}
                                                    pagination
                                                    highlightOnHover
                                                />
                                            </DataTableExtensions>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>					
                        </div>					
                    </div>			
                </div>
             </div>   
        
            
        );
    
}
export default Users;