/**
  resolves to an ARRAY with all users, each user having { user_id, username }
 */
const db = require("../../data/db-config");

function find() {
  return db("users");
}

/**
  resolves to an ARRAY with all users that match the filter condition
 */
function findBy(filter) {
  return db("users").where(...filter);
}

/**
  resolves to the user { user_id, username } with the given user_id
 */
function findById(user_id) {
  return db("users").where("user_id", user_id);
}

/**
  resolves to the newly inserted user { user_id, username }
 */
async function add(user) {
  const newUserID = await db("users").insert(user);
  return findById(newUserID);
}

module.exports = {
  find,
  findBy,
  findById,
  add
};