/**
 * The V1SellerController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/V1SellerService');
const addProduct = async (request, response) => {
  await Controller.handleRequest(request, response, service.addProduct);
};

const deleteProduct = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteProduct);
};

const findProductByStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.findProductByStatus);
};

const getProductById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getProductById);
};

const updateProduct = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateProduct);
};


module.exports = {
  addProduct,
  deleteProduct,
  findProductByStatus,
  getProductById,
  updateProduct,
};
