/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Add product to delivery
* Use to request to make available product
*
* user List List of user object (optional)
* no response value expected for this operation
* */
const addProduct = ({ user }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        user,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete a product
* use to delete a product
*
* productId String  (optional)
* no response value expected for this operation
* */
const deleteProduct = ({ productId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        productId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Finds Product by status
* Multiple status values can be provided with comma separated strings
*
* status List Status values that need to be considered for filter
* offset Integer The number of items to skip before starting to collect the result set (optional)
* limit Integer The numbers of items to return (optional)
* returns List
* */
const findProductByStatus = ({ status, offset, limit }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        status,
        offset,
        limit,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Find product by ID
* Returns a product by ID
*
* productId Integer ID of product that needs to be fetched
* returns Product
* */
const getProductById = ({ productId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        productId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update registry of products
* Use to update products
*
* user List List of user object (optional)
* no response value expected for this operation
* */
const updateProduct = ({ user }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        user,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  addProduct,
  deleteProduct,
  findProductByStatus,
  getProductById,
  updateProduct,
};
