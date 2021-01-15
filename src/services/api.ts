import axios from "axios";
// API service used to communicate with the API in an encapsulated manor
class API {
    // Initialize static readonly (const) class members
    static readonly api_root_url: string = "https://eve.theiconic.com.au";
    static readonly api_products_endpoint: string = "/catalog/products";
    static readonly api_rooted_products_endpoint: string = `${API.api_root_url}${API.api_products_endpoint}`;

    // Get a list of products from the API that matches the flags sent from /src/index.ts
    static getProducts(query: Record<string, string> | null) {
        const url: URL = new URL(API.api_rooted_products_endpoint);
        if (query !== null)
            url.search = new URLSearchParams(query).toString();
        return axios.get(url.toString())
    }

    // Get a video from the API that match the SKU sent from /src/classes/product_list.ts
    static getVideo(sku: string) {
        return axios.get(`${API.api_rooted_products_endpoint}/${sku}/videos`)
    }
}

export default API;