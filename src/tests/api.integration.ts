
import { AxiosResponse } from "axios";
import {Product, instanceOfProduct} from "../interfaces/product";
import Video from "../interfaces/video";
import API from "../services/api";

describe('API Service Integration', () => {

    let product_response: any = null;

    // Test API URL
    it ('Has the correct URL', () => {
        expect(API.api_rooted_products_endpoint).toEqual('https://eve.theiconic.com.au/catalog/products');
    })

    // Test that API is available
    it ('Responds with http 200', async () => {
        product_response = await API.getProducts(null);
        expect(product_response.status).toEqual(200);
    })

    // Test that API is responding with structured data that matches our interface
    it ('Product has structure matching interface', async () => {
        const embedded_object = product_response.data._embedded;
        expect(embedded_object).toBeDefined();

        const product_object: Product = embedded_object.product[0]
        expect(instanceOfProduct(product_object)).toEqual(true);
    })

     // Test that API is able to call video service
     it ('Gets a video', async () => {
        const video_response_object: AxiosResponse = await API.getVideo('AS787AA12ZLZ');
        const video_object: Video = video_response_object.data;

        expect(video_object).toBeDefined();
    })
})