const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  updateDirection,
  remove,
  getDirection,
  getMap
};

// function getMap() {
//     return db('rooms')
//     .select("room_id", "title", "n", "s", "e", "W", "coordinates")
// }

// function getDirection(room_id, direction) {
//     return db('rooms')
//     .where({ room_id })
//     .select(direction)
// }

// function find() {
//   return db('rooms');
// }

// function findBy(filter) {
//   return db('rooms').where(filter).first();
// }

// function add(ticket) {
//   return db('rooms').insert(ticket);
// }

// function findById(room_id) {
//   return db('rooms')
//     .where({ room_id })
//     .first();
// }

// function updateDirection(room_id, direction, direction_id) {
//   return db("rooms")
//   .where({ room_id })
//   .update(direction, direction_id)
// }

// function remove(id) {
//   return db("rooms")
//   .where({ id })
//   .del()
// }