// ENUMS

enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
  }
  
  const today: Days = Days.Wednesday;
  const tomorrow: Days = Days.Thursday
  
  console.log(`Today is ${Days[today]}`);
  console.log(`Tomorrow is ${Days[tomorrow]}`);
  