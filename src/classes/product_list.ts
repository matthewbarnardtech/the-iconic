// Main class responsible for data manipulation, including adding video, sorting and writing output to file
const fs = require('fs');
import { AxiosError, AxiosResponse } from "axios";
import { Product } from "../interfaces/product";
import API from "../services/api";

class ProductList {
    // Class member product array, declared interface
    products: Product[];

    // Constructor that accepts an array of products, sets the class member and orders the array by video count
    constructor(product_list: Product[]) {
        this.products = product_list;
        this.order();
    }

    // Class method that adds the video object to the product if the video count is higher than 0
    async decorateVideo() {
        let product_videos = this.products.map(async (product) => {
            if (product.video_count > 0) {
                await API.getVideo(product.sku)
                    .then((response: AxiosResponse) => {
                        product.video = response.data;
                    })
                    .catch((error: AxiosError) => {
                        console.log(error);
                    });
            }
        });
        await Promise.all(product_videos);
    }

    // Class method that orders the product array by video count ascending
    order() {
        this.products.sort(function (a, b) { return b.video_count - a.video_count });
    }

    // Class method that writes the resulting decorated & sorted array to file
    writeToFile(callback?: Function) {
        fs.writeFile('./out.json', JSON.stringify(this.products), (err: Error) => {
            if (err) throw err;
            callback!();
        });
    }
}

export default ProductList;