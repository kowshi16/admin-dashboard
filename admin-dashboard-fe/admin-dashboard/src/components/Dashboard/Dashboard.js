import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "../../common/common.css";
import DashboardBarchart from "../../common/components/BarChart/DashboardBarchart";
import Paper from "@mui/material/Paper";
import "./Dashboard.css";
import DashboardPiechart from "../../common/components/PieChart/DashboardPiechart";

function Dashboard() {
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
            <a className="nav-link" href="/reservation">
              <i className="far fa-fw fa-window-maximize"></i>
              <span>Reservation</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/events">
              <i className="fab fa-fw fa-wpforms"></i>
              <span>Events</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/client">
              <i className="fas fa-fw fa-table"></i>
              <span>Clients</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin">
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

              <div className="row mb-3">
                {/* Tab  1 */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-uppercase mb-1">
                            Earnings (Monthly)
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            $40,000
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-calendar fa-2x text-primary"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab 2 */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-uppercase mb-1">
                            No. of Bookings (Monthly)
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            100
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-shopping-cart fa-2x text-success"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab 3 */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-uppercase mb-1">
                            New Clients
                          </div>
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                            50
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-users fa-2x text-info"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab 4 */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-uppercase mb-1">
                            Pending Requests
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            18
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-comments fa-2x text-warning"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bar chart */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card mb-5">
                      <div className="card-body">
                        <div className="chart-area">
                          <DashboardBarchart />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pie chart */}
                <div className="col-lg-6">
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <DashboardPiechart />
                    </div>
                  </div>
                </div>
              </div>

              {/* <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 500,
                    height: 300,
                  },
                }}
              >
                <Paper elevation={3}>
                  <DashboardPiechart />
                </Paper>
              </Box> */}
            </div>
          </div>
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </>
    // <Box>
    //   <Header />
    //   <Sidebar />
    //   <Reservation />
    // </Box>
  );
}

export default Dashboard;
