/**
  resolves to an ARRAY with all users, each user having { user_id, username }
 */
const db = require("../../data/db-config");

function find() {
  return db("users").select("user_id", "username")
}

/**
  resolves to an ARRAY with all users that match the filter condition
 */
function findBy(filter) {
  return db("users").where(...filter).first();
}

/**
  resolves to the user { user_id, username } with the given user_id
 */
async function findById(user_id) {
  const newUser = await db("users").where("user_id", user_id).first();
  return Promise.resolve({
    user_id: newUser.user_id, 
    username: newUser.username
  });
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