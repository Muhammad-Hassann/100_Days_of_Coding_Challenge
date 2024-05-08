// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
}

// Last alert is 1, 
// because every time loop run, value of i decrease 3, 2, 1 
// and when it reach to 0 it so loop stop 
// because 0 in boolean equals to false