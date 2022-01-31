const { Router } = require("express");
const getProduct = require("./controllerGet/getProduct.controller");
const getProductAdmin = require("./controllerGet/getProductAdmin.controller");
const productById = require("./controllerGet/productById.controller");
const getProductByIdAdmin = require("./controllerGet/productByidAdmin.controller");
const createProduct = require("./controllerPost/createProduct.controller");
const updateProduct = require("./controllerUpdate/updateProduct.controller");

const products = Router();

products.route("/admin/:id").get(getProductByIdAdmin);
products.route("/admin").get(getProductAdmin);
products.route("/id/:id").get(productById);
products.route("/").get(getProduct);
products.route("/").post(createProduct);
products.route("/").put(updateProduct);

module.exports = products;
