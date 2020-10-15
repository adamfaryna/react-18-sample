import { formatPrice } from "../utils/utils";

class Coin {
    constructor(public symbol: string, public currentPrice: number, public openingPrice: number) { }

    get priceInc() {
        const priceInc = this.openingPrice - this.currentPrice;
        return (priceInc / this.openingPrice) * 100;
    }

    getCurrentPrice = (currency: string): string => formatPrice(this.currentPrice, currency)

    getOpeningPrice = (currency: string): string => formatPrice(this.openingPrice, currency)

    getPriceIncrease = (currency: string): string => `${this.priceInc.toFixed(3)}% (${formatPrice(this.priceInc, currency)})`;
}

export default Coin;