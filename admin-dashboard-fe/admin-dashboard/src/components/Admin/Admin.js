import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../../common/common.css";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AdminTable from "../../common/components/Tables/AdminTable";
import emailjs from "emailjs-com";

const Admin = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const form = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    console.log(email);
    emailjs
      .sendForm(
        "service_1bdx64m",
        "template_jzry1ui",
        form.current,
        "nUK50uZ1kc7Hjlash"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

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
                <h1 className="h3 mb-0 text-gray-800">Admin</h1>
              </div>
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <Button variant="contained" onClick={handleClickOpen}>
                  Add Admin
                </Button>
              </div>
              {/* <BookingTable /> */}
              <AdminTable />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Admin</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new admin, please enter their email address here to send
            the registration link.
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
          <Box component="form" ref={form}>
            <TextField
              required
              margin="dense"
              id="outlined-required"
              label="Email Address"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSend}>Send</Button>
        </DialogActions>
      </Dialog>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </>
  );
};

export default Admin;
