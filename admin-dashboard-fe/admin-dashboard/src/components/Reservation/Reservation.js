import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Autocomplete from "@mui/material/Autocomplete";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "../../common/common.css";
import ReservationTable from "../../common/components/Tables/ReservationTable";

const Reservation = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  const [cusName, setCusName] = useState();
  const [service, setService] = useState();
  const [status, setStatus] = useState("todo");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReserve = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const url = "http://localhost:3001/api/reservation";
      const { data } = await axios.post(
        url,
        { cusName, service, value, status },
        config
      );
    } catch (error) {}

    handleClose();
  };

  const handleChangeDateTime = (newValue) => {
    setValue(newValue);
  };

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const url = "http://localhost:3001/api/getAdminClient/client";
      const { data } = await axios.get(url, config);
      setTableData(data.data);
    } catch (error) {}
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
                <h1 className="h3 mb-0 text-gray-800">Reservation</h1>
              </div>
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <Button variant="contained" onClick={handleClickOpen}>
                  Add Reservation
                </Button>
              </div>
              <ReservationTable />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <CssBaseline />
        <DialogTitle>Add Reservation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new reservation, please fill the below details and submit
            them.
          </DialogContentText>
          <br />
          <Box component="form">
            <Stack spacing={2}>
              <Autocomplete
                onChange={(event, value) => setCusName(value)}
                id="customer"
                name="cusName"
                options={tableData.map(
                  (option) => option.firstName + " " + option.lastName
                )}
                renderInput={(params) => (
                  <TextField {...params} label="Customer Name" />
                )}
              />
              <Autocomplete
                onChange={(event, value) => setService(value)}
                id="services"
                name="services"
                options={services.map((option) => option.service)}
                renderInput={(params) => (
                  <TextField {...params} label="Services" />
                )}
              />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DateTimePicker
                    label="Date&Time"
                    name="value"
                    value={value}
                    onChange={handleChangeDateTime}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleReserve}>Reserve</Button>
        </DialogActions>
      </Dialog>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </>
  );
};

const services = [
  { service: "Haircut/styling" },
  { service: "Nail care" },
  { service: "Facials / skin care" },
  { service: "Massage" },
];

export default Reservation;
