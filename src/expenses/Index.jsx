import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Select2 from 'react-select2-wrapper';
import DatePicker from 'react-datepicker';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {img3,img8,img6,img4,img7,img5,img2 } from "../_components/imagepath"
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'

const Expenses = () => {
    
    const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
    const [date, setDate] = useState(new Date());
	const [categoryOptions, setCategoryOptions] = useState([
        { id: 1, text: 'Advertising' },
        { id: 2, text: 'Marketing' },
        { id: 3, text: 'Software' },
        { id: 4, text: 'Travel' }
	]); 
    const handleChange = (date) => {
        setDate(date)
    }
    const data = [
        {           
            "Category": "Advertising",
            "Customer": "Barbara Moore",
            "img_url": img4,
            "ExpenseDate" : "15 Nov 2020",
            "Notes": "Lorem ipsum dollar...",
            "Amount": "$145",
            "Status": "Approved"
        },
        {
            "Category": "Food",
            "Customer": "Russell Copeland",
            "img_url": img8,
            "ExpenseDate" : "19 Sep 2020",
            "Notes": "Lorem ipsum dollar...",
            "Amount": "$214",
            "Status": "Pending"
        },
        {
            "Category": "Marketing",
            "Customer": " Brian Johnson",
            "img_url": img2,
            "ExpenseDate" : "11 Nov 2020",
            "Notes": "Lorem ipsum dollar...",
            "Amount": "$254",
            "Status": "Pending"
        },
        {
            "Category": "Repairs",
            "Customer": " Marie Canales",
            "img_url": img3,
            "ExpenseDate" : "3 Oct 2020",
            "Notes": "Lorem ipsum dollar...",
            "Amount": "$60",
            "Status": "Pending"
        },
        {
            "Category": "Software",
            "Customer": "Greg Lynch",
            "img_url": img5,
            "ExpenseDate" : "23 Oct 2020",
            "Notes": "Lorem ipsum dollar...",
            "Amount": "$145",
            "Status": "Approved"
        },
        {
            "Category": "Stationary",
            "Customer": "John Blair",
            "img_url": img7,
            "ExpenseDate" : "29 Sep 2020",
            "Notes": "Lorem ipsum dollar...",
            "Amount": "$154",
            "Status": "Pending"
        },
        {
            "Category": "Travel",
            "Customer": " Karlene Chaidez",
            "img_url": img6,
            "ExpenseDate" : "9 Oct 2020",
            "Notes": "Lorem ipsum dollar...",
            "Amount": "$75",
            "Status": "Approved"
        }
    ]
	
	const columns = [	
 
        {
            name: 'Category',
            selector: row=>row.Category,
            sortable: true,	
            width:"250px",							
        },																																			
		{
			name: 'Customer',			
			sortable: true,
			cell: row => <Media className="user-dt"><a href="/profile" className="avatar avatar-sm me-2"><img src={row.img_url} className="avatar-img rounded-circle" /></a><Media.Body>{row.Customer}</Media.Body></Media>,
            width:"250px",
		},	
        {
			name: 'ExpenseDate',
			selector: row=>row.ExpenseDate,
			sortable: true,	
            width:"250px",			
		},
        {
			name: 'Notes',
			selector: row=>row.Notes,
			sortable: true,
            width:"250px",
		},
		{
			name: 'Amount',
			selector: row=>row.Amount,
			sortable: true,
            width:"250px",
		},
        {
			name: 'Status',
			selector: row=>row.Status,
			sortable: true,
            cell: row => <Media className="user-dt"><span className={`badge badge-pill badge ${ row.Status == "Approved" ? 'bg-success-light' : 'bg-danger-light' }`} >{row.Status}</span><Media.Body></Media.Body></Media>,
            width:"250px",
		},			
		{
			name: 'Action',
			selector: row=>row.action,
			sortable: true,	
			cell: () => <div> <Link to="/edit-expenses" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1"></i> Edit</Link> 
            <a href="#" className="btn btn-sm btn-white text-danger"><i className="far fa-trash-alt me-1"></i>Delete</a></div>,
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
								<h3 className="page-title">Expenses</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/index">Dashboard</Link></li>
									<li className="breadcrumb-item active">Expenses</li>
								</ul>
							</div>
							<div className="col-auto">
								<Link to="/add-expenses"  className="btn btn-primary m-1">
									<i className="fas fa-plus"></i>
								</Link>
								<a className="btn btn-primary filter-btn" href="/expenses#" id="filter_search">
									<i className="fas fa-filter"></i>
								</a>
							</div>
						</div>
					</div>
                   
                        <div id="filter_inputs" className="card filter-card">
                            <div className="card-body pb-0">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Customer:</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Category:</label>
                                            <Select2
                                               className="w-100"
                                                data={categoryOptions}
                                                options={{
                                                    placeholder: 'Select Category',
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>From</label>
                                            <div className="cal-icon">
                                            <DatePicker
                                                selected={date}
                                                onChange={handleChange}
                                                className="form-control datetimepicker"
                                            />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>To</label>
                                            <div className="cal-icon">
                                            <DatePicker
                                                selected={date}
                                                onChange={handleChange}
                                                className="form-control datetimepicker"
                                            />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card card-table"> 
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
                </>
        );
    }
export default Expenses;