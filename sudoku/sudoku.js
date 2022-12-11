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

  const a1 = localStorage.setItem(document.getElementById("a1").value, input_1[0]);
  const a2 = localStorage.setItem(document.getElementById("a2").value, input_1[1]);
  const a3 = localStorage.setItem(document.getElementById("a3").value, input_1[2]);
  const a4 = localStorage.setItem(document.getElementById("a4").value, input_1[3]);
  const a5 = localStorage.setItem(document.getElementById("a5").value, input_1[4]);
  const a6 = localStorage.setItem(document.getElementById("a6").value, input_1[5]);
  const a7 = localStorage.setItem(document.getElementById("a7").value, input_1[6]);
  const a8 = localStorage.setItem(document.getElementById("a8").value, input_1[7]);
  const a9 = localStorage.setItem(document.getElementById("a9").value, input_1[8]);
  
  const b1 = localStorage.setItem(document.getElementById("b1").value, input_2[0]);
  const b2 = localStorage.setItem(document.getElementById("b2").value, input_2[1]);
  const b3 = localStorage.setItem(document.getElementById("b3").value, input_2[2]);
  const b4 = localStorage.setItem(document.getElementById("b4").value, input_2[3]);
  const b5 = localStorage.setItem(document.getElementById("b5").value, input_2[4]);
  const b6 = localStorage.setItem(document.getElementById("b6").value, input_2[5]);
  const b7 = localStorage.setItem(document.getElementById("b7").value, input_2[6]);
  const b8 = localStorage.setItem(document.getElementById("b8").value, input_2[7]);
  const b9 = localStorage.setItem(document.getElementById("b9").value, input_2[8]);

 


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

function saveValue(e) {
  var id = e.id;
  var value = e.value;
  localStorage.setItem(id, value);
}

function getSavedValue(v) {
  if (!localStorage.getItem(v)) {
    return "";
  }
  return localStorage.getItem(v)
}

// Check if an array contains duplicates

// function containsDuplicates(array) {
//   if (array.length !== new Set(array).size) {
//     return true;
//   }

//   return false;
// }

function updateHTML(){
  document.getElementById("a1").setAttribute('value', a1.value);
  document.getElementById("a2").setAttribute('value', a2.value);
  document.getElementById("a3").setAttribute('value', a3.value);
  document.getElementById("a4").setAttribute('value', a4.value);
  document.getElementById("a5").setAttribute('value', a5.value);
  document.getElementById("a6").setAttribute('value', a6.value);
  document.getElementById("a7").setAttribute('value', a7.value);
  document.getElementById("a8").setAttribute('value', a8.value);
  document.getElementById("a9").setAttribute('value', a9.value);  
}

function doMagic() {
  validate();
  getValue();
  console.log(a1.value);
  console.log(b1.value);
  updateHTML();
  //containsDuplicates(arr);
}