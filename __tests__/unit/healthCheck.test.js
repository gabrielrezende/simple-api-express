const request = require("supertest");
const app = require("../../src/app");

it("HealthCheck", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
});
