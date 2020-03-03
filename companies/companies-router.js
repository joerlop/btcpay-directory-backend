const router = require('express').Router();

const db = require('./companies-router.js');

// router.get('/', (req, res) => {
//   db.find()
//     .then(rooms => {
//       res.json(rooms);
//     })
//     .catch(err => res.send(err));
// });

// router.get('/map', (req, res) => {
//     db.getMap()
//       .then(rooms => {
//         res.status(200).json(rooms);
//       })
//       .catch(err => res.status(500).json(err));
//   });

// router.get('/:id', (req, res) => {
//   db.findById(req.params.id)
//     .then(room => {
//       res.json(room);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.get('/:id/:direction', (req, res) => {
//     db.getDirection(req.params.id, req.params.direction)
//       .then(direction => {
//         res.json(direction);
//       })
//       .catch(err => {
//           console.log(err);
//           res.status(500).json(err);
//       });
//   });

// router.post('/', (req, res) => {

//     db.findById(req.body.room_id)
//     .then(room => {
//         if (room) {
//             res.status(200).json({message: "Room already posted!"})
//         } else {
//             db.add(req.body)
//             .then(room => {
//                 res.status(201).json({message: "Room successfully added!"})
//             }).catch(err => {
//                 console.log(err)
//                 res.status(500).json({message: err})
//             })
//         }})
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.put('/', (req, res) => {
//     let currentRoom = req.query.currentRoom;
//     let previousRoom = req.query.previousRoom;
//     let previousDirection = req.query.previousDirection;

//     db.getDirection(previousRoom, previousDirection).then(direction => {
//         if (direction[0][previousDirection] === 999) {
//             db.updateDirection(previousRoom, previousDirection, currentRoom)
//             .then(() => {
//                 let directionToUpdate = ""
//                 if (previousDirection === "n") {
//                     directionToUpdate = "s"
//                 } else if (previousDirection === "s") {
//                     directionToUpdate = "n"
//                 } else if (previousDirection === "w") {
//                     directionToUpdate = "e"
//                 } else {
//                     directionToUpdate = "w"
//                 }
        
//                 db.updateDirection(currentRoom, directionToUpdate, previousRoom)
//                 .then(whatever => {
//                     res.status(200).json({message: "Rooms updated!!!!!!"})
//                 })
//                 .catch(err => {
//                     res.status(500).json(err);    
//                 })
//             })
//             .catch(err => {
//                 res.status(500).json(err);
//             })
//         } else {
//             res.status(200).json("Already updated!")
//         }
//     })
//     .catch(err => {
//         res.status(500).json(err);
//     })
// });

module.exports = router;