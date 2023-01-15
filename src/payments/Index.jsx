import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {img3,img8,img6,img10,img7,img5,img9 } from "../_components/imagepath"
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'

const Payments = () => {
      
	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }

	const [date, setDate] = useState(new Date());
	const [options, setOptions] = useState([
		{ id: 1, text: 'Draft' },
		{ id: 2, text: 'Sent' },
		{ id: 3, text: 'Viewed' },
		{ id: 4, text: 'Expired' },
		{ id: 5, text: 'Accepted' },
		{ id: 6, text: 'Rejected' },
	]);   
    const data = [
		{
			"ReferenceID": "#158790",
			"Customer": "Leatha Bailey",
			"img_url": img9,
			"Amount": "$444",
			"Date": " 17 Sep 2020",
			"PaymentMethod": "Visa",
			"card_no": "9632"
		},
		{
			"ReferenceID": "#248960",
			"Customer": "Joseph Collins",
			"img_url": img10,
			"Amount": "$657",
			"Date": "12 Sep 2020",
			"PaymentMethod": "Visa",
			"card_no": "1254"
		},
		{
			"ReferenceID": "#3682303",
			"Customer": " Marie Canales",
			"img_url": img3,
			"Amount": "$717",
			"Date": "17 Nov 2020",
			"PaymentMethod": "Visa",
			"card_no": "4321"
		},
		{
			"ReferenceID": "#45268",
			"Customer": "Russell Copeland",
			"img_url": img8,
			"Amount": "$120",
			"Date": "11 Oct 2020",
			"PaymentMethod": "Visa",
			"card_no": "5689"
		},
		{
			"ReferenceID": "#542187",
			"Customer": " John Blair",
			"img_url": img7,
			"Amount": "$325",
			"Date": "25 Oct 2020",
			"PaymentMethod": "Visa",
			"card_no": "4523"
		},
		{
			"ReferenceID": "#635489",
			"Customer": " Karlene Chaidez",
			"img_url": img6,
			"Amount": "$698",
			"Date": "1 Nov 2020",
			"PaymentMethod": "Visa",
			"card_no": "8795"
		},
		{
			"ReferenceID": "#875642",
			"Customer": " Greg Lynch",
			"img_url": img5,
			"Amount": "$582",
			"Date": "6 Nov 2020",
			"PaymentMethod": "Visa",
			"card_no": "3654"
		}
	]
	
	const columns = [			
		{
			name: 'Reference ID',
			selector: row=>row.ReferenceID,
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
			name: 'Amount',
			selector: row=>row.Amount,
			sortable: true,
			width:"250px",
		},
		{
			name: ' Date',
			selector: row=>row.Date,
			sortable: true,		
			width:"250px",		
		},
		{
			name: 'Payment Method',
			selector: row=>row.PaymentMethod,
			sortable: true,
			cell: row => <Media className="user-dt"> <Media.Body>{row.PaymentMethod}</Media.Body><strong className='ms-1'>{row.card_no}</strong></Media>,
			width:"250px",
		},	
		{
			name: 'Action',
			selector: row=>row.action,
			sortable: true,	
			cell: () => <div> <a className="btn btn-sm btn-white me-2" href="#">
			<i className="fas fa-download me-1"></i> PDF
			</a>
			<Link className="btn btn-sm btn-white" to="/view-invoice">
				<i className="far fa-eye me-1"></i> View
			</Link>	
			</div>,
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
								<h3 className="page-title">Payments</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/index">Dashboard</Link></li>
									<li className="breadcrumb-item active">Payments</li>
								</ul>
							</div>
							<div className="col-auto">
								<Link to="/add-payments"  className="btn btn-primary me-1">
									<i className="fas fa-plus"></i>
								</Link>
								<a className="btn btn-primary filter-btn" href="/payments#" id="filter_search">
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
										<label>Customer</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>Price</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-sm-6 col-md-3">
									<div className="form-group">
										<label>Payment Mode</label>
										{/* <Select2
                                            className="w-100"
                                            data={options}
                                            options={{
                                                placeholder: 'Select Status',
                                            }}
                                        /> */}
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
export default Payments;