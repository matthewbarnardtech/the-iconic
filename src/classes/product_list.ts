const fs = require('fs');
import axios, { AxiosError, AxiosResponse } from "axios";
import Product from "../interfaces/product";

class ProductList {
    products: Product[];

    constructor(product_list: Product[]) {
        this.products = product_list;
        this.order();
    }

    async decorateVideo() {
        let product_videos = this.products.map(async (product) => {
            const api_video_endpoint = `https://eve.theiconic.com.au/catalog/products/${product.sku}/videos`;
            if (product.video_count > 0) {
                await axios.get(api_video_endpoint)
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

    order() {
        this.products.sort(function (a, b) { return b.video_count - a.video_count });
    }

    writeToFile() {
        fs.writeFile('./out.json', JSON.stringify(this.products), (err:Error) => {
            if (err) throw err;
        });
    }
}

export default ProductList;