const { volunteerModel } = require("../models");

const adminVolunteer = async (req, res) => {
    try {
      const volunteer = await volunteerModel.find({});
      res.status(201).send(volunteer);
    } catch (error) {
      res.status(404).send({ error });
    }
  };
  
  const adminVolunteerId = async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
  
      const volunteer = await volunteerModel.findById({ _id: id });
      res.json(volunteer);
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminUpdateVolunteer = async (req, res) => {
    try {

      const {
        body: { id, ...data },
      } = req;
  
      const volunteer = await volunteerModel.findByIdAndUpdate({ _id: id }, data, {
        returnOriginal: false,
      });
  
      res.json({ data: volunteer });
    } catch (e) {
      res.status(404).send({ error: e });
    }
  };
  
  const adminCreateVolunteer = async (req, res) => {
    try {
      const { body } = req;
      const volunteer = await volunteerModel.create(body);
      res.status(200).send({data: volunteer});
    } catch (error) {
      res.status(404).send({ error });
    }
  };
  
  const adminDeleteVolunteer = async (req, res) => {
    try {
      
      const id = req.params.id;

      const volunteerDelete = await volunteerModel.findByIdAndUpdate({_id: id}, {isDelete: true}, {
        returnOriginal: false,
      });
  
      res.status(201).send(volunteerDelete);
    } catch (e) {
      res.status(404).send(e);
    }
  };


  module.exports = {
    adminVolunteer,
    adminVolunteerId,
    adminCreateVolunteer,
    adminUpdateVolunteer,
    adminDeleteVolunteer,
  };