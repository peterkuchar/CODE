function increaseValue() {
    var value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = (document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
  }