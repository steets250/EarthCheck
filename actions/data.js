const fetch = require("node-fetch");

// get('/ways')
export const getWays = async callback => {
  try {
    const response = await fetch('http://localhost:8000/ways', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    callback(json, null);
  } catch (error) {
    callback(null, error);
  }
};

// get('/leaderboard')
export const getLeaderboard = async callback => {
  try {
    const response = await fetch('http://localhost:8000/leaderboard', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    callback(json, null);
  } catch (error) {
    callback(null, error);
  }
};

// post('/user')
export const createUser = async (name, callback) => {
  try {
    const response = await fetch('http://localhost:8000/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name
      }),
    });
    const json = await response.json();
    callback(json, null);
  } catch (error) {
    callback(null, error);
  }
}

// get('/user/:id')
export const getUser = async (id, callback) => {
  try {
    const response = await fetch('http://localhost:8000/user/' + id, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    callback(json, null);
  } catch (error) {
    callback(null, error);
  }
};

// post('/user/attendance')
export const completeTask = async (user, way, callback) => {
  try {
    const response = await fetch('http://localhost:8000/user/attendance', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: user,
        way: way
      }),
    });
    const json = await response.json();
    callback(json, null);
  } catch (error) {
    callback(null, error);
  }
}