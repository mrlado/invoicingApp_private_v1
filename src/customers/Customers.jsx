import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
 import {img12,img5,img2,img3,img4,img11,img7,img6,img8,img9 } from "../_components/imagepath"
 import Header from '../layouts/Header'
 import Sidebar from '../layouts/Sidebar'

const SlideToggle = window.ReactSlideToggle

const Customers = () => {

	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
	const data = [
		{
			Customer: "Alex Campbell",	
			img_url: img12,
			Email: "alexcampbell@example.com",
			AmountDue: "-",
			RegisteredOn: "30 Mar 2020",
			status: "Active"
		},
		{
			Customer: "Barbara Moore ",
			img_url: img4,
			Email: "barbaramoore@example.com",
			AmountDue: "$8295",
			RegisteredOn: "24 Oct 2020",
			status: "Active"
		},
		{
			Customer: "Brian Johnson",
			img_url: img2,
			Email: "brianjohnson@example.com",
			AmountDue: "$295",
			RegisteredOn: "16 Nov 2020",
			status: "Active"
		},
		{
			Customer: "Greg Lynch ",
			img_url: img5,
			Email: "greglynch@example.com",
			AmountDue: "$3000",
			RegisteredOn: "11 Oct 2020",
			status: "Inactive"
		},
		{
			Customer: "Jennifer Floyd",
			img_url: img11,
			Email: "jenniferfloyd@example.com",
			AmountDue: "-",
			RegisteredOn: "17 Apr 2020",
			status: "Active"
		},
		{
			Customer: "John Blair",
			img_url: img7,
			Email: "johnblair@example.com",
			AmountDue: "$50",
			RegisteredOn: "13 Aug 2020",
			status: "Active"
		},
		{
			Customer: "Joseph Collins ",
			img_url: img6,
			Email: "josephcollins@example.com",
			AmountDue: "$600",
			RegisteredOn: "9 May 2020",
			status: "Active"
		},
		{
			Customer: "Karlene Chaidez",
			img_url: img7,
			Email: "karlenechaidez@example.com",
			AmountDue: "-",
			RegisteredOn: "29 Sep 2020",
			status: "Inactive"
		},
		{
			Customer: "Leatha Bailey",
			img_url: img9,
			Email: "leathabailey@example.com",
			AmountDue: "$480",
			RegisteredOn: "20 Jun 2020",
			status: "Active"
		},
		{
			Customer: "Marine Canales",
			img_url: img3,	
			Email: "mariecanales@example.com",
			AmountDue: "$1750",
			RegisteredOn: "8 Nov 2020",
			status: "Inactive"
		},
		{
			Customer: "Russell Copeland",
			img_url: img8,
			Email: "russellcopeland@example.com",
			AmountDue: "$1750",
			RegisteredOn: "2 Jul 2020",
			status: "Inactive"
		},
		{
			Customer: "Wendell Ward ",
			img_url: img3,
			Email: "wendellward@example.com",
			AmountDue: "$7500",
			RegisteredOn: "22 Feb 2020",
			status: "Active"
		}
	]
	const columns = [
					{
			name: 'Customer',			
			sortable: true,
			cell: row => <Media ><Media.Body className="d-flex"><a href="/profile" className="avatar avatar-sm me-2 user-dt"><img src={row.img_url} className="avatar-img rounded-circle" /></a><div className='mobilenumber'>{row.Customer}<span>9876543210</span></div></Media.Body></Media>,
			width:"250px",
		},																							
		
		{
			name: 'Email',
			selector: row=>row.Email,
			sortable: true,	
			width:"250px",			
		},
		{
			name: 'Amount Due',
			selector: row=>row.AmountDue,
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
		
		
			<>
		 <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          
          <Header onMenuClick={(value) => toggleMobileMenu()} />
          <Sidebar /> 
			<div className="page-wrapper">
				<div className="content container-fluid">
				
					<div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Customers</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/index">Dashboard</Link>
									</li>
									<li className="breadcrumb-item active">Customers</li>
								</ul>
							</div>
							<div className="col-auto">
								<Link to="/add-customer" className="btn btn-primary me-1">
									<i className="fas fa-plus"></i>
								</Link>
								<a className="btn btn-primary filter-btn" href="/customers#" id="filter_search">
									<i className="fas fa-filter"></i>
								</a>
							</div>
						</div>
					</div>
					<div id="filter_inputs" className="card filter-card">
						<div className="card-body pb-0">
							<div className="row">
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>Name</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>Email</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>Phone</label>
										<input type="text" className="form-control" />
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-12">
							<div className="card card-table">
								<div className="card-body">
																				
					<DataTableExtensions width='100%'
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
			</>
        );
}
export default Customers;