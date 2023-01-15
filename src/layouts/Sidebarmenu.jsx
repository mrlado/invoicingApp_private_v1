import React, { useEffect,useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Scrollbars } from 'react-custom-scrollbars';

const Sidebarmenu = (props) => {


    const [show, setShow] = useState(true);
	const handlesidebar=()=>{
		document.body.classList.toggle('mini-sidebar');
	}
	const onMenuClik = () => {
		props.onMenuClick()
	}
	const [isSideMenu, setSideMenu] = useState("")
	const [level2Menu, setLevel2Menu] = useState("")
	const [level3Menu, setLevel3Menu] = useState("")
	const [level4Menu, setLevel4Menu] = useState("")
	const toggleSidebar = (value) => {
		console.log (value);
		setSideMenu(value)
		
	}
	
    const toggleLvelTwo = (value) => {
	setLevel2Menu(value)
    setLevel3Menu("")
    setLevel4Menu("")
  }
  const toggleLevelThree = (value) => {
	setLevel2Menu("")
    setLevel3Menu(value)
    setLevel4Menu("")
  }	
  const toggleLevelfour = (value) => {
	setLevel2Menu("")
    setLevel3Menu("")
    setLevel4Menu(value)
  }	
    console.log("Working", isSideMenu)
	
    console.log("Working", isSideMenu)

			
    let pathName = window.location.pathname || ''
        return(
            <>
        {/* Header Menu List */}
        <div className="sidebar sidebar-five">
        <div id="sidebar-menu" className="sidebar-menu sidebar-menu-five">
        <ul className="nav">
            <li className="submenu submenu-five nav-item dropdown">
            
            <Link to="#" className={ `dropdown-toggle ${level2Menu == "main" ? "subdrop" : "" }`} onClick={()=> toggleLvelTwo(level2Menu =="main" ? "": "main")}><FeatherIcon icon="airplay" /> <span className='dropdown-toggle'>Main </span><span className="menu-arrow"></span>
                
            </Link>
            { level2Menu == "main" ? 
            <ul className="header-four dropdown-menu dropdown-menu-five dropdown-menu-right" style={{ display: level2Menu ? "block" : "none" }}>
            
                <li className={`active${'/index' === pathName ? 'active' : '' }`}>
                    <Link to="/index"><FeatherIcon icon="home" /> <span>Dashboard</span></Link>
                </li>
                <li className={`${'/customers' === pathName || '/add-customer' === pathName ||'/add-customer' === pathName ? 'active' : '' }`}>
                    <Link to="/customers"><FeatherIcon icon="users" /><span>Customers</span></Link>
                </li>
                <li className={`${'/estimates' === pathName || '/add-estimate' === pathName ||'/edit-estimate' === pathName ||'/view-estimate' === pathName ? 'active' : '' }`}>
                    <Link to="/estimates"><FeatherIcon icon="file-text" /><span>Estimates</span></Link>
                </li>
                
                <li className={`${'/invoices' === pathName || '/invoice-details' === pathName  || '/tax-settings' === pathName || '/invoice-paid' === pathName || '/invoice-overdue' === pathName || '/invoice-draft' === pathName || '/invoice-recurring' === pathName || '/invoice-cancelled' === pathName|| '/bank-settings' === pathName || '/invoices-settings' === pathName || '/invoice-grid' === pathName || '/add-invoice' === pathName || '/edit-invoice'
                === pathName ? 'active submenu' : 'submenu' }`}>          
                    <Link to="#" className={isSideMenu == "invoice" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="invoice" ? "": "invoice")}><FeatherIcon icon="clipboard" /> <span> Invoices</span><span className="menu-arrow"></span></Link>                               
                        { isSideMenu == "invoice" ? 
                            <ul>
                                <li className={`${'/invoices' === pathName ? 'active' : '' }`}><Link to="/invoices">Invoices List</Link></li>
                                <li className={`${'/invoice-grid' === pathName ? 'active' : '' }`}><Link to="/invoice-grid">Invoices Grid</Link></li>
                                <li className={`${'/add-invoice' === pathName ? 'active' : '' }`}><Link to="/add-invoice">Add Invoices</Link></li>
                                <li className={`${'/edit-invoice' === pathName ? 'active' : '' }`}><Link to="/edit-invoice">Edit Invoices</Link></li>
                                <li className={`${'/invoice-details' === pathName ? 'active' : '' }`}><Link to="/invoice-details">Invoices Details</Link></li>
                                <li className={`${'/invoices-settings' === pathName ? 'active' : '' }`}><Link to="/invoices-settings">Invoices Settings</Link></li>
                            </ul>
                            :"" 
                        }
                </li> 
                <li className={`${'/payments' === pathName || '/add-payments' === pathName ? 'active' : '' }`}>
                    <Link to="/payments"><FeatherIcon icon="credit-card" /> <span>Payments</span></Link>
                </li>
                <li className={`${'/expenses' === pathName || '/add-expenses' === pathName  || '/edit-expenses' === pathName  ? 'active' : '' }`}>
                    <Link to="/expenses"><FeatherIcon icon="package" /> <span>Expenses</span></Link>
                </li>
                <li className={`${'/sales-report' === pathName || '/expenses-report' === pathName || '/profit-loss-report' === pathName
                || '/taxs-report' === pathName ? 'active submenu' : 'submenu' }`}>          
                    <Link to="#" className={isSideMenu == "report" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="report" ? "": "report")}><FeatherIcon icon="pie-chart" /> <span> Reports</span><span className="menu-arrow"></span></Link>                               
                        { isSideMenu == "report" ? 
                            <ul>
                                <li className={`${'/sales-report' === pathName ? 'active' : '' }`}><Link to="/sales-report">Sales Report</Link></li>
                                <li className={`${'/expenses-report' === pathName ? 'active' : '' }`}><Link to="/expenses-report">Expenses Report</Link></li>
                                <li className={`${'/profit-loss-report' === pathName ? 'active' : '' }`}><Link to="/profit-loss-report">Profit &amp; Loss Report</Link></li>
                                <li className={`${'/taxs-report' === pathName ? 'active' : '' }`}><Link to="/taxs-report">Taxs Report</Link></li>
                            </ul>
                            :"" 
                        }
                </li>                            
                <li className={`${'/settings' === pathName || '/preferences' === pathName || '/tax-types' === pathName ||  '/expense-category' === pathName ||  '/notifications' === pathName ||  '/change-password' === pathName ||  '/delete-account' === pathName ? 'active' : '' }`}>
                    <Link to="/settings"><FeatherIcon icon="settings" /> <span>Settings</span></Link>
                </li>
                <li className={`${'/chat' === pathName || '/calendar' === pathName || '/inbox' === pathName ? 'active submenu' : 'submenu' }`}>                            
                    <Link to="#" className={isSideMenu == "application" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="application" ? "": "application")}><FeatherIcon icon="grid" /> <span> Application</span> <span className="menu-arrow"></span></Link>
                    {
                    isSideMenu ==  "application" ? 
                    <ul>
                            <li className={`${'/chat' === pathName ? 'active' : '' }`}><Link to="/chat">Chat</Link></li>
                            <li className={`${'/calendar' === pathName ? 'active' : '' }`}><Link to="/calendar">Calendar</Link></li>
                            <li className={`${'/inbox' === pathName ? 'active' : '' }`}><Link to="/inbox">Email</Link></li>
                        </ul> : ""
                    }
                    
                </li>
            </ul>
                :"" 
            }
            </li>
            <li className="submenu submenu-five nav-item dropdown">
            <Link to="#" className={ `dropdown-toggle ${level3Menu == "pages" ? "subdrop" : "" }`} onClick={()=> toggleLevelThree(level3Menu =="pages" ? "": "pages")}><FeatherIcon icon="file" />  <span>Pages </span><span className="menu-arrow"></span>
                
                </Link>
                { level3Menu == "pages" ? 
            <ul className="header-four dropdown-menu dropdown-menu-five dropdown-menu-right" style={{ display: level3Menu ? "block" : "none" }}>
                <li className={`${'/profile' === pathName ? 'active' : '' }`}> 
                    <Link to="/profile"><FeatherIcon icon="user-plus" /> <span>Profile</span></Link>
                </li>
                <li className={`${'/login' === pathName || '/register' === pathName || '/forgot-password' === pathName || '/lock-screen' === pathName ? 'active submenu' : 'submenu' }`}>
                    <Link to="#" className={isSideMenu == "authentication" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="authentication" ? "": "authentication")} ><FeatherIcon icon="lock" /> <span> Authentication </span> <span className="menu-arrow"></span></Link>
                    {
                    isSideMenu ==  "authentication" ? 
                    <ul>
                        <li className={`${'/login' === pathName ? 'active' : '' }`}><Link to="/login"> Login </Link></li>
                        <li className={`${'/register' === pathName ? 'active' : '' }`}><Link to="/register"> Register </Link></li>
                        <li className={`${'/forgot-password' === pathName ? 'active' : '' }`}><Link to="/forgot-password"> Forgot Password </Link></li>
                        <li className={`${'/lock-screen' === pathName ? 'active' : '' }`}><Link to="/lock-screen"> Lock Screen </Link></li>
                    </ul> : ""
                    }
                </li>
                <li className={`${'/error-404' === pathName || '/error-500' === pathName  ? 'active submenu' : 'submenu' }`}>
                    <Link to="#" className={isSideMenu == "errorPages" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="errorPages" ? "": "errorPages")}><FeatherIcon icon="alert-octagon" />  <span> Error Pages </span> <span className="menu-arrow"></span></Link>
                    {
                    isSideMenu ==  "errorPages" ? 
                    <ul>
                        <li className={`${'/error-404' === pathName ? 'active' : '' }`}><Link to="/error-404">404 Error </Link></li>
                        <li className={`${'/error-500' === pathName ? 'active' : '' }`}><Link to="/error-500">500 Error </Link></li>
                    </ul> : ""
                    }
                </li>
                <li className={`${'/users' === pathName ? 'active' : '' }`}> 
                    <Link to="/users"><FeatherIcon icon="users" /> <span>Users</span></Link>
                </li>
                <li className={`${'/blank-page' === pathName ? 'active' : '' }`}> 
                    <Link to="/blank-page"><FeatherIcon icon="file" /> <span>Blank Page</span></Link>
                </li>
                <li className={`${'/maps-vector' === pathName ? 'active' : '' }`}> 
                    <Link to="/maps-vector"><FeatherIcon icon="map-pin" /> <span>Vector Maps</span></Link>
                </li>
            </ul>
                :"" 
            }
            </li>
            <li className="submenu submenu-five nav-item dropdown">
            <Link to="#" className={ `dropdown-toggle ${level4Menu == "Interface" ? "subdrop" : "" }`} onClick={()=> toggleLevelfour(level4Menu =="Interface" ? "": "Interface")}><FeatherIcon icon="file" />  <span>UI Interface </span><span className="menu-arrow"></span>						
            </Link>
            { level4Menu == "Interface" ? 
            <ul className="header-four dropdown-menu dropdown-menu-five dropdown-menu-right" style={{ display: level4Menu ? "block" : "none" }}>
            
                <li className={`${'/components' === pathName ? 'active' : '' }`}> 
                    <Link to="/components"><FeatherIcon icon="layers" /> <span>Components</span></Link>
                </li>
                <li className={`${'/form-basic-inputs' === pathName || '/form-input-groups' === pathName || '/form-horizontal' === pathName || '/form-vertical' === pathName ||  '/form-mask' === pathName ||  '/form-validation' === pathName ? 'active submenu' : 'submenu' }`}>
                    <Link to="#" className={isSideMenu == "forms" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="forms" ? "": "forms")}><FeatherIcon icon="file-minus" /> <span> Forms </span> <span className="menu-arrow"></span></Link>
                    {
                    isSideMenu ==  "forms" ? 
                    <ul>
                        <li className={`${'/form-basic-inputs' === pathName ? 'active' : '' }`}><Link to="/form-basic-inputs">Basic Inputs </Link></li>
                        <li className={`${'/form-input-groups' === pathName ? 'active' : '' }`}><Link to="/form-input-groups">Input Groups </Link></li>
                        <li className={`${'/form-horizontal' === pathName ? 'active' : '' }`}><Link to="/form-horizontal">Horizontal Form </Link></li>
                        <li className={`${'/form-vertical' === pathName ? 'active' : '' }`}><Link to="/form-vertical"> Vertical Form </Link></li>
                        <li className={`${'/form-mask' === pathName ? 'active' : '' }`}><Link to="/form-mask"> Form Mask </Link></li>
                        <li className={`${'/form-validation' === pathName ? 'active' : '' }`}><Link to="/form-validation"> Form Validation </Link></li>
                    </ul> :""
                    }
                </li>
                <li className={`${'/tables-basic' === pathName || '/data-tables' === pathName ? 'active submenu' : 'submenu' }`}>
                    <Link to="#" className={isSideMenu == "tables" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="tables" ? "": "tables")}><FeatherIcon icon="layout" />  <span> Tables </span> <span className="menu-arrow"></span></Link>
                    {
                    isSideMenu ==  "tables" ?
                    <ul>
                        <li className={`${'/tables-basic' === pathName ? 'active' : '' }`}><Link to="/tables-basic">Basic Tables </Link></li>
                        <li className={`${'/data-tables' === pathName ? 'active' : '' }`}><Link to="/data-tables">Data Table </Link></li>
                    </ul> :""
                    }
                </li>
                
            </ul>
            :"" 
        }
            </li>
        </ul>
        </div>
        </div>
        {/* /Header Menu List */}	

        </>
            
       
        );
    
}
export default withRouter(Sidebarmenu);