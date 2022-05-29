const express = require('express');
const {
  getTourFiveTours,
  getAllTours,
  createATour,
  getATour,
  findAndDelete,
  findAndUpdate,
  getStatsAvgs,
  getHolidayStats,
  getToursWithin,
  getDistances,
  createdByLeadGuide,
} = require('../controller/tourController');
const reviewsRoute = require('./reviewRoutes');
const { protect, restrictTo } = require('./../controller/authController');

const router = express.Router();

//tours/id/reviews
router.use('/:tourId/reviews', reviewsRoute);

//GEOSPDATA
router.get('/tours-within/:distance/center/:latlng/unit/:unit', getToursWithin);
router.get('/distances/:latlng/unit/:unit', getDistances);

//router.param('id', checkId);

router.get('/', getAllTours);
router.get('/get-Averages', getStatsAvgs);
router.get('/get-tour-five-tours', getTourFiveTours, getAllTours);
router.get('/get-holiday-stats', getHolidayStats);
//Chaining middleware
router.post('/', protect, restrictTo('lead-guide'), createATour);
router.post(
  '/createdByLeadGuide',
  protect,
  restrictTo('lead-guide'),
  createdByLeadGuide
);
router.get('/:id', getATour);
router.patch('/:id', protect, findAndUpdate);
router.delete('/:id', protect, restrictTo('admin'), findAndDelete);

module.exports = router;
