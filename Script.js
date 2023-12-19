// Script.js
let mainContainer = document.getElementById('Main');

let newSection = document.createElement('section');
newSection.id = 'mySection';

// Create the div to hold the hr lines and text
let topDiv = document.createElement('article');
topDiv.id = 'TopDiv';

// Append the topDiv to the section
newSection.appendChild(topDiv);

// Create the aside container
let container = document.createElement('aside');
container.id = 'myarticle';

// Append the aside container to the section
newSection.appendChild(container);

// Append the section to the main container
mainContainer.appendChild(newSection);

// Create a container for products
let productContainer = document.createElement('div');
productContainer.id = 'productContainer';

// Append the productContainer to the section
newSection.appendChild(productContainer);

let products = [
    { pair: 1, cost: 195, discount: 50 },
    { pair: 2, cost: 345, discount: 45 , description:'MostPopular' },
    { pair: 3, cost: 528, discount: 60 }
];

// Map the array to create a card for each product
products.forEach(product => {
    // Create a card div
    let card = document.createElement('div');
    card.id = 'card';
    // Set card content
    card.innerHTML = `  
     <div id='left-div'>
    <div id='radio'>
    <input type="radio" id="input-radio" name="color" value="green">
    <div id='pair-cost'>
    <p> ${product.pair} Pair</p>
    <p>DDK ${product.cost}.00</p>
    </div>
    </div>
    <div class="grid-container">
    <div id='size'>
    <label for="sizeSelect1x">1x</label>
    <label for="sizeSelect2x">2x</label>
    </div>
    <div id='hide' class="grid">
        <!-- 1x Section -->
        <div class="section">
            <label for="sizeSelect1x">Size</label>
            <select id="sizeSelect1x">
                <option value="small">S</option>
                <option value="medium">M-size</option>
                <option value="large">Large</option>
            </select>
            <select id="sizeSelect2x">
            <option value="small">S</option>
            <option value="medium">Smael</option>
            <option value="large">Large</option>
        </select>
        </div>

        <!-- 2x Section -->
        <div class="section">
        <label for="colorSelect2x">Color</label>
           
            <select id="colorSelect1x">
                <option value="red">Color</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <select id="colorSelect2x">
                <option value="red">Color</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
        </div>
    </div>    
</div>

   </div>
   <div>
   <p id='Most-popular'>${product.description || ''}</p>
      <p id='discount'>${product.discount}% OFF</p>
   </div>
    `;
    productContainer.appendChild(card);
});
let SecondDiv=document.createElement('article')
SecondDiv.innerHTML=`
  <div id='SecondDiv'>
   <p id='Free-2day-text'>Free 2 Day Shipping</p>
   <p>Total : DDK 360.00</p>
  </div>
`
newSection.appendChild(SecondDiv)

let ThirdDiv=document.createElement('button')
ThirdDiv.textContent='+ Add to Cart'
ThirdDiv.id='Button',

newSection.appendChild(ThirdDiv)

let PoweredPumper=document.createElement('p')
PoweredPumper.textContent='@ Powered by Pumper'
PoweredPumper.id='PoweredPumper'
newSection.appendChild(PoweredPumper)