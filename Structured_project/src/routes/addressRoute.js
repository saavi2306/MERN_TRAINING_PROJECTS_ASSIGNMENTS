const express = require("express");
const router = express.Router();
const addressModel = require("../models/addressModel");
const authenticate=require("../middleware/authentication");

router.post("/createAddress", authenticate, async (req, res) => {
    try {
        const { type, street, city, state, country, pincode, longitude, latitude } = req.body;
        const userId = req.user?.id || req.user?._id;
        if (!userId) return res.status(401).json({ message: "Unauthorized" });

        const lng = parseFloat(longitude);
        const lat = parseFloat(latitude);

        const addressData = {
            user: userId,
            type,
            street,
            city,
            state,
            country,
            pincode,
            location: {
                type: "Point",
                coordinates: [lng, lat]
            }
        };

        await addressModel.create(addressData);
        res.json({ message: "Address created successfully" });
    } catch (error) {
        res.status(500).json({ err: error.message || error });
    }
});

router.get("/addressNearMe", async (req, res) => {
    try {
        const { radius = 5000, latitude, longitude } = req.query;
        if (!latitude || !longitude) return res.status(400).json({ message: "latitude and longitude are required" });

        const maxDistance = parseInt(radius, 10);
        const lat = parseFloat(latitude);
        const lon = parseFloat(longitude);

        const addressData = await addressModel.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lon, lat]
                    },
                    $maxDistance: maxDistance
                }
            }
        });

        res.json(addressData);
    } catch (error) {
        res.status(500).json({ err: error.message || error });
    }
});

router.get("/search" , authenticate, async (req , res)=>{
    try{
        const {q} = req.query;
        const addresses = await addressModel.find({
            // user: req.user._id,
            street: {
                $regex: q ,
                $option: "i"
            }
        });
        res.json(addresses);
    }
    catch{
        res.json({
            message: "Failed to search address"
        });
    }
});

module.exports = router;













































































































































