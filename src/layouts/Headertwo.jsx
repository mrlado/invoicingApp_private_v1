import React,  {useState} from 'react'
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import {img1,img2,img3,img4,LogoImg,LogoSmallImg,UsFlag,FrFlag,EsFlag,DeFlag,logowhite,Logo} from "../_components/imagepath"


const Headertwo = (props) => {

	const handlesidebar=()=>{
		document.body.classList.toggle('mini-sidebar');
	}
	const onMenuClik = () => {
		props.onMenuClick()
	}


        return(

			<div className="header header-two">
			{/* Logo */}
			<div className="header-left header-left-two">
			{/* Sidebar Toggle */}
			<a href="#" id="toggle_btn" onClick={handlesidebar}>
				<i className="fas fa-bars"></i>
			</a>
			
			{/* /Sidebar Toggle */}
			<Link to="/index" className="logo">
				<img src={logowhite} alt="Logo" />
			</Link>
			<Link to="/index" className="dark-logo">
				<img src={Logo} alt="Logo" />
			</Link>					
			<Link to="/index"  className="logo logo-small">
				<img
				src={LogoSmallImg}
				alt="Logo"
				width={30}
				height={30}
				/>
			</Link>
			</div>
			{/* /Logo */}
			{/* Search */}
			<div className="top-nav-search top-nav-search-two">
			<form>
				<input
				type="text"
				className="form-control"
				placeholder="Search here"
				/>
				<button className="btn" type="submit">
				<i className="fas fa-search" />
				</button>
			</form>
			</div>
			{/* /Search */}
			{/* Mobile Menu Toggle */}
			<a className="mobile_btn mobile_btn-two" id="mobile_btn"  href="#"  onClick={() => onMenuClik()}>
				<i className="fas fa-bars"></i>
			</a>					
			{/* /Mobile Menu Toggle */}
			{/* Header Menu */}
			<ul className="nav nav-tabs user-menu user-menu-two">
			{/* Notifications */}
			<li className="nav-item dropdown">
				<a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
				<FeatherIcon icon="bell" /> <span className="badge badge-pill">5</span>
				</a>
				<div className="dropdown-menu notifications">
				<div className="topnav-dropdown-header">
					<span className="notification-title">Notifications</span>
					<a href="#" className="clear-noti">
					{" "}
					Clear All
					</a>
				</div>
				<div className="noti-content">
					<ul className="notification-list">
					<li className="notification-message">
						<a href="#">
						<div className="media d-flex">
							<span className="avatar avatar-sm">
							<img
								className="avatar-img rounded-circle"
								alt=""
								src={img2}
							/>
							</span>
							<div className="media-body">
							<p className="noti-details">
								<span className="noti-title">Brian Johnson</span> paid
								the invoice{" "}
								<span className="noti-title">#DF65485</span>
							</p>
							<p className="noti-time">
								<span className="notification-time">4 mins ago</span>
							</p>
							</div>
						</div>
						</a>
					</li>
					<li className="notification-message">
						<a href="#">
						<div className="media d-flex">
							<span className="avatar avatar-sm">
							<img
								className="avatar-img rounded-circle"
								alt=""
								src={img3}
							/>
							</span>
							<div className="media-body">
							<p className="noti-details">
								<span className="noti-title">Marie Canales</span> has
								accepted your estimate{" "}
								<span className="noti-title">#GTR458789</span>
							</p>
							<p className="noti-time">
								<span className="notification-time">6 mins ago</span>
							</p>
							</div>
						</div>
						</a>
					</li>
					<li className="notification-message">
						<a href="#">
						<div className="media d-flex">
							<div className="avatar avatar-sm">
							<span className="avatar-title rounded-circle bg-primary-light">
								<i className="far fa-user" />
							</span>
							</div>
							<div className="media-body">
							<p className="noti-details">
								<span className="noti-title">
								New user registered
								</span>
							</p>
							<p className="noti-time">
								<span className="notification-time">8 mins ago</span>
							</p>
							</div>
						</div>
						</a>
					</li>
					<li className="notification-message">
						<a href="#">
						<div className="media d-flex">
							<span className="avatar avatar-sm">
							<img
								className="avatar-img rounded-circle"
								alt=""
								src={img4}
							/>
							</span>
							<div className="media-body">
							<p className="noti-details">
								<span className="noti-title">Barbara Moore</span>{" "}
								declined the invoice{" "}
								<span className="noti-title">#RDW026896</span>
							</p>
							<p className="noti-time">
								<span className="notification-time">12 mins ago</span>
							</p>
							</div>
						</div>
						</a>
					</li>
					<li className="notification-message">
						<a href="#">
						<div className="media d-flex">
							<div className="avatar avatar-sm">
							<span className="avatar-title rounded-circle bg-info-light">
								<i className="far fa-comment" />
							</span>
							</div>
							<div className="media-body">
							<p className="noti-details">
								<span className="noti-title">
								You have received a new message
								</span>
							</p>
							<p className="noti-time">
								<span className="notification-time">2 days ago</span>
							</p>
							</div>
						</div>
						</a>
					</li>
					</ul>
				</div>
				<div className="topnav-dropdown-footer">
					<a href="#">View all Notifications</a>
				</div>
				</div>
			</li>
			{/* /Notifications */}
			{/* Flag */}
			<li className="nav-item dropdown has-arrow flag-nav">
			<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
				<img src={UsFlag} alt="" height="20" /> <span>English</span>
			</a>
			<div className="dropdown-menu dropdown-menu-right">
				<a href="#" className="dropdown-item">
					<img src={UsFlag} alt="" height="16" /> English
				</a>
				<a href="#" className="dropdown-item">
					<img src={FrFlag} alt="" height="16" /> French
				</a>
				<a href="#" className="dropdown-item">
					<img src={EsFlag} alt="" height="16" /> Spanish
				</a>
				<a href="#" className="dropdown-item">
					<img src={DeFlag} alt="" height="16" /> German
				</a>
			</div>
			</li>
			{/* /Flag */}
			{/* User Menu */}
			<li className="nav-item dropdown has-arrow main-drop">
			<a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
				<span className="user-img">
					<img src={img1} alt="" />
					<span className="status online"></span>
				</span>
				<span>Admin</span>
			</a>
			<div className="dropdown-menu">
				<Link className="dropdown-item" to="/profile"><FeatherIcon icon="user" className="me-1" /> Profile</Link>
				<Link className="dropdown-item" to="/settings"><FeatherIcon icon="settings" className="me-1" />Settings</Link>
				<Link className="dropdown-item" to="/login"><FeatherIcon icon="log-out" className="me-1" />Logout</Link>
			</div>
			</li>
			{/* /User Menu */}
			</ul>
			{/* /Header Menu */}
		</div>
		
           
        );
    
}
export default Headertwo;