"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products/[id]";
exports.ids = ["pages/api/products/[id]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./db/connect.js":
/*!***********************!*\
  !*** ./db/connect.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9jb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxJQUFJRjtBQUVoQyxJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUNSO0FBRUo7QUFFQTs7OztDQUlDLEdBQ0QsSUFBSUMsU0FBU0MsT0FBT047QUFFcEIsSUFBSSxDQUFDSyxRQUFRO0lBQ1hBLFNBQVNDLE9BQU9OLFdBQVc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDekQ7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLE1BQU07UUFDZixPQUFPRixPQUFPRTtJQUNoQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csU0FBUztRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQjtRQUNsQjtRQUVBTixPQUFPRyxVQUFVUix1REFBZ0JZLENBQUNYLGFBQWFTLE1BQU1HLEtBQUssQ0FBQ2I7WUFDekQsT0FBT0E7UUFDVDtJQUNGO0lBRUEsSUFBSTtRQUNGSyxPQUFPRSxPQUFPLE1BQU1GLE9BQU9HO0lBQzdCLEVBQUUsT0FBT00sR0FBRztRQUNWVCxPQUFPRyxVQUFVO1FBQ2pCLE1BQU1NO0lBQ1I7SUFFQSxPQUFPVCxPQUFPRTtBQUNoQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1jcmVhdGVfcHJvZHVjdHMvLi9kYi9jb25uZWN0LmpzP2M3NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsXCJcbiAgKTtcbn1cblxuLyoqXG4gKiBHbG9iYWwgaXMgdXNlZCBoZXJlIHRvIG1haW50YWluIGEgY2FjaGVkIGNvbm5lY3Rpb24gYWNyb3NzIGhvdCByZWxvYWRzXG4gKiBpbiBkZXZlbG9wbWVudC4gVGhpcyBwcmV2ZW50cyBjb25uZWN0aW9ucyBncm93aW5nIGV4cG9uZW50aWFsbHlcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXG4gKi9cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XG5cbmlmICghY2FjaGVkKSB7XG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XG4gIGlmIChjYWNoZWQuY29ubikge1xuICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgfVxuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgIH07XG5cbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICByZXR1cm4gbW9uZ29vc2U7XG4gICAgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/connect.js\n");

/***/ }),

/***/ "(api)/./db/models/Product.js":
/*!******************************!*\
  !*** ./db/models/Product.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Review */ \"(api)/./db/models/Review.js\");\n\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst productSchema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    currency: {\n        type: String,\n        required: true\n    },\n    reviews: {\n        type: [\n            Schema.Types.ObjectId\n        ],\n        ref: \"Review\"\n    }\n});\nconst Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", productSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvUHJvZHVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ2Q7QUFDbEIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0QsaURBQVFBO0FBRTNCLE1BQU1FLGdCQUFnQixJQUFJRCxPQUFPO0lBQy9CRSxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0MsYUFBYTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDNUNFLE9BQU87UUFBRUosTUFBTUs7UUFBUUgsVUFBVTtJQUFLO0lBQ3RDSSxVQUFVO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q0ssU0FBUztRQUFFUCxNQUFNO1lBQUNILE9BQU9XLE1BQU1DO1NBQVM7UUFBRUMsS0FBSztJQUFTO0FBQzFEO0FBRUEsTUFBTUMsVUFDSmYsd0RBQWVnQixDQUFDRCxXQUFXZixxREFBY2lCLENBQUMsV0FBV2Y7QUFFdkQsaUVBQWVhLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLWNyZWF0ZV9wcm9kdWN0cy8uL2RiL21vZGVscy9Qcm9kdWN0LmpzPzI5NWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IFwiLi9SZXZpZXdcIjtcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcblxuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBwcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGN1cnJlbmN5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgcmV2aWV3czogeyB0eXBlOiBbU2NoZW1hLlR5cGVzLk9iamVjdElkXSwgcmVmOiBcIlJldmlld1wiIH0sXG59KTtcblxuY29uc3QgUHJvZHVjdCA9XG4gIG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKFwiUHJvZHVjdFwiLCBwcm9kdWN0U2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInByb2R1Y3RTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIk51bWJlciIsImN1cnJlbmN5IiwicmV2aWV3cyIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJQcm9kdWN0IiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/models/Product.js\n");

/***/ }),

/***/ "(api)/./db/models/Review.js":
/*!*****************************!*\
  !*** ./db/models/Review.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst reviewSchema = new Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    text: {\n        type: String,\n        required: true\n    },\n    rating: {\n        type: Number,\n        required: true\n    }\n});\nconst Review = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Review || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Review\", reviewSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Review);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvUmV2aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRCxpREFBUUE7QUFFM0IsTUFBTUUsZUFBZSxJQUFJRCxPQUFPO0lBQzlCRSxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0MsTUFBTTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNFLFFBQVE7UUFBRUosTUFBTUs7UUFBUUgsVUFBVTtJQUFLO0FBQ3pDO0FBRUEsTUFBTUksU0FBU1Ysd0RBQWVXLENBQUNELFVBQVVWLHFEQUFjWSxDQUFDLFVBQVVWO0FBRWxFLGlFQUFlUSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1jcmVhdGVfcHJvZHVjdHMvLi9kYi9tb2RlbHMvUmV2aWV3LmpzPzZiZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XG5cbmNvbnN0IHJldmlld1NjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHRleHQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICByYXRpbmc6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxufSk7XG5cbmNvbnN0IFJldmlldyA9IG1vbmdvb3NlLm1vZGVscy5SZXZpZXcgfHwgbW9uZ29vc2UubW9kZWwoXCJSZXZpZXdcIiwgcmV2aWV3U2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwicmV2aWV3U2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0ZXh0IiwicmF0aW5nIiwiTnVtYmVyIiwiUmV2aWV3IiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/models/Review.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/[id].js":
/*!************************************!*\
  !*** ./pages/api/products/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../db/connect */ \"(api)/./db/connect.js\");\n/* harmony import */ var _db_models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../db/models/Product */ \"(api)/./db/models/Product.js\");\n\n\nasync function handler(request, response) {\n    await (0,_db_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const { id } = request.query;\n    if (request.method === \"GET\") {\n        const product = await _db_models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id).populate(\"reviews\");\n        if (!product) {\n            return response.status(404).json({\n                status: \"Not Found\"\n            });\n        }\n        response.status(200).json(product);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDSztBQUVsQyxlQUFlRSxRQUFRQyxPQUFPLEVBQUVDLFFBQVE7SUFDckQsTUFBTUosdURBQVNBO0lBQ2YsTUFBTSxFQUFFSyxFQUFFLEVBQUUsR0FBR0YsUUFBUUc7SUFFdkIsSUFBSUgsUUFBUUksV0FBVyxPQUFPO1FBQzVCLE1BQU1DLFVBQVUsTUFBTVAsbUVBQWdCUSxDQUFDSixJQUFJSyxTQUFTO1FBRXBELElBQUksQ0FBQ0YsU0FBUztZQUNaLE9BQU9KLFNBQVNPLE9BQU8sS0FBS0MsS0FBSztnQkFBRUQsUUFBUTtZQUFZO1FBQ3pEO1FBRUFQLFNBQVNPLE9BQU8sS0FBS0MsS0FBS0o7SUFDNUI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQtY3JlYXRlX3Byb2R1Y3RzLy4vcGFnZXMvYXBpL3Byb2R1Y3RzL1tpZF0uanM/ODJlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi9kYi9jb25uZWN0XCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vLi4vZGIvbW9kZWxzL1Byb2R1Y3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXF1ZXN0LCByZXNwb25zZSkge1xuICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgY29uc3QgeyBpZCB9ID0gcmVxdWVzdC5xdWVyeTtcblxuICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kQnlJZChpZCkucG9wdWxhdGUoXCJyZXZpZXdzXCIpO1xuXG4gICAgaWYgKCFwcm9kdWN0KSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDQwNCkuanNvbih7IHN0YXR1czogXCJOb3QgRm91bmRcIiB9KTtcbiAgICB9XG5cbiAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3QpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiUHJvZHVjdCIsImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJpZCIsInF1ZXJ5IiwibWV0aG9kIiwicHJvZHVjdCIsImZpbmRCeUlkIiwicG9wdWxhdGUiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/[id].js"));
module.exports = __webpack_exports__;

})();