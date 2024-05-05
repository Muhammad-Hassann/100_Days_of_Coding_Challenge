// What is the code below going to output?

alert( null || 2 || undefined ); // 2, because 2 is first truthy value

// What will the code below output?

alert( alert(1) || 2 || alert(3) ); // The output will 1 and then 2

// What is this code going to show?

alert(1 && null && 2); // The answer is null, because null is first falsy value

// What will this code show?

alert( alert(1) && alert(2) ); // Output will be 1 and then undefined

// What will the result be?

alert( null || 2 && 3 || 4 ); // result will be 3, that's why because && presedence is higher than || 
                              // 2 && 3 both true returns the last one 3 