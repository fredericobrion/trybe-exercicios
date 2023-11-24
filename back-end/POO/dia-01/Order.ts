import Client from './Client';
import orderItem from './OrderItem';

export default class Order {
  private _client: Client;
  private _items: orderItem[];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(
    client: Client,
    items: orderItem[],
    paymentMethod: string,
    discount: number
  ) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get items(): orderItem[] {
    return this._items;
  }

  set items(value: orderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo menos 1 item');
    }
    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser negativo');
    }
    this._discount = value;
  }

  calculateTotal(): number {
    const total = this._items.reduce((acc, curr) => acc + curr.price, 0);

    return total;
  }

  calculateTotalWithDiscount(): number {
    const total = this.calculateTotal();

    return total * (1 - this._discount);
  }
}
