import Product from "../interfaces/product";
declare class ProductList {
    products: Product[];
    constructor(product_list: Product[]);
    decorateVideo(): Promise<void>;
    order(): void;
    writeToFile(): void;
}
export default ProductList;
