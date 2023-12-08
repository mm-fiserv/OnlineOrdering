class Menu {
  container;
  menuData;
 
  constructor(container) {
    this.container = container;
    this.fetchMenuData();
  }
 
  async fetchMenuData() {
    try {
      // Assuming your menu data is stored in a variable named 'menuData'
      const menuResponse = await fetch('https://dev1.dev.clover.com/oloservice/v1/merchants/R9AHC6Q4K7PX1/menu');
      this.menuData = await menuResponse.json();
      this.renderMenu();
    } catch (error) {
      console.error('Error fetching menu data:', error);
    }
  }
 
  renderMenu() {
    // Access the categories and items from menuData and render them into HTML
    const { categories, items } = this.menuData;

    let menuHTML = '<div class="menu">';

    // Loop through categories
    for (const categoryId in categories) {
      const category = categories[categoryId];
      menuHTML += `<h2>${category.name}</h2>`;

      // Loop through items in each category
      category.items.forEach(itemId => {
        const item = items.find(item => item.id === itemId);
        menuHTML += `
          <div class="menu-item">
            <div class="item-info">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
            </div>
            <span>$${(item.price / 100).toFixed(2)}</span>
          </div>
        `;
      });
    }

    menuHTML += '</div>';

    // Render the generated HTML into the container
    this.container.innerHTML = menuHTML;
  }
}