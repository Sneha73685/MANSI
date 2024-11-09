const { Appointment, appointmentZodSchema } = require('../models/appointment');

exports.createAppointment = async (req, res) => {
    const validation = appointmentZodSchema.safeParse(req.body);
    if (!validation.success) return res.status(400).json(validation.error.errors);

    try {
        const newAppointment = await Appointment.create(req.body);
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findOne({ _id: req.params.id });
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
