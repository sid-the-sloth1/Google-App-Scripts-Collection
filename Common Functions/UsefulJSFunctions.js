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

//Remove html from strings
function removeHtml(inputString) {
  return inputString.replace(/<[^>]+>/g, "");
}

// Get a new array consisting only unique elements of input array
function getUniqueArray(inputArray) {
  let newArray = [];
  for (const element of inputArray) {
    if (newArray.indexOf(element) == -1) {
      newArray.push(element);
    }
  }
  return newArray;
}

//Formats numbers' formatting by adding commas
function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
// Convert A String To Title Case
function titleCase(str) {
  let splitStr = str.toLowerCase().split(' ');
  for (const i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}
