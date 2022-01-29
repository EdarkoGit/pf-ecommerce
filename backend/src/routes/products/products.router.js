const { Router } = require("express");
const getProduct = require("./controllerGet/getProduct.controller");
const productById = require("./controllerGet/productById.controller");
const createProduct = require("./controllerPost/createProduct.controller");
const updateProduct = require("./controllerUpdate/updateProduct.controller");

const products = Router();

products.route("/id/:id").get(productById);
products.route("/").get(getProduct);
products.route("/").post(createProduct);
products.route("/").put(updateProduct);

module.exports = products;
