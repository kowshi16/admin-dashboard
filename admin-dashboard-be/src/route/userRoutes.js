const express = require("express");
const adminController = require("../controller/adminController");
const reservationController = require("../controller/reservationController");

const router = express.Router();

router.get("/get", async function (req, res) {
  await adminController.get(req, res);
});

router.get("/getAllUsers", async function (req, res) {
  await adminController.getAllUsers(req, res);
});

router.get("/getAdminClient/:role", async function (req, res) {
  await adminController.getAdminClient(req, res);
});

router.post("/users", async function (req, res) {
  await adminController.register(req, res);
});

router.post("/login", async function (req, res) {
  await adminController.authUser(req, res);
});

router.post("/reservation", async function (req, res) {
  await reservationController.reservation(req, res);
});

router.get("/getReservations", async function (req, res) {
  await reservationController.getReservations(req, res);
});

module.exports = router;
