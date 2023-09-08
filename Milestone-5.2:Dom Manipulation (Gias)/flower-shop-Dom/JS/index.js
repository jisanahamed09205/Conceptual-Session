let total = 0;
function handleClick(mineTarget){
    const selectedItemsContainer = document.getElementById('selected-items');
    const itemName = mineTarget.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    // li.style.listStyle = 'none';
    li.style.listStyleType = 'decimal';
    li.innerText = itemName;
    selectedItemsContainer.appendChild(li);
    // Total price side

    const price = mineTarget.parentNode.childNodes[5].innerText.split(' ')[1];
    total = parseFloat(total) + parseFloat(price);
    document.getElementById('total').innerText=total;
}