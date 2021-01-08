#!/usr/bin/env node

import { AxiosError, AxiosResponse } from "axios";
import { URL } from "url";
import Product from "./interfaces/product"

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');
const axios = require('axios');

const api_root_url: string = "https://eve.theiconic.com.au";
const api_products_endpoint: string = "/catalog/products";

// Clear the terminal
clear();
// Start logging output
console.log(
    //Make the text red
    chalk.red(
        // Pretty print the title
        figlet.textSync('The Iconic CLI', { horizontalLayout: 'full' })
    )
);

program
    .version('0.0.1')
    .description("An example CLI for listing products with video previews")
    .option('-g, --gender <enumerable[male | female]>', 'Gender category')
    .option('-p, --page <number>', 'Page number')
    .option('-ps, --page_size <number>', 'Results per page')
    .option('-s, --sort <string>', 'Default sort order of products')
    .parse(process.argv);

console.log('Retriving products that match query string...');

const query_string = {
    "gender": program.gender,
    "page": program.page,
    "page_size": program.page_size,
    "sort": program.sort
}

const url:URL= new URL(`${api_root_url}${api_products_endpoint}`);
url.search = new URLSearchParams(query_string).toString();

console.log(url.toString());

axios.get(url.toString())
  .then((response:AxiosResponse) => {
      let json:any = response.data;
      let products:Product[] = json._embedded.product;
    console.log(products);

  })
  .catch((error:AxiosError) => {
    console.log(error);
  });
