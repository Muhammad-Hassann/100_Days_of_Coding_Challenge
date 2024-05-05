// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' ); // Will execute, because -1 returns true
if (-1 && 0) alert( 'second' ); // Not execute, because 0 is false
if (null || -1 && 1) alert( 'third' ); // Execute, because -1 and 1 both are true
