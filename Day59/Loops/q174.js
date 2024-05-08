// For every loop iteration, write down which value it outputs and then compare it with the solution.

// Both loops alert the same values, or not?

let i = 0;
while (++i < 5) alert( i );

while (i++ < 5) alert( i );

// First loop returns 1, 2, 3, 4 and loop stop
// because prefix first increase the value and then check the condition

// Second loop returns 1, 2, 3, 4, 5 and loop stop
// because postfix first check the condition and then increase