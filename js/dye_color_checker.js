function checkIt() {
  // Initialize scores
  var blue = 0;
  var green = 0;
  var purple = 0;
  var pink = 0;
  var red = 0;
  var yellow = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'blue') {
        blue++;
      }
      else if (e.value == 'green') {
        green++;
      }
      else if (e.value == 'purple') {
        purple++;
      }
      else if (e.value == 'pink') {
        pink++;
      }
      else if (e.value == 'red') {
        red++;
      }
      else if (e.value == 'yellow') {
        yellow++;
      }
    }

  }

  // Determine result
  var counts = "Blue: " + blue + ", " +
               "Green: " + green  + ", " +
               "Purple: " + purple + ", " +
               "Pink: " + pink + ", " +
               "Red: " + red + ", " +
               "Yellow: " + yellow;

  // What is the highest value?
  var max = Math.max(blue, green, purple, pink, red, yellow);

  // Form a message
  var message;

  if (max == blue) {
    heading = "You Got: Blue ";
    message = "Try midnight blue and neon blue for best vibrance. ";
    resultimage = "<img src='img/blue.jpg'>"
  }
  else if (max == green) {
    heading = "You Got: Green ";
    message = "Try emerald green and electric green for best vibrance.";
    resultimage = "<img src='img/green.jpg'>"
  }
  else if (max == purple) {
    heading = "You Got: Purple ";
    message = "Try neon purple and fuschia for best vibrance.";
    resultimage = "<img src='img/purple.jpg'>"
  }
  else if (max == pink) {
    heading = "You Got: Pink ";
    message = "Try bubblegum pink and neon pink for best vibrance.";
    resultimage = "<img src='img/pink.jpg'>"
  }
  else if (max == red) {
    heading = "You Got: Red ";
    message = "Try dark red and neon red for best vibrance.";
    resultimage = "<img src='img/red.jpg'>"
  }
  else if (max == yellow) {
    heading = "You Got: Yellow ";
    message = "Try neon yellow and electric yellow for best vibrance.";
    resultimage = "<img src='img/yellow.jpg'>"
  }

  // Display result
  var title = "Based on your answers, we can tell you what your unnatural hair color should be";

  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = heading;
  document.getElementById('result-text').innerHTML = message;
  document.getElementById('result-image').innerHTML = resultimage;


}
