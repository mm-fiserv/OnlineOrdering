class ShoppingCart {
  container;
  items;

  constructor(container) {
    this.container = container;
    this.items = [];
    this.render();
  }

  addItem(item) {
    this.render();
  }

  removeItem(itemId) {

    this.render();
  }

  get total() {
    return 0;
  }

  render() {
    this.container.innerHTML = `<div>!! --Shopping Cart Component-- !!</div>`;
  }

}
