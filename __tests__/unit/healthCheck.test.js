const request = require("supertest");
const app = require("../../src/app");

describe('HealthCheck',()=>{
  
  it("HealthCheck", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  it("HealthCheck", async () => {
    const response = await request(app).post("/");
    expect(response.status).toBe(404);
  });

})


