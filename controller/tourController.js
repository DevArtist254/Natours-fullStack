//const fs = require('fs');
//const urlFilePath = `${__dirname}/../dev-data/data/tours-simple.json`;

//bring the files
//const tours = JSON.parse(fs.readFileSync(urlFilePath, 'utf-8'));

//Custom middleware creation
//param middleware
// exports.checkId = (req, res, next, val) => {
//   console.log(`the value of  ID is ${val}`);
//   return res.send('done');
//   next();
// };
//Normal middleware
// exports.middleware = (req, res, next) => {
//   if (!req.body.name || !req.body.name) {
//     return res.status(400).json({
//       msg: 'Bad request',
//     });
//   }

//   next();
// };
const Tour = require('../model/toursModel');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find({});

    res.status(200).json({
      message: 'success',
      results: tours.length,
      data: { tours },
    });
  } catch (error) {
    res.status(400).json({
      errMessage: error.errMessage,
    });
  }
};

exports.createATour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(200).json({
      message: 'success',
      tour,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Invalid String',
    });
  }
  //req.body - is done app/JSON on the raw
  //Create an id
  // const id = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ _id: id }, req.body);

  // tours.push(newTour);

  // fs.writeFile(urlFilePath, JSON.stringify(tours), (err) => {
  //   //status 201 - created
  //   res.status(201).json({ message: 'success', tours: newTour });
  // });
};

exports.getATour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.param.id);

    res.status(200).json({
      message: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: 'invalid id',
    });
  }
  // //params - { id: '5', x: 'y' }, x? - is not a must

  // //conversion from string to number
  // const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

  // if (!tour) {
  //   return res.status(404).json({ message: 'invalid' });
  // }

  // res.status(200).json({
  //   message: 'success',
  //   data: { tour },
  // });
};

exports.findAndUpdate = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.param.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: 'updated successfully',
    });
  } catch (error) {
    res.status(400).json({
      message: 'failed ',
    });
  }
};

exports.findAndDelete = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.param.id);

    res.status(204).json({
      message: 'success',
    });
  } catch (error) {
    res.status(400).json({
      message: 'failed ',
    });
  }
};
