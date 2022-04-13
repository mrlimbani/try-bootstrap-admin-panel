import React, { Component } from 'react'

import NavbarComponent from '../pages/navbarComponent';
import Sidebar from '../pages/sidebarComponent';
import SettingsPanel from '../pages/SettingsPanel';
import Footer from '../pages/Footer';
import Dashboard1 from './../admin/Dashboard';

class Dashboard extends Component {
    render() {
        return (
            <div className="container-scroller">
                <NavbarComponent />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <Dashboard1 />
                            <SettingsPanel />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;