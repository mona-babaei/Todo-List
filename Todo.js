document.getElementById('additem').addEventListener('click', function() {
  var itemInput = document.getElementById('itemInput');
  var shoppingList = document.getElementById('shpingList');
  
  var li = document.createElement('li');
  li.innerHTML = itemInput.value + ' <button class="removeItem">x</button>';
  shoppingList.appendChild(li);

  itemInput.value = '';
});

document.getElementById('shpingList').addEventListener('click', function(e) {
  if (e.target.className === 'removeItem') {
    var li = e.target.parentElement;
    li.parentElement.removeChild(li);
  } else {
    var li = e.target;
    if (li.tagName === 'LI') {
      li.classList.toggle('strike');
    }
  }
});