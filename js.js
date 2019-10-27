// Half Adder
function halfAdder(a, b){
  const sum = xor(a,b);
  const carry = and(a,b);
  return [sum, carry];
}

// Full Adder
function fullAdder(a, b, carry){
  halfAdd = halfAdder(a,b);
  const sum = xor(carry, halfAdd[0]);
  carry = and(carry, halfAdd[0]);
  carry = or(carry, halfAdd[1]);
  return [sum, carry];
}

// Logic Gates
function xor(a, b){return (a === b ? 0 : 1);}
function and(a, b){return a == 1 && b == 1 ? 1 : 0;}
function or(a, b){return (a || b);}

// Main Function
function addBinary(a, b){
  let sum = '';
  let carry = '';
  for(var i = a.length-1;i>=0; i--){
    if(i == a.length-1){
      //half add the first pair
      const halfAdd1 = halfAdder(a[i],b[i]);
      sum = halfAdd1[0]+sum;
      carry = halfAdd1[1];
    }else{
      //full add the rest
      const fullAdd = fullAdder(a[i],b[i],carry);
      sum = fullAdd[0]+sum;
      carry = fullAdd[1];
    }
  }

  return carry ? carry + sum : sum;
}

function JsOnFunction(){
  var A = document.getElementById("inputA").value;
  var B = document.getElementById("inputB").value;
  // console.log("A : ",A);
  // console.log("B : ",B);
  // var binary = addBinary("00000000", "00000000");
  var binary = addBinary(A, B);
  // console.log(binary);
  var binary41 = binary.slice(0, 4);
  var binary42 = binary.slice(4, 8);
  document.getElementById("textBinary41").innerHTML = binary41;
  document.getElementById("textBinary42").innerHTML = binary42;
  // console.log(binary41);
  // console.log(binary42);

  var hexa = parseInt(binary, 2).toString(16).toUpperCase();
  if(hexa <= 9){
    hexa = hexa.toString();
    hexa = "0" + hexa;
  }
  if(hexa == "00"){
    document.getElementById("textHex").classList.add("text-danger");
    document.getElementById("divBin").classList.add("text-danger");
  }

  document.getElementById("textHex").innerHTML = hexa;
  // console.log(hexa);
}