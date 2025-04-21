import React from 'react';
import { Container, Form, Button, Card, Image, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import googleImage from '../assets/images/google.svg'
import facebookImage from '../assets/images/facebook.svg'

function Login() {



    return (
        <>
            <section className='from_login'>
                <Container className="d-flex  justify-content-center ">
                    <Card className="main-form-bx p-4 shadow w-100" style={{ maxWidth: '500px' }}>
                        <Card.Body>
                            <h4 className="text-center blue mb-4">
                                Sign in
                            </h4>
                            <div className='d-flex gap-2 align-items-center justify-content-center mb-3'>
                                <Link to={'/'} className='lh-1'>
                                    <i className='bx bx-edit fs-4 text-info'></i>
                                </Link>
                                <p className='fw-600 mb-0'>Instance 3</p>
                            </div>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Email / Mobile No / Employee Code <span className="text-danger">*</span>
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Email / Mobile No / Employee Code" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Password <span className="text-danger">*</span>
                                    </Form.Label>
                                    <div className="d-flex">
                                        <Form.Control type="password" placeholder="Enter Your Password" />
                                    </div>

                                </Form.Group>

                                <div className="mb-3" style={{ display: 'none' }}>
                                    <Form.Label className="text-muted">Your OTP has been sent to Registered Phone Number.</Form.Label>
                                    <Form.Control type="text" placeholder="6 Digit OTP" />
                                </div>

                                <div className="d-flex justify-content-end mb-3">
                                    <Link to="" className="text-primary text-decoration-none blue fw-600 text-end">
                                        Forgot password?
                                    </Link>
                                </div>

                                <Button className="w-100 btn_four mb-2 rounded-pill">
                                    Sign In
                                </Button>

                                <div style={{ display: 'none' }}>
                                    <Button className="w-100 fw-bold" >
                                        Verify OTP <i className="bx bx-chevrons-right"></i>
                                    </Button>
                                </div>

                                <div className="text-center my-3">
                                    <div className="d-flex align-items-center">
                                        <hr className="flex-grow-1" />
                                        <span className="px-2">Or continue with</span>
                                        <hr className="flex-grow-1" />
                                    </div>
                                </div>

                                <div className="social_login d-flex justify-content-center gap-3 mb-3">
                                    <Link to=''>
                                        <Image
                                            src={googleImage}
                                            alt="Google"
                                            style={{ width: '30px' }}
                                        />
                                    </Link>
                                    <Link to=''>
                                        <Image
                                            src={facebookImage}
                                            alt="Facebook"
                                            style={{ width: '30px' }}
                                        />
                                    </Link>
                                </div>
                                <p className="text-center text-muted">
                                    Don’t have an account yet?{' '}
                                    <Link to="/login/signup" className="text-primary text-decoration-none blue fw-600">
                                        Create an account
                                    </Link>
                                </p>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
        </>
    );
}

export default Login;
