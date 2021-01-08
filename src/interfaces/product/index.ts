import Image from "./image";
import Marketing from "./marketing";
import Shop from "./shop";

interface Product {
    video_count: number,
    price: number,
    markdown_price: number,
    special_price: number,
    returnable: boolean,
    final_sale: boolean,
    stock_update?: string,
    final_price: number,
    sku: string,
    name: string,
    ribbon: string,
    messaging: {
        marketing: Marketing[],
        operational?: any
    },
    color_name_brand: string,
    short_description: string,
    shipment_type: string,
    color_name: string,
    color_hex: string,
    cart_price_rules?: string,
    attributes?: any,
    simples?: string,
    sustainability?: string,
    link: string,
    activated_at: Date,
    return_policy_message: {
        message: string,
        bold_substring: string
    },
    categories_translated: string,
    category_path?: any,
    category_ids?: any,
    related_products?: any,
    image_products?: any,
    attribute_set_identifier: string,
    supplier: string,
    wannaby_id?: any,
    citrus_ad_id?: any,
    associated_skus: string,
    size_guide_url: string,
    related: {
        count: number,
        label: string,
        visible: boolean,
        message?: any
    },
    variants: {
        count: number,
        label: string,
        visible: boolean,
        message?: any
    },
    campaign_details?: any,
    _embedded: {
        brand: {
            id: number,
            name: string,
            url_key: string,
            image_url: string,
            banner_url?: any,
            _links: {
                self: {
                    href: string
                }
            }
        },
        gender: {
            id: number,
            name: string,
            _links: {
                self: {
                    href: string
                }
            }
        },
        shops: Shop[],
        images: Image[]
    },
    _links: {
        self: {
            href: string
        }
    }
}

export default Product