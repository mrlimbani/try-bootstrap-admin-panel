import React from 'react'
import { Dropdown, Tabs, Tab } from 'react-bootstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';


function Dashboard() {

    const toggleProBanner = () => {
        document.querySelector('.proBanner').classList.toggle("hide");
    }

    return (
        <div>
            <div className="row proBanner">
                <div className="col-12">
                    <span className="d-flex align-items-center purchase-popup">
                        <p>Connect with Akash Limbani. Build your own UI with Akash</p>
                        <a href="https://www.linkedin.com/in/akash-limbani/" rel="noopener noreferrer" target="_blank" className="btn purchase-button ml-auto">Contact</a>
                        <i className="mdi mdi-close bannerClose" onClick={toggleProBanner}></i>
                    </span>
                </div>
            </div>
            <div>
                <div className="d-sm-flex justify-content-between align-items-start">
                    <h2 className="text-dark font-weight-bold mb-2"> Overview dashboard </h2>
                    <div className="d-sm-flex justify-content-xl-between align-items-center mb-2">
                        <div className="btn-group d-none d-xl-flex bg-white p-3" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-link text-light py-0 font-weight-medium border-right">7 Days</button>
                            <button type="button" className="btn btn-link text-dark py-0 font-weight-medium border-right">1 Month</button>
                            <button type="button" className="btn btn-link text-light font-weight-medium py-0">3 Month</button>
                        </div>
                        <div className="dropdown ml-0 ml-md-4 mt-2 mt-lg-0">
                            <Dropdown alignRight>
                                <Dropdown.Toggle className="bg-white dropdown-toggle border-0 p-3 mr-0 text-muted d-flex align-items-center">
                                    <i className="mdi mdi-calendar mr-1"></i>24 Mar 2022 - 24 Mar 2022
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>24 Mar 2022 - 24 Mar 2022</Dropdown.Item>
                                    <Dropdown.Item>24 April 2022 - 24 May 2022</Dropdown.Item>
                                    <Dropdown.Item>24 May 2022 - 24 Jun 2022</Dropdown.Item>
                                    <Dropdown.Divider></Dropdown.Divider>
                                    <Dropdown.Item>24 Jun 2022 - 24 July 2022</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="justify-content-between align-items-center tab-transparent">
                            <Tabs defaultActiveKey="Business" className="nav">
                                <Tab eventKey="Users" title="Users" className="test-tab" disabled>
                                    <p>1</p>
                                </Tab>
                                <Tab eventKey="Business" title="Business">
                                    <div>
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <h5 className="mb-2 text-dark font-weight-normal">Orders</h5>
                                                        <h2 className="mb-4 text-dark font-weight-bold">932.00</h2>
                                                        <div className="px-4 d-flex align-items-center">
                                                            <svg width="0" height="0">
                                                                <defs>
                                                                    <linearGradient id="progress-order">
                                                                        <stop offset="0%" stopColor="#1579ff" />
                                                                        <stop offset="100%" stopColor="#7922e5" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                            <CircularProgressbarWithChildren className="progress-order"
                                                                value={70}>
                                                                <div>
                                                                    <i className="mdi mdi-lightbulb icon-md absolute-center text-dark"></i>
                                                                </div>
                                                            </CircularProgressbarWithChildren>
                                                        </div>
                                                        <p className="mt-4 mb-0">Completed</p>
                                                        <h3 className="mb-0 font-weight-bold mt-2 text-dark">5443</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <h5 className="mb-2 text-dark font-weight-normal">Unique Visitors</h5>
                                                        <h2 className="mb-4 text-dark font-weight-bold">756,00</h2>
                                                        <div className="px-4 d-flex align-items-center">
                                                            <svg width="0" height="0">
                                                                <defs>
                                                                    <linearGradient id="progress-visitors" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                        <stop offset="0%" stopColor="#b4ec51" />
                                                                        <stop offset="100%" stopColor="#429321" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                            <CircularProgressbarWithChildren className="progress-visitors"
                                                                value={60}>
                                                                <div>
                                                                    <i className="mdi mdi-account-circle icon-md absolute-center text-dark"></i>
                                                                </div>
                                                            </CircularProgressbarWithChildren>
                                                        </div>
                                                        <p className="mt-4 mb-0">Increased since yesterday</p>
                                                        <h3 className="mb-0 font-weight-bold mt-2 text-dark">50%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3  col-lg-6 col-sm-6 grid-margin stretch-card">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <h5 className="mb-2 text-dark font-weight-normal">Impressions</h5>
                                                        <h2 className="mb-4 text-dark font-weight-bold">100,38</h2>
                                                        <div className="px-4 d-flex align-items-center">
                                                            <svg width="0" height="0">
                                                                <defs>
                                                                    <linearGradient id="progress-impressions" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                        <stop offset="0%" stopColor="#fad961" />
                                                                        <stop offset="100%" stopColor="#f76b1c" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                            <CircularProgressbarWithChildren className="progress-impressions"
                                                                value={90}>
                                                                <div>
                                                                    <i className="mdi mdi-eye icon-md absolute-center text-dark"></i>
                                                                </div>
                                                            </CircularProgressbarWithChildren>
                                                        </div>
                                                        <p className="mt-4 mb-0">Increased since yesterday</p>
                                                        <h3 className="mb-0 font-weight-bold mt-2 text-dark">35%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <h5 className="mb-2 text-dark font-weight-normal">Followers</h5>
                                                        <h2 className="mb-4 text-dark font-weight-bold">4250k</h2>
                                                        <div className="px-4 d-flex align-items-center">
                                                            <svg width="0" height="0">
                                                                <defs>
                                                                    <linearGradient id="progress-followers" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                        <stop offset="0%" stopColor="#f5515f" />
                                                                        <stop offset="100%" stopColor="#9f041b" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                            <CircularProgressbarWithChildren className="progress-followers"
                                                                value={45}>
                                                                <div>
                                                                    <i className="mdi mdi-eye icon-md absolute-center text-dark"></i>
                                                                </div>
                                                            </CircularProgressbarWithChildren>
                                                        </div>
                                                        <p className="mt-4 mb-0">Decreased since yesterday</p>
                                                        <h3 className="mb-0 font-weight-bold mt-2 text-dark">25%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Performance" title="Performance" disabled>
                                    <p>3</p>
                                </Tab>
                                <Tab eventKey="Conversion" title="Conversion" disabled>
                                    <p>4</p>
                                </Tab>

                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard