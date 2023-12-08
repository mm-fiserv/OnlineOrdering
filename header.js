class AppHeader {
  container;
 
  constructor(container) {
    this.container = container;
    this.render();
  }
 
  render() {
    this.container.innerHTML = `
      <img class="clover" alt="clover" src="./img/clover-logo.svg" />
      <img class="cart" alt="cart" src="./img/cart-icon.svg" />

    `;
  }
}