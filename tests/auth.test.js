const request = require("supertest");
const app = require("../index");

let authenticationToken;

describe("Authentication", () => {
  describe("Register User", () => {
    it("Should be registered in application", async () => {
      const res = await request(app)
        .post("/api/v1/auth/register")
        .set("Content-Type", "application/json")
        .send({
          name: "Fahmi Alfareza",
          email: "fahmialfareza@icloud.com",
          password: "123456",
          role: "user",
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.success).toEqual(true);
    });

    it("Should login to application", async () => {
      const res = await request(app)
        .post("/api/v1/auth/login")
        .set("Content-Type", "application/json")
        .send({
          email: "fahmialfareza@icloud.com",
          password: "123456",
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.success).toEqual(true);

      authenticationToken = res.body.token;
    });

    it("Should get of user information", async () => {
      const res = await request(app)
        .get("/api/v1/auth/me")
        .set({
          Authorization: `Bearer ${authenticationToken}`,
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.success).toEqual(true);
    });
  });
});
