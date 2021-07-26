function assignGrade(score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "E";
    }
  }

for( num=60 ; num <= 100; num++){

    console.log( `For scoring ${num} points, you get a grade` + assignGrade(num) );

}