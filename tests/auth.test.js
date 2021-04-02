const request = require("supertest");
const app = require("../index");

describe("Post Endpoints", () => {
  it("should login to application", async () => {
    const res = await request(app).post("/api/v1/auth/login").send({
      email: "john@gmail.com",
      password: "123456",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
  });
});
