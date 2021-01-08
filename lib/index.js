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
    console.log(response.data);
})
    .catch(function (error) {
    console.log(error);
});
// https.get(url.toString(), (resp: any) => {
//     let data = '';
//     // A chunk of data has been received.
//     resp.on('data', (chunk: any) => {
//         data += chunk;
//     });
//     // The whole response has been received. Print out the result.
//     resp.on('end', () => {
//         console.log(JSON.parse(data));
//     });
// }).on("error", (err: any) => {
//     console.log("Error: " + err.message);
// });
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbq) console.log('  - bbq');
// const cheese: string = true === program.cheese ? 'marble' : program.cheese || 'no';
// console.log('  - %s cheese', cheese);
// if (!process.argv.slice(2).length) {
//     program.outputHelp();
//   }
