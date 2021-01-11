declare class API {
    static readonly api_root_url: string;
    static readonly api_products_endpoint: string;
    static readonly api_rooted_products_endpoint: string;
    static getProducts(query: Record<string, string>): Promise<import("axios").AxiosResponse<any>>;
    static getVideo(sku: string): Promise<import("axios").AxiosResponse<any>>;
}
export default API;
