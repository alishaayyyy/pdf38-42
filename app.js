// next
function pow(a, b) {
  var result = 1;
  while (b > 0) {
      result *= a;
      b--;
  }
  return result;
}

document.write(pow(2, 3));

// // next 

var year = prompt("Enter a year:");
year = parseInt(year);

if (!isNaN(year)) {
    var isLeap = false;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isLeap = true; 
            }
        } else {
            isLeap = true;
        }
    }
    if (isLeap) {
        document.write('<br>'+ year + " is a leap year.");
    } else {
        document.write('<br>'+ year + " is not a leap year.");
    }
} else {
    document.write("Please enter a valid year.");
}



// next
function half(a, b, c) {
  return (a + b + c) / 2; 
}

function area(a, b, c) {
  var s = half(a, b, c); 
  return s * (s - a) * (s - b) * (s - c);
}


var triangleAreaSquared = area(3, 8, 6);
document.write('<br>'+ "Squared area of triangle is: " + triangleAreaSquared);


// next

function calculateAverage(marks) {
    var total = 0;
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total / marks.length;
}

function calculatePercentage(marks) {
    
    var totalMarks = 0;
    for (var i = 0; i < marks.length; i++) {
        totalMarks += marks[i];
    }
    var  maxMarks = marks.length * 100; 
    return (totalMarks / maxMarks) * 100;
}

function main() {
    
    var  marks = [];
    for (var i = 1; i <= 3; i++) {
        var  mark = parseFloat(prompt("Enter marks for subject " + i + ":"));
        marks.push(mark);
    }

    var  average = calculateAverage(marks);
    var percentage = calculatePercentage(marks);

    console.log("Average Marks: " + (Math.round(average * 100) / 100));
    console.log("Percentage: " + (Math.round(percentage * 100) / 100) + "%");
}

main();

// next
function deleteVowels(sentence) {
    var vowels = 'aeiouAEIOU';
    var result = '';
  
    for (var i = 0; i < sentence.length; i++) {
      if (vowels.indexOf(sentence[i]) === -1) {
        result += sentence[i];
      }
    }
  
    return result;
  }
  
  
  console.log(deleteVowels("Hello World"));

//   next
function count(text) {
    var count = 0;
    for (var i = 0; i < text.length - 1; i++) {
      switch (text.substring(i, i + 2).toLowerCase()) {
        case 'ea':
        case 'ui':
        case 'oi':
        case 'ou':
        case 'ae':
        case 'iu':
        case 'uo':
        case 'io':
          count++;
          break;
        default:
          break;
      }
    }
    return count;
  }
  
  console.log(count("Please read this application and give me gratuity"));

//   next

function kmToMeters(km) {
    return km * 1000;
}
function kmToFeet(km) {
    return km * 3280.84;
}


function kmToInches(km) {
    return km * 39370.1;
}

function kmToCentimeters(km) {
    return km * 100000;
}

function convertDistance() {
    var km = prompt("Enter distance in km:");
    var meters = kmToMeters(km);
    var feet = kmToFeet(km);
    var inches = kmToInches(km);
    var centimeters = kmToCentimeters(km);

    console.log(km + " km is equal to:");
    console.log(meters + " meters");
    console.log(feet + " feet");
    console.log(inches + " inches");
    console.log(centimeters + " centimeters");
}

convertDistance();

// next

function pay(hoursWorked) {
    var  overtimeRate = 12.00;
    var  standardHours = 40;
    
    if (hoursWorked <= standardHours) {
      return 0;
    } else {
      var overtimeHours = hoursWorked - standardHours;
      return overtimeHours * overtimeRate;
    }
  }
  
  function EmployeePay() {
    var  hoursWorked = prompt("Enter hours worked:");
    var  overtimePay = pay(hoursWorked);
    
    console.log("Overtime pay: Rs." + overtimePay);
  }
  

  EmployeePay();

//   next

function calculateCurrencyNotes(amount) {
    var notes100 = Math.floor(amount / 100);
    var remainingAmount = amount % 100;
    var notes50 = Math.floor(remainingAmount / 50);
    var remainingAmount = remainingAmount % 50;
    var notes10 = Math.floor(remainingAmount / 10);
    
    return {
    100: notes100,
    50: notes50,
    10: notes10
    };
    }
    
 
    function withdrawAmount() {
    var amount = prompt("Enter amount to withdraw (in hundreds):");
    amount = parseInt(amount);
    var notes = calculateCurrencyNotes(amount);
    
    console.log("Currency Notes:");
    console.log("100s: " + notes[100]);
    console.log("50s: " + notes[50]);
    console.log("10s: " + notes[10]);
    }
    

    withdrawAmount();