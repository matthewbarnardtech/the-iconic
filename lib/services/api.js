"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
// API service used to communicate with the API in an encapsulated manor
var API = /** @class */ (function () {
    function API() {
    }
    // Get a list of products from the API that matches the flags sent from /src/index.ts
    API.getProducts = function (query) {
        var url = new URL(API.api_rooted_products_endpoint);
        url.search = new URLSearchParams(query).toString();
        return axios_1.default.get(url.toString());
    };
    // Get a video from the API that match the SKU sent from /src/classes/product_list.ts
    API.getVideo = function (sku) {
        return axios_1.default.get(API.api_rooted_products_endpoint + "/" + sku + "/videos");
    };
    // Initialize static readonly (const) class members
    API.api_root_url = "https://eve.theiconic.com.au";
    API.api_products_endpoint = "/catalog/products";
    API.api_rooted_products_endpoint = "" + API.api_root_url + API.api_products_endpoint;
    return API;
}());
exports.default = API;
