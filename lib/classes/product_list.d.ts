import Product from "../interfaces/product";
declare class ProductList {
    products: Product[];
    constructor(product_list: Product[]);
    decorateVideo(): Promise<void>;
    order(): void;
}
export default ProductList;
