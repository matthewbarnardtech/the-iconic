#!/usr/bin/env node

import { AxiosError, AxiosResponse } from "axios";
import { URL } from "url";

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


