const reservationModel = require("../model/reservation");

module.exports.reservation = async function (req, res) {
  const { cusName, service, value, status } = req.body;

  try {
    const resp = await reservationModel.create({
      cusName,
      service,
      value,
      status,
    });

    if (resp) {
      res.status(201);
      res.send({
        success: true,
        data: resp,
      });
    } else {
      res.status(400);
      // res.send({
      //   success: false,
      //   message: "Error occurred!",
      // });
      throw new Error("Error occurred!");
    }
  } catch (e) {
    console.log("Error ----------- ", e);
    res.send({
      success: false,
      error: e,
    });
  }
};

module.exports.getReservations = async function (req, res) {
  const resp = await reservationModel.find();

  if (resp) {
    res.send({
      success: true,
      data: resp,
    });
  } else {
    res.send({
      success: false,
      data: [],
    });
  }
};
