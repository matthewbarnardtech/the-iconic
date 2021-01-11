#!/usr/bin/env node

import { AxiosError, AxiosResponse } from "axios";
import ProductList from "./classes/product_list";
import API from "./services/api";

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const program = require('commander');

// Clear the terminal
clear();
// Start logging output
console.log(
  // Make the text red
  chalk.red(
    // Pretty print the title
    figlet.textSync('The Iconic CLI', { horizontalLayout: 'full' })
  )
);

// Initialize the CLI with flags
program
  .version('0.0.1')
  .description("An example CLI for listing products with video previews")
  .option('-g, --gender <enumerable[male | female]>', 'Gender category')
  .option('-p, --page <number>', 'Page number')
  .option('-ps, --page_size <number>', 'Results per page')
  .option('-s, --sort <string>', 'Default sort order of products')
  .parse(process.argv);

// Let user know that the API call is in progress
console.log('Retriving products that match query string...');

// Use service to retrieve Products from API matching the flags the use has passed to the command
API.getProducts({
  "gender": program.gender,
  "page": program.page,
  "page_size": program.page_size,
  "sort": program.sort
})
  .then(async (response: AxiosResponse) => {
    // Type cast response to class constructor ./src/classes/product_list.ts
    let product_list = new ProductList(response.data._embedded.product);

    // Let user know the program is busy fetching videos
    console.log('Decorating videos...')
    // Decorate JSON object with video links
    await product_list.decorateVideo();

    // Let user know the file is about to be written
    console.log('Writing file...')
    // Write the decorated object to out.json
    product_list.writeToFile();

    // Let user know that the program has finished & where to find file
    console.log('Products saved to ./out.json');
  })
  .catch((error: AxiosError) => {
    console.log(error);
  });
