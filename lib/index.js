#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("url");
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
var axios = require('axios');
var api_root_url = "https://eve.theiconic.com.au";
var api_products_endpoint = "/catalog/products";
// Clear the terminal
clear();
// Start logging output
console.log(
//Make the text red
chalk.red(
// Pretty print the title
figlet.textSync('The Iconic CLI', { horizontalLayout: 'full' })));
program
    .version('0.0.1')
    .description("An example CLI for listing products with video previews")
    .option('-g, --gender <enumerable[male | female]>', 'Gender category')
    .option('-p, --page <number>', 'Page number')
    .option('-ps, --page_size <number>', 'Results per page')
    .option('-s, --sort <string>', 'Default sort order of products')
    .parse(process.argv);
console.log('Retriving products that match query string...');
var query_string = {
    "gender": program.gender,
    "page": program.page,
    "page_size": program.page_size,
    "sort": program.sort
};
var url = new url_1.URL("" + api_root_url + api_products_endpoint);
url.search = new URLSearchParams(query_string).toString();
console.log(url.toString());
axios.get(url.toString())
    .then(function (response) {
    var json = response.data;
    var products = json._embedded.product;
    products.sort(function (a, b) { return b.video_count - a.video_count; });
    console.log(products.map(function (_a) {
        var video_count = _a.video_count;
        return ({ video_count: video_count });
    }));
})
    .catch(function (error) {
    console.log(error);
});
