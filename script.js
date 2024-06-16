const products = [
  { name: 'Arduino', price: 24.99, image: 'https://i.ibb.co/WKYLMJ2/download.webp', description: 'Arduino is an open-source electronics platform based on easy-to-use hardware and software.' },
  { name: 'GSM', price: 30.99, image: 'https://i.ibb.co/HtqgknH/download-1.webp', description: 'GSM (Global System for Mobile Communications) is a standard developed to describe protocols for second generation (2G) digital cellular networks.' },
  { name: 'ESP32', price: 14.99, image: 'https://i.ibb.co/FwYxCq8/download.jpg', description: 'The ESP32 is a series of low-cost, low-power system on a chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth.' },
  { name: 'DC Motor', price: 9.99, image: 'https://i.ibb.co/sVMJdJd/1-1.jpg', description: 'A DC motor is any of a class of rotary electrical motors that converts direct current electrical energy into mechanical energy.' },
  { name: 'Stepper Motor', price: 15.99, image: 'https://i.ibb.co/Lgq6J22/61mko-Di1vl-L-AC-UF1000-1000-QL80-FMwebp.webp', description: 'A stepper motor is a brushless DC electric motor that divides a full rotation into a number of equal steps.' },
  { name: 'GSM 800L', price: 25.99, image: 'https://i.ibb.co/HqG2HfM/download-1.jpg', description: 'GSM 800L module is used for interfacing with mobile networks for sending and receiving messages.' },
  { name: '4 Way Relay', price: 12.99, image: 'https://i.ibb.co/Gxb3X60/5.jpg', description: 'A 4 Way Relay Module is an interface board that allows you to control high voltage and/or high current devices.' },
  { name: 'Raspberry Pi', price: 35.99, image: "https://i.ibb.co/NSj3ytK/shopping.webp", description: 'Raspberry Pi is a series of small single-board computers developed to promote the teaching of basic computer science.' },
  { name: 'Breadboard', price: 5.99, image:'https://i.ibb.co/k0qtXV7/download-2.webp', description: 'A breadboard is a construction base for prototyping of electronics.' },
  { name: 'Jumper Wires', price: 2.99, image: "https://i.ibb.co/4F6T5XW/download-3.webp", description: 'Jumper wires are used to make connections between the components on a breadboard or other prototype.' },
  { name: 'LCD Display', price: 12.99, image: "https://i.ibb.co/zQFBgDs/download-5.webp", description: 'An LCD display is a flat-panel display that uses the light-modulating properties of liquid crystals.' },
  { name: 'Temperature Sensor', price: 8.99, image: "https://i.ibb.co/JrVSxmX/download-4.webp", description: 'A temperature sensor is a device that collects data about temperature from a source and converts it to a form that a device can understand.' },
  { name: 'Ultrasonic Sensor', price: 11.99, image: "https://i.ibb.co/86mb78S/download-3.jpg", description: 'An ultrasonic sensor is a device that can measure the distance to an object by using sound waves.' },
  { name: 'LED', price: 0.99, image: "https://i.ibb.co/c3NrrjG/shopping-1.webp", description: 'A light-emitting diode (LED) is a semiconductor light source that emits light when current flows through it.' },
  { name: 'Servo Motor', price: 14.99, image: "https://i.ibb.co/N2nQBtZ/download-2.jpg", description: 'A servo motor is a rotary actuator that allows for precise control of angular position.' },
  { name: 'Resistors', price: 1.99, image: "https://i.ibb.co/GTrH2Gq/download-4.jpg", description: 'A resistor is a passive electrical component with the primary function to limit the flow of electric current.' },
  { name: 'Capacitors', price: 2.99, image: "https://i.ibb.co/QPKLWcn/images.jpg", description: 'A capacitor is a device that stores electrical energy in an electric field.' },
  { name: 'Transistors', price: 3.99, image: "https://i.ibb.co/1ZVPGJH/images-1.jpg", description: 'A transistor is a semiconductor device used to amplify or switch electronic signals and electrical power.' },
  { name: 'Diodes', price: 1.99, image: "https://i.ibb.co/DWc58rG/download-5.jpg", description: 'A diode is a semiconductor device that allows current to flow in one direction only.' },
  { name: 'Inductors', price: 2.99, image: "https://i.ibb.co/j3BqMNK/download.png", description: 'An inductor is a passive electronic component that stores energy in the form of a magnetic field.' },
  { name: 'Microphone Module', price: 6.99, image: "https://i.ibb.co/dpjkKL4/download-6.jpg", description: 'A microphone module is an electronic device used to capture audio signals and convert them to an electrical signal.' },
  { name: 'Vibration Sensor', price: 4.99, image: "https://i.ibb.co/St674s5/download-7.jpg", description: 'A vibration sensor is a device that measures the amount and frequency of vibration in a given system, machine, or piece of equipment.' },
  { name: 'Gas Sensor', price: 9.99, image: "https://i.ibb.co/sjkMgKC/download-8.jpg", description: 'A gas sensor is a device that detects the presence of gases in an area, often as part of a safety system.' },
  { name: 'IR Sensor', price: 5.99, image: "https://i.ibb.co/w7qy1Pr/download-9.jpg", description: 'An infrared (IR) sensor is an electronic device that measures and detects infrared radiation in its surrounding environment.' },
  { name: 'Bluetooth Module', price: 7.99, image: "https://i.ibb.co/r47vzYr/download-10.jpg", description: 'A Bluetooth module is a device that enables Bluetooth communication between various devices.' },
];

const cart = [];

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function addToCart(productName, productPrice) {
  const product = cart.find(item => item.name === productName);
  if (product) {
    product.quantity += 1;
  } else {
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById('cartCount');
  const cartList = document.getElementById('cartList');
  const totalAmount = document.getElementById('totalAmount');

  cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);
  cartList.innerHTML = cart.map(item => `<li>${item.name} - ${item.quantity} x GH${item.price.toFixed(2)} <button onclick="removeFromCart('${item.name}')">Remove</button></li>`).join('');
  totalAmount.innerText = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

function removeFromCart(productName) {
  const productIndex = cart.findIndex(item => item.name === productName);
  if (productIndex > -1) {
    cart.splice(productIndex, 1);
  }
  updateCart();
}

function clearCart() {
  cart.length = 0;
  updateCart();
}

function searchProducts() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput) || product.description.toLowerCase().includes(searchInput));
  displayProducts(filteredProducts, 'productList');
}

function displayProducts(productArray, elementId) {
  const productList = document.getElementById(elementId);
  productList.innerHTML = productArray.map(product => `
    <div class="product-card" onclick="showProductDetail('${product.name}')">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p class="price">GH${product.price.toFixed(2)}</p>
      <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price}); event.stopPropagation();">Add to Cart</button>
    </div>
  `).join('');
}

function showProductDetail(productName) {
  const product = products.find(item => item.name === productName);
  const productDetailContent = document.getElementById('productDetailContent');
  productDetailContent.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p class="price">GH${product.price.toFixed(2)}</p>
    <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
  `;
  showPage('productDetail');
}

document.addEventListener('DOMContentLoaded', () => {
  displayProducts(products, 'productList');
  displayProducts(products.slice(0, 8), 'homeProductList'); // Display first 8 products on the home page
});
