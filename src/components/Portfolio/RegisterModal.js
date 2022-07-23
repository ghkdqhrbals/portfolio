import React from 'react'
import Modal from './Modal'

const RegisterModal = ({ openRegisterModal, setOpenRegisterModal, id }) => {
    return (
        <div>
            <Modal open={openRegisterModal}>
                <div className="d-flex justify-content-center">
                    <div>
                        <h4 className="head"> eCommerce</h4>
                        <h6 className="sub-heading">Create an account to list your own product</h6>
                    </div>
                    <div>
                        <h2 style={{ position: 'absolute', right: '2em' }}>
                            <button className="close" onClick={() => setOpenRegisterModal(false)}>x</button>
                        </h2>
                    </div>
                </div>
                <hr />
                <div className="form-group mb-2">
                    <label htmlFor="" className="mb-2">Full Name <span>*</span></label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="mb-2">Email Address <span>*</span></label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="mb-2">Country <span>*</span></label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="mb-2">Phone <span>*</span></label>
                    <input type="text" className="form-control" />
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <label htmlFor="" className="mb-2">Username <span>*</span></label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <div style={{ marginBottom: '.5em' }}>Gender</div>
                        <div className="d-flex">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Male
                                        </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Female
                                        </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="" className="mb-2">Password <span>*</span></label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="" className="mb-2">Contact Info <span>*</span></label>
                    <div className="contact-info">
                        <div className="info-items">
                            <button className="remove">x</button>

                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="" className="mb-2">Phone Number <span>*</span></label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="" className="mb-2">Address <span>*</span></label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary w-100">Create Account</button>
                </div>
                <div className="d-flex justify-content-center">
                    <div style={{ fontSize: '1em' }}>
                        <div className="d-flex">
                            <div>
                                Already have an account?
                                    </div>
                            <div className="login" style={{ color: "#0d6efd" }} onClick={() => setOpenRegisterModal(false)}>Login</div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default RegisterModal
