
   
    function fun1(x1, y1) {
        var x1 = parseInt(document.getElementById("Fun1").value);
        var y1 = parseInt(document.getElementById("Fun2").value);
        if (x1 > y1) {
          alert("the number " + x1 + " Is bigger than  " + y1);
  
        } else if (y1 > x1) {
          alert("the number " + y1 + " Is bigger than  " + x1);
        } else {
          alert(" Equals ");
        }
      }
  
      function fun2(arr1, arr2, arr3) {
        var arr1 = parseInt(document.getElementById("arrg1").value);
        var arr2 = parseInt(document.getElementById("arrg2").value);
        var arr3 = parseInt(document.getElementById("arrg3").value);
        var product = arr1 * arr2 * arr3;
        if (product > 0) {
          alert("The multiplication sign is + ");
  
  
        } else {
          alert("The multiplication sign is - ");
        }
      }
  
      function fun3(num1, num2, num3) {
        var num1 = parseInt(document.getElementById("number1").value);
        var num2 = parseInt(document.getElementById("number2").value);
        var num3 = parseInt(document.getElementById("number3").value);
        var max, mid, min;
        if (num1 > num2 && num1 > num3) {
          max = num1;
          if (num2 > num3) {
            mid = num2;
          } else {
            mid = num3;
            min = num2;
          }
  
        } else if (num2 > num1 && num2 > num3) {
          max = num2;
          if (num1 > num3) {
            mid = num1;
          } else {
            mid = num3;
            min = num1;
          }
  
        } else if (num3 > num1 && num3 > num2) {
          max = num3;
          if (num1 > num2) {
            mid = num1;
          } else {
            mid = num2;
            min = num1;
          }
        }
        alert("After sorting  " + max + "  " + mid + "  " + min);
      }
  
  
  
      function fun4(n1, n2, n3, n4, n5) {
        var n1 = parseInt(document.getElementById("no1").value);
        var n2 = parseInt(document.getElementById("no2").value);
        var n3 = parseInt(document.getElementById("no3").value);
        var n4 = parseInt(document.getElementById("no4").value);
        var n5 = parseInt(document.getElementById("no5").value);
        var max_num;
        if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
          max_num = n1;
        } else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
          max_num = n2;
        } else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
          max_num = n3;
        } else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
          max_num = n4;
        } else if (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4) {
          max_num = n5;
        }
        alert("The biggest number is  " + max_num);
  
      }
  
  
  
  
      function fun5(x, y) {
        var x = parseInt(document.getElementById("function1").value);
        var y = parseInt(document.getElementById("function2").value);
        if (x > y) {
          alert(" Hello World !");
  
        } else
          alert(" GoodBye !");
      }