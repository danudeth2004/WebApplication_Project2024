// var express = require('express');

// var router = express.Router();

// var database = require('../database');

// ////////////English Language///////////

// router.get('/', function (req, res, next) {

//   const queryNoodles = 'select distinct noodles_nameEN from Noodles_Type';
//   const queryMeat = 'select distinct meat_nameEN from Meat_Type';
//   const queryAddveg = 'select distinct add_veg_nameEN from Add_Veg_list';
//   const queryTopping = 'select distinct topping_nameEN from Topping';

//   // Select Noodles EN //
//   database.query(queryNoodles, function (err, noodlesEN) {
//     if (err) {
//       console.log('Failed to query' + err);
//       return;
//     }

//     // Select Meat EN //
//     database.query(queryMeat, function (err, meatEN) {
//       if (err) {
//         console.log('Failed to query' + err);
//         return;
//       }

//       // Select Veg EN //
//       database.query(queryAddveg, function (err, add_vegEN) {
//         if (err) {
//           console.log('Failed to query' + err);
//           return;
//         }

//         // Select Topping EN //
//         database.query(queryTopping, function (err, toppingEN) {
//           if (err) {
//             console.log('Failed to query' + err);
//             return;
//           }

//           res.render('indexEN',
//             { title: 'English', noodles_dataEN: noodlesEN, meat_dataEN: meatEN, add_veg_dataEN: add_vegEN, topping_dataEN: toppingEN });
//         });

//       });

//     });

//   });

// });

// module.exports = router;
