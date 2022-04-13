import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { Form } from 'react-bootstrap'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { Col } from 'react-bootstrap';
// import { toast, ToastContainer } from 'react-toastify';


const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username must required !!'),
    password: Yup.string()
        .required('password is must required !!')
})


const Login = () => {

    const History = useHistory();

    // const notify = () => toast("Login Successfully.!!");

    return (
        <React.Fragment>

            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel" style={{ width: "100%" }}>
                        <div className="content-wrapper">
                            <div>
                                <div className="d-flex align-items-center auth px-0">
                                    <div className="row w-100 mx-0">
                                        <div className="col-lg-4 mx-auto">
                                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                                <div className="brand-logo">
                                                    <img src={require("../../assets/images/logo.png")} alt="logo" />
                                                </div>
                                                <h3 className='text-secondary'>Hello! let's get started</h3>
                                                <h5 className="text-secondary">Sign in to continue.</h5>

                                                <Formik
                                                    initialValues={{ username: '', password: '' }}

                                                    validationSchema={validationSchema}

                                                    onSubmit={(values, { setSubmitting }) => {
                                                        setSubmitting(false);
                                                        History.push('/dashboard');
                                                    }}
                                                >
                                                    {({ touched, errors, isSubmitting }) => (
                                                        <Form>
                                                            <div className='Container'>
                                                                <div className='row'>
                                                                    <div className='form-group'>
                                                                        <Field
                                                                            className='form-control mt-3'
                                                                            style={{ width: '502px' }}
                                                                            type='email'
                                                                            name='username'
                                                                            placeholder='Enter Username '
                                                                        />
                                                                        {errors.password && touched.password ? (
                                                                            <div style={{ color: 'rgb(220,37,43)' }}>{errors.username}</div>
                                                                        ) : null}
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='form-group mt-1'>
                                                                        <Field
                                                                            style={{ width: '502px' }}
                                                                            className='form-control'
                                                                            type='password'
                                                                            name='password'
                                                                            placeholder='Enter password'
                                                                        />
                                                                        {errors.password && touched.password ? (
                                                                            <div style={{ color: 'rgb(220,37,43)' }}>{errors.password} </div>
                                                                        ) : null}
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    // onClick={notify}
                                                                    type='submit'
                                                                    className='btn btn-block btn-primary btn-sm font-weight-medium auth-form-btn'
                                                                    disabled={isSubmitting}
                                                                >
                                                                    SIGN IN
                                                                </button>
                                                                {/* <ToastContainer /> */}

                                                                <div className='my-2 d-flex justify-content-between align-items-center'>
                                                                    <div className='form-check'>
                                                                        <label className='form-check-label text-muted'>
                                                                            <input type='checkbox' className='form-check-input' />
                                                                            <i className='input-helper'></i>
                                                                            Keep me signed in
                                                                        </label>
                                                                    </div>
                                                                    {/* <a href='/' onClick={event => event.preventDefault()} className='auth-link text-black'>Forgot password?</a> */}
                                                                    <Link to='/forgotpass'> forgot password ? </Link>
                                                                </div>
                                                                <div className='mb-3 mt-3'>
                                                                    <button type='button' className='btn btn-block btn-facebook auth-form-btn'>
                                                                        <i className='mdi mdi-facebook mr-2'></i>login with using facebook
                                                                    </button>
                                                                </div>

                                                                <div className='mb-2'>
                                                                    <button
                                                                        type='button'
                                                                        className='btn btn-block btn-google auth-form-btn'>
                                                                        <i className='mdi mdi-google mr-2'></i> login with google
                                                                    </button>

                                                                </div>


                                                                <div className='container'>
                                                                    <div className='row'>
                                                                        <Col className='text-center mt-3'>
                                                                            Don't have any account ..? <Link to='/register'> Create </Link>
                                                                        </Col>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Form>
                                                    )}
                                                </Formik>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;