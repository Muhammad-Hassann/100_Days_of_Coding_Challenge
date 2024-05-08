// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }

//   Will the function work differently if else is removed?  

  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }

//   Is there any difference in the behavior of these two variants?

//   Ans: NO, because if condition is true functions return the value and after returning any
//        value, the execution of function is stoped and not executed any other code. And if it
//        is not true then run the second return statement, that describe that we don't need to
//        add else.   