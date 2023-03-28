// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;

  const subtotal = priceValue * quantityValue;

  let subtotalHtml = product.querySelector('.subtotal span');

  subtotalHtml.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  let products = document.getElementsByClassName('product');

  let total = 0;

  // end of test

  // ITERATION 2
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const td = target.parentNode;
  const tr = td.parentNode; // the row to be removed
  tr.parentNode.removeChild(tr);
}

// ITERATION 5

function createProduct() {
  const tbodyRef = document
    .getElementById('cart')
    .getElementsByTagName('tbody')[0];
  const inputs = document
    .getElementsByTagName('tfoot')[0]
    .getElementsByTagName('input');
  console.log(inputs);
  const row = tbodyRef.insertRow();
  row.className = 'product';
  row.innerHTML = `<td class="name"><span>${inputs[0].value}</span></td><td class="price">$<span>${inputs[1].value}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`;
  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
