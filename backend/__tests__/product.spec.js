const request = require("supertest");
const app = require("../server");

// const baseURL = "http://127.0.0.1:3000";

jest.mock("../model/productModel.js", () => {
  return {
    find: jest.fn().mockResolvedValue([{ id: 1, name: "shajar" }]),
    create: jest.fn().mockImplementation((value) => {
      return value;
    }),
    findOne: jest.fn().mockImplementation((id) => {
      return {
        acknowleged: true,
      };
    }),
    findByIdAndUpdate: jest.fn().mockImplementation((id, id2, id3) => {
      return {
        acknowleged: true,
      };
    }),
  };
});

const productModel = require("../model/productModel");

// describe('Random Dog Image', function() {
//     it('responds with expected JSON structure', function(done) {
// request(app)
//   .get('/product')
//   .expect(200)
//   .expect('Content-Type', 'application/json')
//   .end(function(err, res) {
//         if (err) throw err;
//         console.log(res.body);
//   })
// })}

describe("get products", function () {
  it("responds with expected JSON structure", async function () {
    const response = await request(app).get("/product");
    expect(response.statusCode).toBe(201);
    expect(response.body.status).toBeTruthy();
    expect(response.body).toHaveProperty("data");
  });
});
// test("should find products", async () => {
//   const products = await productModel.find();
//   expect(products).toEqual([{ id: 2, name: "shajar" }]);
// });

// test("should create a product", async () => {
//   const product = await productModel.create({ id: 2, name: "newProduct" });
//   expect(product).toEqual({ id: 2, name: "newProduct" });
// });
