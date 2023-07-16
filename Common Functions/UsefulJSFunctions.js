//These useful functions have previously helped me in App Script Tools particulary related to Torn

//Function to see if the either the string is empty or has a special character
function checkFaultyString(args) {
  let parsed = args;
  if (typeof args == "undefined" || args === null || args == "") {
    parsed = "N/A";
  } else if (args.includes(";")) {
    let decode = XmlService.parse('<d>' + args + '</d>');
    parsed = decode.getRootElement().getText();
  }
  return parsed;
}

// sort array of keys/timestamps in ascending order to give you the largest key/stamp
let sorted_array = inputArray.sort(function(a, b) {
  return a - b;
});
let last_saved_key = sorted_array[sorted_array.length - 1];
