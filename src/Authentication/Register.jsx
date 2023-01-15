import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import {Logo} from "../_components/imagepath"
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import  { alphaNumericPattern, emailrgx } from '../assets/constant'
import axios from 'axios';
import {v4 as uuidv4} from "uuid"
import { date } from 'yup/lib/locale';



const Register = (props) => {

	const[eye,seteye]=useState(true);
    const [emailerror,setEmailError] = useState("");
	const [nameerror,setNameError] = useState("");
    const [passworderror,setPasswordError] = useState("");
    const [formgroup,setFormGroup] = useState("");
    const [inputValues,setInputValues] = useState({
		name: '',
    	email:"",

    });


    
  const  onSubmit = (e) => {
	e.preventDefault()
	try{
		axios.post("https://ec2-13-53-205-89.eu-north-1.compute.amazonaws.com/api/v1/",inputValues)

	}catch (e){
		setPasswordError('password', {
			message: 'password is mismatch',
		  })
	}

}
const onEyeClick = () =>{
	seteye(!eye)
}
 
 console.log(inputValues)
  
        return (
			<div className="main-wrapper  login-body">
		<div className="login-wrapper">
				<div className="container">
					<img className="img-fluid logo-dark mb-2" src={Logo} alt="Logo" />
					
					<div className="loginbox">
						<div className="login-right">
							<div className="login-right-wrap">
								<h1>Register</h1>
								<p className="account-subtitle">Access to our dashboard</p>
								
								{/* Form */}
								<form onSubmit={onSubmit}>
								<div className="form-group input_text">
									<label className="form-control-label">Name</label>
													<input   className={`form-control`} 
													type="text" name='name' value={inputValues.name} onChange={e =>setInputValues(prev => ({...prev,name:e.target.value}))} autoComplete="false"  />

							
									{/* <small>{errors?.name?.message}</small> */}
                				</div>
								<div className="form-group input_text">
									<label className="form-control-label">Email Address</label>
													<input   className={`form-control `} type="text" value={inputValues.email} name="email" onChange={e =>setInputValues(prev => ({...prev,email:e.target.value}))} autoComplete="false"  />

											
									{/* <small>{errors?.email?.message}</small> */}
								</div>
								<div className="form-group input_text">
									<label className="form-control-label">Password</label>
											<div className="pass-group">
												<input  type={eye ? "password" : "text"}  className={`form-control `}  value={inputValues.password} name="password" onChange={e =>setInputValues(prev => ({...prev,password:e.target.value}))} autoComplete="false"  />
												<span onClick={onEyeClick} className={`fa toggle-password" ${eye ? "fa-eye-slash" : "fa-eye" }`}/>
											</div>

											
									{/* <small>{errors?.password?.message}</small> */}
							
									</div>  																		
									<div className="form-group">
										<label className="form-control-label">Confirm Password</label>

												<input   className={`form-control  `} type="text" value={inputValues.passwordConfirm} name="passwordConfirm"onChange={e =>setInputValues(prev => ({...prev,passwordConfirm:e.target.value}))} autoComplete="false"  />

				
									{/* <small>{errors?.confirmPassword?.message}</small> */}
										
									</div>
									<button
										className="btn btn-lg btn-block w-100 btn-primary w-100"
										type="submit" 
										>
										Register
									</button>									
								</form>
								{/* /Form */}
								
								<div className="login-or">
									<span className="or-line"></span>
									<span className="span-or">or</span>
								</div>
								{/* Social Login */}
								<div className="social-login">
									<span>Register with</span>
									<a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a><a href="#" className="google"><i className="fab fa-google"></i></a>
								</div>
								{/* /Social Login */}
								<div className="text-center dont-have">Already have an account? <Link to="/">Login</Link></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
		</div>

        );
    
}
export default Register;