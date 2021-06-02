import supertest from 'supertest'
const app = require("./server");

describe("Teste Servidor", () => {
  it("Get servidor mensagem", async () => {
    const res = await supertest(app).get("/");
    expect(res.body).toHaveProperty("message");
    expect(res.statusCode).toEqual(200);
  });
});
