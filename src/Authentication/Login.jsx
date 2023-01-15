import React, {useContext, useState} from 'react';
import {Logo} from "../_components/imagepath"
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import  { emailrgx } from '../assets/constant'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {AuthContext} from '../Context/Authentication'
import  DatabaseDetails, {auth, db , colRef, storage} from '../Database'
import { Link } from 'react-router-dom';

const schema = yup
  .object({
  
    email: yup
      .string()
      .matches(emailrgx, 'Email is required')
      .required('Email is required')
      .trim(),
	  password: yup.string() .min(6)
    .max(6) .required ('Password is required')
    .trim(),
  })
  

  
const Login = (props) => {
  const {CurrentUser, setCurrentUser, setIslogin} = useContext(AuthContext)
	  const[eye,seteye]=useState(true);
    const [emailerror,setEmailError] = useState("");
	  const [nameerror,setNameError] = useState("");
    const [passworderror,setPasswordError] = useState("");
    const [formgroup,setFormGroup] = useState("");
    const [loginemail, setloginEmail] = useState('');
    const [Loginpassword, setLoginPassword] = useState('')

	const {
		handleSubmit,
		control,
    setError,
    clearErrors,
		formState: { errors },
	  } = useForm({
		resolver: yupResolver(schema),
	  })
    
  const  onSubmit = (e,data) => {
	 if(CurrentUser.name === Loginpassword && CurrentUser.email === loginemail){
    setIslogin(true)
    window.localStorage.setItem("logedIn",true)
   }
   else {
    setError('password', {
      message: 'password is mismatch',
    })
   }


  }

const onEyeClick = () =>{
	seteye(!eye)
}
        
        
return (
   <>
         
  <div className="main-wrapper login-body">
    <div className="login-wrapper">
      <div className="container">
        <img
          className="img-fluid logo-dark mb-2"
          src={Logo}
          alt="Logo"
        />
        <div className="loginbox">
          <div className="login-right">
            <div className="login-right-wrap">
              <h1>Login</h1>
              <p className="account-subtitle">Access to our dashboard</p>
              <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                             
              <div className="form-group input_text">
                  <label className="form-control-label">Email Address</label>
                  <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input   className={`form-control  ${errors?.email ? "error-input" : "" }`} type="text" value={loginemail} onChange={(e) =>{setloginEmail(e.target.value)}} autoComplete="false"  />

                      )}
                      defaultValue="admin@dreamguys.co.in"
										/>
											
									<small>{errors?.email?.message}</small>
                </div>
                <div className="form-group input_text">
                  <label className="form-control-label">Password</label>
                  <Controller
                      name="password"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <div className="pass-group">
                          <input  type={eye ? "password" : "text"}  className={`form-control  ${errors?.password? "error-input" : "" }`}  value={Loginpassword} onChange={(e) =>{setLoginPassword(e.target.value)}} autoComplete="false"  />
                          <span onClick={onEyeClick} className={`fa toggle-password" ${eye ? "fa-eye-slash" : "fa-eye" }`}/>
                        </div>
                      )}
                      defaultValue="123456"
                      />
											
									<small>{errors?.password?.message}</small>
                </div>                
                <div className="form-group">
                  <div className="row">
                    <div className="col-6">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="cb1"
                        />
                        <label className="custom-control-label ms-1" htmlFor="cb1">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                    <a className="forgot-link" href="/forgot-password"> Forgot Password ? </a>
                    </div>
                  </div>
                </div>             
                <button
                  className="btn btn-lg btn-block w-100 btn-primary w-100"
                  type="submit" 
                >
                  Login
                </button>
                </form>
                <div className="login-or">
                  <span className="or-line" />
                  <span className="span-or">or</span>
                </div>
                {/* Social Login */}
                <div className="social-login mb-3">
                  <span>Login with</span>
                  <a href="#" className="facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="google">
                    <i className="fab fa-google" />
                  </a>
                </div>
                {/* /Social Login */}
                <div className="text-center dont-have">
                  Don't have an account yet?{" "}
                  <Link to="/register">Register</Link>
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
export default Login;
