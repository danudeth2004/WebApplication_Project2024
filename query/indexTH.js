// var express = require('express');

// var router = express.Router();

// var database = require('../database');

// ////////////Thai Language///////////

// router.get('/', function (req, res, next) {

//   const queryNoodles = 'select distinct noodles_nameTH from Noodles_Type';
//   const queryMeat = 'select distinct meat_nameTH from Meat_Type';
//   const queryAddveg = 'select distinct add_veg_nameTH from Add_Veg_list';
//   const queryTopping = 'select distinct topping_nameTH from Topping';

//   // Select Noodles TH //
//   database.query(queryNoodles, function (err, noodlesTH) {
//     if (err) {
//       console.log('Failed to query' + err);
//       return;
//     }

//     // Select Meats TH //
//     database.query(queryMeat, function (err, meatTH) {
//       if (err) {
//         console.log('Failed to query' + err);
//         return;
//       }

//       // Select Veg TH //
//       database.query(queryAddveg, function (err, add_vegTH) {
//         if (err) {
//           console.log('Failed to query' + err);
//           return;
//         }

//         // Select Topping TH //
//         database.query(queryTopping, function (err, toppingTH) {
//           if (err) {
//             console.log('Failed to query' + err);
//             return;
//           }

//           res.render('indexTH',
//             { title: 'Thai', noodles_dataTH: noodlesTH, meat_dataTH: meatTH, add_veg_dataTH: add_vegTH, topping_dataTH: toppingTH });
//         });

//       });

//     });

//   });

// });

// module.exports = router;
