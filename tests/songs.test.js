const app = require("../app");
const request = require("supertest");

//Fill in the test case below for the Songs API

describe("routes/songs", () => {

  it("POST /songs should return a new song object", () => {
    //expected return value ?
    expected = {name: "test song", artist: "Rihanna"}

    //trigger the post request
    return request(app)
    .post("/songs")
    .send(expected)

    .then ( response =>{
      //check the response status returned
      expect(response.status).toEqual(201);
      //check the response body equals the expected
      expect(response.body).toMatchObject(expected);
    });
  });
  
  it("GET /songs should return a non empty array", () => {
    //expected non empty array ?
    expected = [{id: 1, name: "test song", artist: "Rihanna"}]

    //trigger the get request
    return request(app)
    .get("/songs")

    .then ( response => {
      //check the response status returned
      expect(response.status).toEqual(200);
      //check the response body equals the expected
      expect(response.body).toMatchObject(expected);
    })
  });
  
  it("PUT /songs should return the updated song", () => {
    //expected return value?
    expected = {id: 1, name: "test song2", artist: "Rihanna2"}

    //trigger the get request
    return request(app)
    .put("/songs/1")
    .send(expected)

    .then ( response => {
      //check the response status returned
      expect(response.status).toEqual(200);
      //check the response body equals the expected
      expect(response.body).toMatchObject(expected);
    })
  });

  it("DELETE /songs/:id should return the deleted song", () => {
    //expected return value?
    expected = {id: 1, name: "test song2", artist: "Rihanna2"}

    //trigger the delete request
    return request(app)
    .delete("/songs/1")
    
    .then ( response => {
      //check the response status returned
      expect(response.status).toEqual(200);
      //check the response body equals the expected
      expect(response.body).toMatchObject(expected);
    })
  });
  
  it("GET /songs should return an empty array", () => {
    //expected empty array ?
    expected = []

    //trigger the get request
    return request(app)
    .get("/songs")

    .then ( response => {
      //check the response status returned
      expect(response.status).toEqual(200);
      //check the response body equals the expected
      expect(response.body).toMatchObject(expected);
    })
    
  });

});

