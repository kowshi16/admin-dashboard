import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import './Sidebar-Header.css';

export default function SidebarHeader(){

  return (
        <>
          <div id="wrapper">
        <ul
          className="navbar-nav sidebar sidebar-light accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href=""
          >
            <div className="sidebar-brand-icon">
              <img src="" />
            </div>
            <div className="sidebar-brand-text mx-3">Express Hair Salon</div>
          </a>

          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <a className="nav-link" href="/dashboard">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span className="active-heading">Dashboard</span>
            </a>
          </li>
          <hr className="sidebar-divider" />
          <div className="sidebar-heading">FEATURES</div>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="far fa-fw fa-window-maximize"></i>
              <span>Reservation</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="fab fa-fw fa-wpforms"></i>
              <span>Events</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="fas fa-fw fa-table"></i>
              <span>Clients</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="fas fa-fw fa-palette"></i>
              <span>Admin</span>
            </a>
          </li>
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
              <button
                id="sidebarToggleTop"
                className="btn btn-link rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>
            </nav>

            <div className="container-fluid" id="container-wrapper">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            </div>
          </div>
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
        </>
      );
}