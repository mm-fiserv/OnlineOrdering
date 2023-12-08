class MerchantHero {
  container;
  merchName;
  phone;
  address1;
  city;
  state;
 
 
  constructor(container) {
    this.container = container;
    this.render();
  }
 
  async populateMerchantData() {
    try{
      const data = await fetch('https://dev1.dev.clover.com/oloservice/v1/merchants/R9AHC6Q4K7PX1', {
        method: 'GET',
        mode: 'cors'
      }).then(res => res.json());
      this.merchName = data.name;
      this.phone = '(' + data.phone.substring(0,3) + ')' + data.phone.substring(3,7) + '-' + data.phone.substring(8,12);
      this.address1 = data.address.address1;
      this.city = data.address.city;
      this.state= data.address.state;
    }catch(e) {
      console.log('Something went wrong :(', e);
    }
  }
 
  async render() {
   await this.populateMerchantData();
    this.container.innerHTML = `
    <div class="header-content">
      <img class="cat" alt= "cat" src="gc.png" />
      <div class="text-context">
        <h1> ${this.merchName} </h1>
        <p class="subcaption" > ${this.address1} , ${this.city} ${this.state}</p>
        <p class="subcaption">${this.phone}</p>
      </div>
      <p class="hours"><b>Open</b> 9:00 AM - 8:00 PM EST</p>
    </div>
   `;
   
  }
}
 