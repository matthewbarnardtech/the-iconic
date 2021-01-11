// Shop interface referenced in product interface
interface Shop {
    is_default: boolean,
    name: string,
    _links: {
       self: {
          href: string
       }
    }
 }

export default Shop