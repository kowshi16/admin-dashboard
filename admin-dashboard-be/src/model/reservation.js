const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema(
  {
    cusName: { type: String, required: true },
    service: { type: String, required: true },
    value: { type: Date, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

const reservations = mongoose.model("reservations", reservationSchema);

module.exports = reservations;
