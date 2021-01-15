import ProductList from "../classes/product_list";
const fs = require('fs');

// Signify mock data with __m
const __m_product_list = require("./__mock__/product_list.json");
let object = new ProductList(__m_product_list);

describe('Product List Unit', () => {
    it ('Instantiates ProductList', () => {
        expect(object.products.length).toEqual(10);
    })
    it ('Orders by video count', () => {
        // We know that in our mock data we have 2 entries with videos.
        // One in the 6th position and another in the 10th position.
        // Therefore if the ordering has worked positions 1 and 2 will have a video count of 1 and position 3 will have 0.
        const first_product = object.products[0];
        const second_product = object.products[1];
        const third_product = object.products[2];

        expect(first_product.video_count).toEqual(1);
        expect(second_product.video_count).toEqual(1);
        expect(third_product.video_count).toEqual(0);
    })
    it ('Decorates videos in the product object', async () => {
        await object.decorateVideo();
        const first_product = object.products[0];
        const second_product = object.products[1];
        const third_product = object.products[2];

        expect(first_product.video).toBeDefined();
        expect(second_product.video).toBeDefined();
        expect(third_product.video).toBeUndefined();
    })
    it ('Writes output to ./out.json', async () => {
        object.writeToFile(() => {
            fs.access('./out.json', fs.F_OK, (err: Error) => {
                if (err) {
                    fail('File does not exist');
                } else {
                    return 'success';
                }
              })
        });
    })
})
