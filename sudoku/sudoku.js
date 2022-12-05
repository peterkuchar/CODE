// Validate input
function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[1-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

// get Value from input
function getValue() {
  // Array of input values
  const input_1 = [
    parseInt(document.querySelectorAll(".a")[0].value|0),
    parseInt(document.querySelectorAll(".b")[0].value|0),
    parseInt(document.querySelectorAll(".c")[0].value|0),
    parseInt(document.querySelectorAll(".d")[0].value|0),
    parseInt(document.querySelectorAll(".e")[0].value|0),
    parseInt(document.querySelectorAll(".f")[0].value|0),
    parseInt(document.querySelectorAll(".g")[0].value|0),
    parseInt(document.querySelectorAll(".h")[0].value|0),
    parseInt(document.querySelectorAll(".i")[0].value|0)
  ];

  const input_2 = [
    parseInt(document.querySelectorAll(".a")[1].value|0),
    parseInt(document.querySelectorAll(".b")[1].value|0),
    parseInt(document.querySelectorAll(".c")[1].value|0),
    parseInt(document.querySelectorAll(".d")[1].value|0),
    parseInt(document.querySelectorAll(".e")[1].value|0),
    parseInt(document.querySelectorAll(".f")[1].value|0),
    parseInt(document.querySelectorAll(".g")[1].value|0),
    parseInt(document.querySelectorAll(".h")[1].value|0),
    parseInt(document.querySelectorAll(".i")[1].value|0)
  ];

  const input_3 = [
    parseInt(document.querySelectorAll(".a")[2].value|0),
    parseInt(document.querySelectorAll(".b")[2].value|0),
    parseInt(document.querySelectorAll(".c")[2].value|0),
    parseInt(document.querySelectorAll(".d")[2].value|0),
    parseInt(document.querySelectorAll(".e")[2].value|0),
    parseInt(document.querySelectorAll(".f")[2].value|0),
    parseInt(document.querySelectorAll(".g")[2].value|0),
    parseInt(document.querySelectorAll(".h")[2].value|0),
    parseInt(document.querySelectorAll(".i")[2].value|0)
  ];

  const input_4 = [
    parseInt(document.querySelectorAll(".a")[3].value|0),
    parseInt(document.querySelectorAll(".b")[3].value|0),
    parseInt(document.querySelectorAll(".c")[3].value|0),
    parseInt(document.querySelectorAll(".d")[3].value|0),
    parseInt(document.querySelectorAll(".e")[3].value|0),
    parseInt(document.querySelectorAll(".f")[3].value|0),
    parseInt(document.querySelectorAll(".g")[3].value|0),
    parseInt(document.querySelectorAll(".h")[3].value|0),
    parseInt(document.querySelectorAll(".i")[3].value|0)
  ];

  const input_5 = [
    parseInt(document.querySelectorAll(".a")[4].value|0),
    parseInt(document.querySelectorAll(".b")[4].value|0),
    parseInt(document.querySelectorAll(".c")[4].value|0),
    parseInt(document.querySelectorAll(".d")[4].value|0),
    parseInt(document.querySelectorAll(".e")[4].value|0),
    parseInt(document.querySelectorAll(".f")[4].value|0),
    parseInt(document.querySelectorAll(".g")[4].value|0),
    parseInt(document.querySelectorAll(".h")[4].value|0),
    parseInt(document.querySelectorAll(".i")[4].value|0)
  ];

  const input_6 = [
    parseInt(document.querySelectorAll(".a")[5].value|0),
    parseInt(document.querySelectorAll(".b")[5].value|0),
    parseInt(document.querySelectorAll(".c")[5].value|0),
    parseInt(document.querySelectorAll(".d")[5].value|0),
    parseInt(document.querySelectorAll(".e")[5].value|0),
    parseInt(document.querySelectorAll(".f")[5].value|0),
    parseInt(document.querySelectorAll(".g")[5].value|0),
    parseInt(document.querySelectorAll(".h")[5].value|0),
    parseInt(document.querySelectorAll(".i")[5].value|0)
  ];

  const input_7 = [
    parseInt(document.querySelectorAll(".a")[6].value|0),
    parseInt(document.querySelectorAll(".b")[6].value|0),
    parseInt(document.querySelectorAll(".c")[6].value|0),
    parseInt(document.querySelectorAll(".d")[6].value|0),
    parseInt(document.querySelectorAll(".e")[6].value|0),
    parseInt(document.querySelectorAll(".f")[6].value|0),
    parseInt(document.querySelectorAll(".g")[6].value|0),
    parseInt(document.querySelectorAll(".h")[6].value|0),
    parseInt(document.querySelectorAll(".i")[6].value|0)
  ];

  const input_8 = [
    parseInt(document.querySelectorAll(".a")[7].value|0),
    parseInt(document.querySelectorAll(".b")[7].value|0),
    parseInt(document.querySelectorAll(".c")[7].value|0),
    parseInt(document.querySelectorAll(".d")[7].value|0),
    parseInt(document.querySelectorAll(".e")[7].value|0),
    parseInt(document.querySelectorAll(".f")[7].value|0),
    parseInt(document.querySelectorAll(".g")[7].value|0),
    parseInt(document.querySelectorAll(".h")[7].value|0),
    parseInt(document.querySelectorAll(".i")[7].value|0)
  ];

  const input_9 = [
    parseInt(document.querySelectorAll(".a")[8].value|0),
    parseInt(document.querySelectorAll(".b")[8].value|0),
    parseInt(document.querySelectorAll(".c")[8].value|0),
    parseInt(document.querySelectorAll(".d")[8].value|0),
    parseInt(document.querySelectorAll(".e")[8].value|0),
    parseInt(document.querySelectorAll(".f")[8].value|0),
    parseInt(document.querySelectorAll(".g")[8].value|0),
    parseInt(document.querySelectorAll(".h")[8].value|0),
    parseInt(document.querySelectorAll(".i")[8].value|0)
  ];

  // Sum values in array
  const sum_1 = input_1.reduce((x, y) => {
    return x + y;
  }, 0);

  const sum_2 = input_2.reduce((x, y) => {
    return x + y;
  }, 0);

  const sum_3 = input_3.reduce((x, y) => {
    return x + y;
  }, 0);

  const sum_4 = input_4.reduce((x, y) => {
    return x + y;
  }, 0);

  const sum_5 = input_5.reduce((x, y) => {
    return x + y;
  }, 0);

  const sum_6 = input_6.reduce((x, y) => {
    return x + y;
  }, 0);

  const sum_7 = input_7.reduce((x, y) => {
    return x + y;
  }, 0);

  const sum_8 = input_8.reduce((x, y) => {
    return x + y;
  }, 0);

  const sum_9 = input_9.reduce((x, y) => {
    return x + y;
  }, 0);

  console.log(sum_1 + sum_2 + sum_3 + sum_4 + sum_5 + sum_6 + sum_7 + sum_8 + sum_9)
  
  //check if sum of row == 45 (1+2+3+4+5+6+7+8+9)
  if (sum_1 == 45) {
    console.log("hura")
  } 
  else if ( sum_1 < 45) {
    console.log("zatial ok")
  }
  else {
    console.log("joj nedobre")
  }

  return input_1, input_2, input_3, input_4, input_5, input_6, input_7, input_8, input_9, sum_1, sum_2, sum_3, sum_4, sum_5, sum_6, sum_7, sum_8, sum_9
  }

var arr = getValue();

// Check if an array contains duplicates

function containsDuplicates(array) {
  if (array.length !== new Set(array).size) {
    return true;
  }

  return false;
}

function doMagic() {
  validate();
  getValue();
  containsDuplicates(arr);
}

