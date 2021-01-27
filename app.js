const phoneMinusBtn = document.querySelector('.phone-minus');
const phonePlusBtn = document.querySelector('.phone-plus');
const caseMinusBtn = document.querySelector('.case-minus');
const casePlusBtn = document.querySelector('.case-plus');
const removePhone = document.getElementById('phoneItem');
const removeCase = document.getElementById('caseItem');

//Phone Amount Increment
phonePlusBtn.addEventListener('click', function () {
    let phoneItemCount = Number(document.querySelector('.phoneItemCount').value);
    phoneItemCount++;

    document.querySelector('.phoneItemCount').value = phoneItemCount;

    let phonePrice = (document.querySelector('.phone-price').textContent = phoneItemCount * 1219);
    totalPrice();
});

// Phone Amount Decrement
phoneMinusBtn.addEventListener('click', function () {
    let phoneItemCount = Number(document.querySelector('.phoneItemCount').value);
    phoneItemCount--;
    if (phoneItemCount < 0) {
        phoneItemCount = 0;
    }
    document.querySelector('.phoneItemCount').value = phoneItemCount;

    let phonePrice = (document.querySelector('.phone-price').textContent = phoneItemCount * 1219);
    totalPrice();
});

// Case Item Increment
casePlusBtn.addEventListener('click', function () {
    let caseItemCount = Number(document.querySelector('.caseItemCount').value);
    caseItemCount++;

    document.querySelector('.caseItemCount').value = caseItemCount;

    let casePrice = (document.querySelector('.case-price').textContent = caseItemCount * 59);
    totalPrice();
});

// Case Item Increment
caseMinusBtn.addEventListener('click', function () {
    let caseItemCount = Number(document.querySelector('.caseItemCount').value);
    caseItemCount--;
    if (caseItemCount < 0) {
        caseItemCount = 0;
    }
    document.querySelector('.caseItemCount').value = caseItemCount;

    let casePrice = (document.querySelector('.case-price').textContent = caseItemCount * 59);
    totalPrice();
});

// Remove Case Item From Cart
document.getElementById('removePhoneBtn').addEventListener('click', function () {
    document.querySelector('.phoneItemCount').value = 0;
    document.querySelector('.phone-price').innerText = 0;
    removePhone.style.display = 'none';
    totalPrice();
});

// Remove Case Item From Cart
document.getElementById('removeCaseBtn').addEventListener('click', function () {
    document.querySelector('.caseItemCount').value = 0;
    document.querySelector('.case-price').innerText = 0;
    removeCase.style.display = 'none';
    totalPrice();
});

//Total Price Count
function totalPrice() {
    let phonePrice = Number(document.querySelector('.phone-price').textContent);
    let casePrice = Number(document.querySelector('.case-price').textContent);
    let subtotal = (document.querySelector('.subtotal').textContent = phonePrice + casePrice);
    let vat = Number(document.querySelector('.vat').textContent);
    let total = (document.querySelector('.total').textContent = subtotal + vat);
}
