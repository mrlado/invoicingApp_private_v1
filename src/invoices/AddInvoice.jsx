import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import {Logo,signature,circle1,circle2} from "../_components/imagepath"
import FeatherIcon from 'feather-icons-react';

const AddInvoice = () => {
	
	const [show, setShow] = useState(true);
    const[task,settask]=useState(true);
    const [menu, setMenu] = useState(false)
	const [date, setDate] = useState(new Date());
    const ontaskClick = () =>{
        settask(!task)
      }
	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
  
    useEffect(() => {
        let elements = Array.from(document.getElementsByClassName('react-datepicker-wrapper'));
        elements.map(element => element.classList.add("width-100"))
	},[]);

	
    const handleChange = (date) => {
        setDate(date)
    };

        return (

            <>
            <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          
          <Header onMenuClick={(value) => toggleMobileMenu()} />
          <Sidebar /> 
          {/* <!-- Page Wrapper --> */}
			<div className="page-wrapper">
				<div className="content container-fluid">
			
					{/* <!-- Page Header --> */}
					<div className="page-header invoices-page-header">
						<div className="row align-items-center">
							<div className="col">
								<ul className="breadcrumb invoices-breadcrumb">
									<li className="breadcrumb-item invoices-breadcrumb-item">
										<Link to="/invoices">
											<i className="fe fe-chevron-left"><FeatherIcon icon="chevron-left"/> </i>Back to Invoice List
										</Link >
									</li>
								</ul>
							</div>
							<div className="col-auto">
								<div className="invoices-create-btn">
									<Link className="invoices-preview-link" to="#" data-bs-toggle="modal" data-bs-target="#invoices_preview"><i className="fe fe-eye"> <FeatherIcon icon="eye"/></i> Preview</Link >
									<Link to="#" data-bs-toggle="modal" data-bs-target="#delete_invoices_details" className="btn delete-invoice-btn">
										Delete Invoice
									</Link >
									<Link to="#" data-bs-toggle="modal" data-bs-target="#save_invocies_details" className="btn save-invoice-btn">
										Save Draft
									</Link >
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}
					
					<div className="row">
						<div className="col-md-12">
							<div className="card invoices-add-card">
								<div className="card-body">
									<form action="#" className="invoices-form">
										<div className="invoices-main-form">
											<div className="row">
												<div className="col-xl-4 col-md-6 col-sm-12 col-12">
													<div className="form-group">
														<label>Customer Name</label>
														<div className="multipleSelection">
															<div className="selectBox"  onClick={() => setShow((s) => !s)}>
																<p className="mb-0">Select Customer</p>
																<span className="down-icon"><FeatherIcon icon="chevron-down" /></span>
															</div>						  
															<div id="checkBoxes-one" style={{ display: show ? "none" : "block" }}>
																<p className="checkbox-title">Customer Search</p>
																<div className="form-custom">
																	<input type="text" className="form-control bg-grey" placeholder="Enter Customer Name"/>
																</div>
																<div className="selectBox-cont">
																	<label className="custom_check w-100">
																		<input type="checkbox" name="username"/>
																		<span className="checkmark"></span>  Brian Johnson
																	</label>
																	<label className="custom_check w-100">
																		<input type="checkbox" name="username"/>
																		<span className="checkmark"></span>  Russell Copeland
																	</label>
																	<label className="custom_check w-100">
																		<input type="checkbox" name="username"/>
																		<span className="checkmark"></span>  Greg Lynch
																	</label>
																	<label className="custom_check w-100">
																		<input type="checkbox" name="username"/>
																		<span className="checkmark"></span> John Blair
																	</label>
																	<label className="custom_check w-100">
																		<input type="checkbox" name="username"/>
																		<span className="checkmark"></span> Barbara Moore
																	</label>
																	<label className="custom_check w-100">
																		<input type="checkbox" name="username"/>
																		<span className="checkmark"></span> Hendry Evan
																	</label>
																	<label className="custom_check w-100">
																		<input type="checkbox" name="username"/>
																		<span className="checkmark"></span> Richard Miles
																	</label>
																</div>
																<button type="submit" className="btn w-100 btn-primary">Apply</button>
																<button type="reset" className="btn w-100 btn-grey">Reset</button>
															</div>
														</div>
													</div>
													<div className="form-group">
														<label>Po Number</label>
														<input className="form-control" type="text" placeholder="Enter Reference Number"/>
													</div>
												</div>
												<div className="col-xl-5 col-md-6 col-sm-12 col-12">
													<h4 className="invoice-details-title">Invoice details</h4>
													<div className="invoice-details-box">
														<div className="invoice-inner-head">
															<span>Invoice No. <Link to="invoice-details">IN093439#@09</Link ></span>
														</div>
														<div className="invoice-inner-footer">
															<div className="row align-items-center">
																<div className="col-lg-6 col-md-6">
																	<div className="invoice-inner-date">
																		<span>
																			Date 
																			<DatePicker selected={date} onChange={handleChange} className="form-control datetimepicker" value="15/02/2022"  />
																		</span>
																	</div>
																</div>
																<div className="col-lg-6 col-md-6">
																	<div className="invoice-inner-date invoice-inner-datepic">
																		<span>
																			Due Date <DatePicker selected={date} onChange={handleChange} className="form-control datetimepicker" type="text" value="Select"  />
																		</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xl-3 col-md-12 col-sm-12 col-12">
													<div className="inovices-month-info">
														<div className="form-group mb-0">
															<label className="custom_check w-100">
																<input type="checkbox" id="enableTax" name="invoice"/>
																<span className="checkmark"></span> Enable tax
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" id="chkYes" name="invoice"/>
																<span className="checkmark"></span> Recurring Invoice
															</label>
														</div>
														<div id="show-invoices">
															<div className="row">
																<div className="col-md-6">
																	<div className="form-group">
																		<select className="select">
																			<option>By month</option>
																			<option>March</option>
																			<option>April</option>
																			<option>May</option>
																			<option>June</option>
																			<option>July</option>
																		</select>
																	</div>
																</div>
																<div className="col-md-6">
																	<div className="form-group">
																		<input className="form-control" type="text" placeholder="Enter Months"/>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="invoice-item">
											<div className="row">
												<div className="col-xl-4 col-lg-6 col-md-6">
													<div className="invoice-info">
														<strong className="customer-text">Invoice From <Link className="small" to="/edit-invoice">Edit Address</Link ></strong>
														<p className="invoice-details invoice-details-two">
															Darren Elder <br />
															806  Twin Willow Lane, Old Forge,<br />
															Newyork, USA <br />
														</p>
													</div>
												</div>
												<div className="col-xl-4 col-lg-6 col-md-6">
													<div className="invoice-info">
														<strong className="customer-text">Invoice To</strong>
														<p className="invoice-details invoice-details-two">
															Walter Roberson <br />
															299 Star Trek Drive, Panama City, <br />
															Florida, 32405, USA <br />
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="invoice-add-table">
											<h4>Item Details</h4>
											<div className="table-responsive">
												<table className="table table-center add-table-items">
													<thead>
														<tr>
															<th>Items</th>
															<th>Category</th>
															<th>Quantity</th>
															<th>Price</th>
															<th>Amount</th>
															<th>Discount</th>
															<th>Actions</th>
														</tr>
													</thead>
													<tbody>
														<tr className="add-row">
															<td>
																<input type="text" className="form-control"/>
															</td>
															<td>
																<input type="text" className="form-control"/>
															</td>
															<td>
																<input type="text" className="form-control"/>
															</td>
															<td>
																<input type="text" className="form-control"/>
															</td>
															<td>
																<input type="text" className="form-control"/>
															</td>
															<td>
																<input type="text" className="form-control"/>
															</td>
															<td className="add-remove text-end">
																<Link to="javascript:void(0);" className="add-btn me-2"><i className="fas fa-plus-circle"></i></Link > 
																<Link to="#" className="copy-btn me-2"><i className="fe fe-copy"></i></Link ><Link to="javascript:void(0);" className="remove-btn"><i className="fe fe-trash-2"></i></Link >
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-7 col-md-6">
												<div className="invoice-fields">
													<h4 className="field-title">More Fields</h4>
													<div className="field-box">
														<p>Payment Details</p>
														<Link className="btn btn-primary" to="#" data-bs-toggle="modal" data-bs-target="#bank_details"><i className="fas fa-plus-circle me-2"></i>Add Bank Details</Link >
													</div>
												</div>
												<div className="invoice-faq">
													<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
														<div className="faq-tab">
															<div className="panel panel-default">
																<div className="panel-heading" role="tab" id="headingTwo">
																	<p className="panel-title">
																		<a className="collapsed" data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
																		<i className="fas fa-plus-circle me-1"></i> Add Terms & Conditions
																		</a >
																	</p>
																</div>
																<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" data-bs-parent="#accordion">
																	<div className="panel-body">
																		<textarea className="form-control"></textarea>
																	</div>
																</div>
															</div>
														</div>
														<div className="faq-tab">
															<div className="panel panel-default">
																<div className="panel-heading" role="tab" id="headingThree">
																	<p className="panel-title">
																		<a className="collapsed" data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
																		<i className="fas fa-plus-circle me-1"></i> Add Notes
																		</a>
																	</p>
																</div>
																<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" data-bs-parent="#accordion">
																	<div className="panel-body">
																		<textarea className="form-control"></textarea>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-5 col-md-6">
												<div className="invoice-total-card">
													<h4 className="invoice-total-title">Summary</h4>
													<div className="invoice-total-box">
														<div className="invoice-total-inner">
															<p>Taxable Amount <span>$21</span></p>
															<p>Round Off 
																<input type="checkbox" id="status_1" className="check"/>
																<label htmlFor="status_1" className="checktoggle">checkbox</label> 
																<span>$54</span>
															</p>
															<div className="links-info-one">
																<div className="links-info">
																	<div className="links-cont">
																		<Link to="#" className="service-trash">
																			<i className="feather-trash-2"></i>
																		</Link >
																	</div>
																</div>
															</div>
															<Link to="javascript:void(0);" className="add-links">
																<i className="fas fa-plus-circle me-1"></i> Additional Charges
															</Link >
															<div className="links-info-discount">
																<div className="links-cont-discount">
																	<Link to="javascript:void(0);" className="add-links-one">
																		<i className="fas fa-plus-circle me-1"></i> Add more Discount
																	</Link >
																	<Link to="#" className="service-trash-one">
																		<i className="feather-trash-2"></i>
																	</Link >
																</div>
															</div>
														</div>
														<div className="invoice-total-footer">
															<h4>Total Amount <span>$ 894.00</span></h4>
														</div>
													</div>
												</div>
												<div className="upload-sign">
													<div className="form-group service-upload">
														<span>Upload Sign</span>
														<input type="file" multiple/>
													</div>
													<div className="form-group">
														<input type="text" className="form-control" placeholder="Name of the Signatuaory"/>
													</div>
													<div className="form-group float-end mb-0">
														<button className="btn btn-primary" type="submit">Save Invoice</button>
													</div>
												</div>
											</div>
										</div>
									</form>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Page Wrapper -->

		    <!-- Invoices Preview Modal --> */}
			<div className="modal custom-modal fade invoices-preview" id="invoices_preview" role="dialog">
				<div className="modal-dialog modal-dialog-centered modal-xl">
					<div className="modal-content">
						<div className="modal-body">
							<div className="row justify-content-center">
								<div className="col-lg-12">
									<div className="card invoice-info-card">
										<div className="card-body pb-0">
											<div className="invoice-item invoice-item-one">
												<div className="row">
													<div className="col-md-6">
														<div className="invoice-logo">
															<img src={Logo} alt="logo"/>
														</div>
													</div>
													<div className="col-md-6">
														<div className="invoice-info">
															<div className="invoice-head">
																<h2 className="text-primary">Invoice</h2>
																<p>Invoice Number : In983248782</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Invoice Item --> */}
											<div className="invoice-item invoice-item-bg">
												<div className="invoice-circle-img">
													<img src={circle1} alt="" className="invoice-circle1"/>
													<img src={circle2} alt="" className="invoice-circle2"/>
												</div>
												<div className="row">
													<div className="col-lg-4 col-md-12">
														<div className="invoice-info">
															<strong className="customer-text-one">Billed to</strong>
															<h6 className="invoice-name">Customer Name</h6>
															<p className="invoice-details invoice-details-two">
																9087484288 <br />
																Address line 1, <br />
																Address line 2 <br />
																Zip code ,City - Country
															</p>
														</div>
													</div>
													<div className="col-lg-4 col-md-12">
														<div className="invoice-info">
															<strong className="customer-text-one">Invoice From</strong>
															<h6 className="invoice-name">Company Name</h6>
															<p className="invoice-details invoice-details-two">
																9087484288 <br />
																Address line 1, <br />
																Address line 2 <br />
																Zip code ,City - Country
															</p>
														</div>
													</div>
													<div className="col-lg-4 col-md-12">
														<div className="invoice-info invoice-info-one border-0">
															<p>Issue Date : 27 Jul 2022</p>
															<p>Due Date : 27 Aug 2022</p>
															<p>Due Amount : $ 1,54,22 </p>
															<p>Recurring Invoice : 15 Months</p>
															<p className="mb-0">PO Number : 54515454</p>
														</div>
													</div>
												</div>
											</div>
											{/* <!-- /Invoice Item -->

											<!-- Invoice Item --> */}
											<div className="invoice-item invoice-table-wrap">
												<div className="row">
													<div className="col-md-12">
														<div className="table-responsive">
															<table className="invoice-table table table-center mb-0">
																<thead>
																	<tr>
																		<th>Description</th>
																		<th>Category</th>
																		<th>Rate/Item</th>
																		<th>Quantity</th>
																		<th>Discount (%)</th>
																		<th className="text-end">Amount</th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>Dell Laptop</td>
																		<td>Laptop</td>
																		<td>$1,110</td>
																		<th>2</th>
																		<th>2%</th>
																		<td className="text-end">$400</td>
																	</tr>
																	<tr>
																		<td>HP Laptop</td>
																		<td>Laptop</td>
																		<td>$1,500</td>
																		<th>3</th>
																		<th>6%</th>
																		<td className="text-end">$3,000</td>
																	</tr>
																	<tr>
																		<td>Apple Ipad</td>
																		<td>Ipad</td>
																		<td>$11,500</td>
																		<th>1</th>
																		<th>10%</th>
																		<td className="text-end">$11,000</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</div>
											{/* <!-- /Invoice Item --> */}

											<div className="row align-items-center justify-content-center">
												<div className="col-lg-6 col-md-6">
													<div className="invoice-payment-box">
														<h4>Payment Details</h4>
														<div className="payment-details">
															<p>Debit Card XXXXXXXXXXXX-2541 HDFC Bank</p>
														</div>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="invoice-total-card">
														<div className="invoice-total-box">
															<div className="invoice-total-inner">
																<p>Taxable <span>$6,660.00</span></p>
																<p>Additional Charges <span>$6,660.00</span></p>
																<p>Discount <span>$3,300.00</span></p>
																<p className="mb-0">Sub total <span>$3,300.00</span></p>
															</div>
															<div className="invoice-total-footer">
																<h4>Total Amount <span>$143,300.00</span></h4>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="invoice-sign-box">
												<div className="row">
													<div className="col-lg-8 col-md-8">
														<div className="invoice-terms">
															<h6>Notes:</h6>
															<p className="mb-0">Enter customer notes or any other details</p>
														</div>
														<div className="invoice-terms mb-0">
															<h6>Terms and Conditions:</h6>
															<p className="mb-0">Enter customer notes or any other details</p>
														</div>
													</div>
													<div className="col-lg-4 col-md-4">
														<div className="invoice-sign text-end">
															<img className="img-fluid d-inline-block" src={signature} alt="sign"/>
															<span className="d-block">Harristemp</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Invoices Preview Modal -->

		    <!-- Add Invoices Modal --> */}
			<div className="modal custom-modal fade bank-details" id="bank_details" role="dialog">
				<div className="modal-dialog modal-dialog-centered modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<div className="form-header text-start mb-0">
								<h4 className="mb-0">Add Bank Details</h4>
							</div>
							<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="bank-inner-details">
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<div className="form-group">
											<label>Account Holder Name</label>
											<input type="text" className="form-control" placeholder="Add Name"/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="form-group">
											<label>Bank name</label>
											<input type="text" className="form-control" placeholder="Add Bank name"/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="form-group">
											<label>IFSC Code</label>
											<input type="text" className="form-control"/>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="form-group">
											<label>Account Number</label>
											<input type="text" className="form-control"/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<div className="bank-details-btn">
								<Link to="javascript:void(0);" data-bs-dismiss="modal" className="btn bank-cancel-btn me-2">Cancel</Link >
								<Link to="javascript:void(0);" className="btn bank-save-btn">Save Item</Link >
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Add Invoices Modal -->

			<!-- Delete Invoices Modal --> */}
			<div className="modal custom-modal fade" id="delete_invoices_details" role="dialog">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<div className="form-header">
								<h3>Delete Invoice Details</h3>
								<p>Are you sure want to delete?</p>
							</div>
							<div className="modal-btn delete-action">
								<div className="row">
									<div className="col-6">
										<Link to="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary paid-continue-btn">Delete</Link >
									</div>
									<div className="col-6">
										<Link to="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary paid-cancel-btn">Cancel</Link >
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Delete Invoices Modal -->

			<!-- Save Invoices Modal --> */}
			<div className="modal custom-modal fade" id="save_invocies_details" role="dialog">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<div className="form-header">
								<h3>Save Invoice Details</h3>
								<p>Are you sure want to save?</p>
							</div>
							<div className="modal-btn delete-action">
								<div className="row">
									<div className="col-6">
										<Link to="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary paid-continue-btn">Save</Link >
									</div>
									<div className="col-6">
										<Link to="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary paid-cancel-btn">Cancel</Link >
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Save Invoices Modal --> */}
             </div>
                </>
        );
    }
    export default AddInvoice