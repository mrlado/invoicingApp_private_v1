import React, {useState,useEffect, useContext} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  BrowserRouter,
  Switch
} from "react-router-dom";
import Login from "./Authentication/Login";
import Dashboard from './Dashboard/Dashboard';
import Customers from './customers/Customers'
import AddCustomer from './customers/AddCustomer'
import EditCustomer from './customers/EditCustomer'

import Invoices from './invoices/Index';
import Invoicedetails from './invoices/Invoicedetails';
import Invoicesettings from './invoices/Invoicesettings';
import Taxsettings from './invoices/Taxsettings';
import Invoicerecurring from './invoices/Invoicerecurring';
import Invoicecancelled from './invoices/Invoicecancelled';
import Invoicepaid from './invoices/Invoicepaid';
import Invoiceoverdue from './invoices/Invoiceoverdue';
import Banksettings from './invoices/Banksettings';
import ViewInvoice from './invoices/ViewInvoice';
import AddInvoice from './invoices/AddInvoice';
import EditInvoice from './invoices/EditInvoice';
import Invoicedraft from './invoices/Invoicedraft';
import Payments from './payments/Index';
import AddPayments from './payments/AddPayments';
import ProfileSettings from './settings/Profile';
import Preferences from './settings/Preferences';
import TaxTypes from './settings/TaxTypes';
import ExpenseCategory from './settings/ExpenseCategory';
import Notifications from './settings/Notifications';
import ChangePassword from './settings/ChangePassword';
import DeleteAccount from './settings/DeleteAccount';
import Profile from './profile/Index';

import Page404 from './errorpages/404';
import Page500 from './errorpages/500';
import Users from './users/Index';
import BasicInputs from './forms/BasicInputs';
import FormInputGroups from './forms/FormInputGroups';
import FormMask from './forms/FormMask';
import FormValidation from './forms/FormValidation';
import VectorMaps from './vectormaps/Index';
import BasicTables from './tables/BasicTables';
import DataTables from './tables/DataTables';
import SalesReport from './reports/salesreport';
import ExpenseReport from './reports/expense';
import ProfitlossReport from './reports/profitloss';
import Taxreport from './reports/taxreport';
import {AuthContext} from './Context/Authentication'

const AppContainer =  (props) => {

  const {islogin, setisLogin} = useContext(AuthContext)
          console.log(islogin)
    return (                          
            <BrowserRouter >
              <Routes>                                
              <Route path="/" element={islogin ? <Dashboard/> : <Login/>} />           
              <Route path="/customers" element={<Customers/>} />
              <Route path="/add-customer" element={<AddCustomer/>} />
              <Route path="/edit-customer" element={<EditCustomer/>} />
              <Route path="/invoices" element={<Invoices/>} />
              <Route path="/invoice-details" element={<Invoicedetails/>} />
              <Route path="/view-invoice" element={<ViewInvoice/>} />
              <Route path="/add-invoice" element={<AddInvoice/>} />
              <Route path="/edit-invoice" element={<EditInvoice/>} />
              <Route path="/tax-settings" element={<Taxsettings/>} /> 
              <Route path="/invoice-paid" element={<Invoicepaid/>} /> 
              <Route path="/invoice-overdue" element={<Invoiceoverdue/>} />                           
              <Route path="/bank-settings" element={<Banksettings/>} />              
              <Route path="/invoices-settings" component={<Invoicesettings/>} />
              <Route path="/invoice-draft" element={<Invoicedraft/>} /> 
              <Route path="/invoice-recurring" element={<Invoicerecurring/>} />  
              <Route path="/invoice-cancelled" element={<Invoicecancelled/>} />                  
              <Route path="/payments" element={<Payments/>} />
              <Route path="/add-payments" element={<AddPayments/>} />
              <Route path="/settings" element={<ProfileSettings/>} />
              <Route path="/sales-report" element={<SalesReport/>} />
              <Route path="/expenses-report" element={<ExpenseReport/>} />
              <Route path="/profit-loss-report" element={<ProfitlossReport/>} />
              <Route path="/taxs-report" element={<Taxreport/>} />
              <Route path="/preferences" element={<Preferences/>} />
              <Route path="/tax-types" element={<TaxTypes/>} />
              <Route path="/expense-category" element={<ExpenseCategory/>} />
              <Route path="/notifications" element={<Notifications/>} />
              <Route path="/change-password" element={<ChangePassword/>} />
              <Route path="/delete-account" element={<DeleteAccount/>} />

              <Route path="/profile" element={<Profile/>} />              
              <Route path="/error-404" element={<Page404/>} />
              <Route path="/error-500" element={<Page500/>} />
              <Route path="/users" element={<Users/>} />
              <Route path="/form-basic-inputs" element={<BasicInputs/>} />
              <Route path="/form-input-groups" element={<FormInputGroups/>} />
              <Route path="/form-mask" element={<FormMask/>} />
              <Route path="/form-validation" element={<FormValidation/>} />
              <Route path="/maps-vector" element={<VectorMaps/>} />
              <Route path="/tables-basic" element={<BasicTables/>} />
              <Route path="/data-tables" element={<DataTables/>} />
              {/* <Route path="/register" element={<Register/>} /> */}
              {/* <Route path="/forgot-password" element={<ForgotPassword/>} /> */}
              </Routes>
            </BrowserRouter>
    );
};

export default AppContainer;
