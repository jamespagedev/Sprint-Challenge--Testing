const request = require('supertest');
const server = require('../../server.js');

/* Testsuite gamesRouter
    - (MVP) Testset: GET / Endpoint
      - Testcase: should respond with status code 200 OK
      - Testcase: should respond with array
      - Testcase: should check length of array as 6
        - Note: array will be 0 once we implement the stretch to start with empty database
    - (MVP) Testset: POST / Endpoint
      - Testcase: should respond with status code 201
      - Testcase: [releaseYear missing] should respond with status code 201
      - Testcase: should respond with {game} that was added upon 201 code
      - Testcase: [name missing] should respond with status code 422
      - Testcase: [genre missing] should respond with status code 422
    - (Integration/Stretch) Testset: post 3 games and gets a list of all 3 games
      - Testcase: post game
      - Testcase: post game
      - Testcase: post game
      - Testcase: get all games
    - (Integration/Stretch) Testset: post/getById/update/getByName/delete the game
      - Testcase: post game
      - Testcase: getById game that was just added
      - NotWorking[X] Testcase: edit game name
      - Testcase: getByName game that was just edited
      - Testcase: remove the game from database
*/

// Testsuite
describe('Testsuite: gamesRouter', () => {
  // Testset
  describe('Testset: GET / Endpoint', () => {
    // Testcase
    it('Testcase: should respond with status code 200 OK', async () => {
      let response = await request(server).get('/games');

      expect(response.status).toBe(200);
    });

    // Testcase
    it('Testcase: should respond with array', async () => {
      let response = await request(server).get('/games');

      // Remember... in javascript, `typeof []` is an object, not an array.
      // And so... even though we are getting back an array(games), javascript still reads it as an object
      expect(typeof response.body).toMatch(/object/i);
    });

    // Testcase
    it('Testcase: should respond with array', async () => {
      let response = await request(server).get('/games');

      // Remember... in javascript, `typeof []` is an object, not an array.
      // And so... even though we are getting back an array(games), javascript still reads it as an object
      expect(response.body).toHaveLength(6);
    });
  });

  describe('Testset: GET / Endpoint', () => {
    // Testcase
    it('Testcase: should respond with status code 201', async () => {
      const game = {
        title: 'Pacman', // required
        genre: 'Arcade', // required
        releaseYear: 1980 // not required
      };
      let response = await request(server)
        .post('/games')
        .send(game);

      expect(response.status).toBe(201);
    });

    // Testcase
    it('Testcase: [releaseYear missing] should respond with status code 201', async () => {
      const game = {
        title: 'Final Fantasy', // required
        genre: 'nes' // required
      };
      let response = await request(server)
        .post('/games')
        .send(game);

      expect(response.status).toBe(201);
    });
  });
});
