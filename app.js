class OnlineOrderApp {
  header;
  merchantHero;
  cart;
  menu;

  constructor() {
    this.cart = new ShoppingCart(document.getElementById('shopping-cart'));
    this.header = new AppHeader(document.getElementById('app-header'));
    this.merchantHero = new MerchantHero(document.getElementById('merchant-hero'));
    this.menu = new Menu(document.getElementById('menu'));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new OnlineOrderApp();
});
