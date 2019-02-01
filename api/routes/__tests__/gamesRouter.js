const request = require('supertest');
const server = require('../../server.js');

/* Testsuite gamesRouter
    - (MVP) Testset: GET / Endpoint
      - Testcase: should respond with status code 200 OK
      - Testcase: should respond with array
      - Testcase: should check length of array as 3
        - Note: array will be 0 once we implement the stretch to start with empty database
    - (MVP) Testset: POST / Endpoint
      - Testcase: should respond with status code 201
      - Testcase: [releaseYear missing] should respond with status code 201
      - Testcase: should respond with * upon 201 code
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

describe('Testsuite: gamesRouter', () => {
  describe('Testset: GET / Endpoint', () => {
    it('Testcase: should respond with status code 200 OK', async () => {
      let response = await request(server).get('/games');

      expect(response.status).toBe(200);
    });
  });
});
