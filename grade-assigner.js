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

for( score=60 ; score =< 100; score++){
    let abc = assignGrade(score)
    console.log( `for scoring ${score}, you get an C`);

}