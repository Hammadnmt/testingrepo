const request = require("supertest");
const app = require("../server");

jest.mock("../model/productModel.js", () => {
  return {
    find: jest.fn().mockResolvedValue([{ id: 1, name: "Hammad" }]),
    create: jest.fn().mockImplementation((value) => {
      return value;
    }),
    findById: jest.fn().mockImplementation((id, id2, id3) => {
      return {
        acknowleged: true,
      };
    }),
    findByIdAndUpdate: jest.fn().mockImplementation((id, id2, id3) => {
      return {
        acknowleged: true,
      };
    }),
    findByIdAndDelete: jest.fn().mockImplementation((id, id2, id3) => {
      return {
        acknowleged: true,
      };
    }),
  };
});

const productModel = require("../model/productModel");
jest.useFakeTimers();

test("get products", async function () {
  const response = await request(app).get("/product");
  expect(response.statusCode).toBe(201);
  expect(response.body.status).toBeTruthy();
  expect(response.body).toHaveProperty("data");
});

test("should create products", async () => {
  const response = await request(app).post("/product");
  expect(response.statusCode).toBe(201);
  expect(response.body.status).toBeTruthy();
  expect(response.body).toHaveProperty("message");
  expect(response.body).toHaveProperty("data");
});

test("should update products", async () => {
  const response = await request(app).patch("/product/12121212122");
  expect(response.statusCode).toBe(200);
  expect(response.body.status).toBeTruthy();
  expect(response.body).toHaveProperty("message");
  expect(response.body).toHaveProperty("data");
  //expect(response.body).toHaveProperty("data");
});

test("should delete products", async () => {
  const response = await request(app).delete("/product/12121212122");
  expect(response.statusCode).toBe(200);
  expect(response.body.status).toBeTruthy();
  expect(response.body).toHaveProperty("message");
  //expect(response.body).toHaveProperty("data");
});

test("should get one product", async () => {
  const response = await request(app).get("/product/12121212122");
  expect(response.statusCode).toBe(200);
  expect(response.body.status).toBeTruthy();
  // expect(response.body).toHaveProperty("message");
  expect(response.body).toHaveProperty("data");
});
