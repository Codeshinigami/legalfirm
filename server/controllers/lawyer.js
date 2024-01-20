const lawyerModel = require("../models/lawyers");

const registerLawyer = async (req, res) => {
    try {
        const { fname, lname, location, mobile, lid } = req.body;

        console.log(req.body)

        const lawyer = new lawyerModel({
            fname: fname,
            lname: lname,
            location: location,
            mobile: mobile,
            lid: lid,
        });

        await lawyer.save();

        res.json({ success: "Lawyer created successfully." });
    } catch (err) {
        console.error(err);
        res.json({ error: "Internal Server Error." });
    }
};

const getLawyers = async (req, res) => {
    try {
        const {lawyers} = await lawyerModel.find({}).limit(10);
        
        res.json({ lawyers: lawyers });
    } catch (err) {
        console.error(err);
        res.json({ error: "Internal Server Error." });
    }
};

module.exports = { registerLawyer, getLawyers };
