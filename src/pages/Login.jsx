import React from 'react'

function Login() {
    return (
        <div>
            <div className="acelot-signupform">
                <div className="card custom-card mb-0">
                    <div className="card-body m-0">
                        <div className="mb-3 d-flex justify-content-center">
                            <a href="/">
                                <img src="https://cdn.acelotlms.in/uploads/system/149/uat/9626f2981b424d392f04d143acb81767light-logo.png" alt="Ppt" className="desktop-logo" /> 
                            </a>
                        </div>
                        <h4 className="mb-3 text-center"> Sign in to your <span className="fs-20 text-uppercase text-primary">Ppt</span> account                            </h4>
                        <div className="row ">
                            <form className="input-left-border form-ak">
                                <div className="col-xl-12">
                                    <h6 className="warning" style="color:orangered;" id="msglogin"></h6>
                                </div>
                                <div className="col-xl-12" id="uname">
                                    <input type="text" name="email" className="form-control form-control-lg" id="signin-username" placeholder="" />
                                        <label for="signin-username" className="form-label text-default"> Email / Mobile No / Employee code                                            <span className="red-color">*</span></label>
                                        <label id="name-error" className="error d-none" for="name">Please enter user name                                        </label>
                                </div>

                                <div className="col-xl-12 my-3">
                                    <div className="input-group">
                                        <input type="password" name="password
                                        " className="form-control form-control-lg" id="signin-password" placeholder="" />
                                            <label for="signin-password" className="form-label text-default d-block">Password                                                <span className="red-color">*</span></label>
                                            <button className="btn btn-light" type="button" onclick="createpassword('signin-password',this)" id="button-addon2"><i className="ri-eye-off-line align-middle"></i></button>
                                    </div>
                                    <label id="name-error" className="error  d-none" for="name"> Please enter password</label>
                                    <div className="col-xl-12 otpclassName" style="display: none;">
                                        <label className="mt-2 text-muted">Your OTP has been sent to Registered Phone Number.
                                        </label>
                                        <input placeholder="6 Digit OTP" id="otp_id" name="mobile_otp" type="text" className="form-control form-control-lg" />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">

                                    <a href="https://ppt.acelotlms.in/login/reset" className="float-end text-primary">
                                        Forgot password                                            ?</a>

                                    <div className="mt-2" id="loginUser">
                                        <a href="javascript:void(0);" onclick="loginUser();" className="btn btn-lg btn-primary fw-bold Disable">Sign In <i className="bx bx-chevrons-right"></i></a>
                                    </div>
                                    <div className="mt-2" id="loadbtn" style="display: none !important;">
                                        <button className="btn btn-primary btn-loader w-100">
                                            <span className="me-2">Loading</span>
                                            <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
                                        </button>
                                    </div>
                                    <div className="mt-2" id="verify_otp" style="display :none !important;">
                                        <a href="javascript:;" onclick="verify_otp();" className="btn btn-lg btn-primary fw-bold Disable">Sign In<i className="bx bx-chevrons-right"></i></a>

                                    </div>
                                </div>

                            </form>
                            <div className="striped">
                                <span className="striped-line"></span>
                                <span className="striped-text">OR continue with</span>
                                <span className="striped-line"></span>
                            </div>
                            <div className="method" style="display: flex; flex-direction: row; gap: 10px; align-items: center; justify-content:center">
                                <div className="method-control">
                                    <a href="https://ppt.acelotlms.in/social_login/by/google" className="method-action">
                                        <img src="https://acelot-common-bucket.s3.ap-south-1.amazonaws.com/google.svg" alt="" style="width:25px" />

                                    </a>
                                </div>
                                <div className="method-control">
                                    <a href="https://ppt.acelotlms.in/social_login/by/facebook" className="method-action">
                                        <img src="https://acelot-common-bucket.s3.ap-south-1.amazonaws.com/facebook.svg" alt="" style="width:25px" />

                                    </a>
                                </div>

                            </div>
                            <div className="d-flex justify-content-center align-item-center mt-2">
                                <p className="text text-normal mb-0">Dont have an account yet ?                                            <span>
                                    <a href="https://ppt.acelotlms.in/login/signup" className="text text-links text-primary">Create an account</a>
                                </span>
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="text-center d-none">
                        <p className="text-muted fs-9 p-1 mb-0" style="line-height: 12px;">This application ‘AcelotLMS’ is available only for authorized users. If you are not an authorized user, please disconnect the session by closing the browser immediately. By accessing this system, you agree that your actions may be monitored if unauthorised usage is suspected.</p>
                        <p className="b mt-2 mb-0">Copyright © <script type="text/javascript">
                            var year = new Date();
                            document.write(year.getFullYear());
                        </script>2025
                            Acelot Innovation Private Limited </p>
                        <ul className="d-inline-flex mb-0">
                            <li><a className="blue text-primary me-4" target="_blank" href="https://acelotlms.com/terms-and-condition/">Terms and conditions</a> </li>
                            <li><a className="blue text-primary" target="_blank" href="https://acelotlms.com/privacy-policy/">Privacy Policy</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login