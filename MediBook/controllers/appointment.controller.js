
import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
  const { doctor, date, reason } = req.body;

  if (isNaN(Date.parse(date))) {
    return res.status(400).json({ msg: "Invalid date" });
  }

  const appointment = await Appointment.create({
    patient: req.user.id,
    doctor,
    date,
    reason
  });

  res.json(appointment);
};