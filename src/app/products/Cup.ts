export class Cup {
    name!: string
    desc!: string
    price!: number
    imageLink!: string
    buyLink!: string
    quantity!: number
    id!: number

    constructor (_name: string, _desc: string, _price: number, _imageLink: string, _buyLink: string, _quantity: number) {
        this.name = _name
        this.desc = _desc
        this.price = _price
        this.imageLink = _imageLink
        this.buyLink = _buyLink
        this.quantity = _quantity
    }
}

/**
 * @type {Cup[]}
 */
export var cups: Cup[] = [
    {
        name: "Guava Cup",
        desc: "This cup is made out of Guava.",
        price: 40,
        imageLink: "../../assets/uiimages/Guava.png",
        buyLink: "",
        quantity: 0,
        id: 0
    }
];