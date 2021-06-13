export class Order {

    name!: string;
    category!: string;
    price!: number;

    setName(name: string): void  {
        this.name = name;
    }

    setCategory(category: string): void  {
        this.category = category;
    }

    setPrice(price: number): void  {
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getCategory(): string {
        return this.category;
    }

    getPrice(): number {
        return this.price;
    }

    constructor(name: string, category: string, price: number) {
        this.name = name;
        this.category = category;
        this.price = price;
    }

}
