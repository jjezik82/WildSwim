import express from 'express';
const router = express.Router();
import Place from '../models/placeModel.js';
import asyncHandler from 'express-async-handler';

// @desc  Fetch all places
// @route  GET /api/places
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const places = await Place.find({});
    res.json(places);
  })
);

// @desc  Fetch single place
// @route  GET /api/places/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const place = await Place.findById(req.params.id);

    if (place) {
      res.json(place);
    } else {
      res.status(404);
      throw new Error('Miesto nebolo nájdené!');
    }
  })
);

export default router;
