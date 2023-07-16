let ss = SpreadsheetApp.getActiveSpreadsheet();
let prefSheet = ss.getSheetByName("Dashboard");

function writeSingleValue(sheet, cellName, value) {
  sheet.getRange(cellName).setValue(value);
}
function writeUpdateMessage(message) {
  let time = getTime(new Date().getTime());
  writeSingleValue(prefSheet, "B2", time);
  writeSingleValue(prefSheet, "B3", message);
}
function getTime(timestamp) {
  //timestamp in milliseconds
  return Utilities.formatDate(new Date(timestamp), "GMT", "dd MMMM yyyy  hh:mm:ss a");
}

//Add Menu Item
function onOpen(e) {
  //Name of option in Menu Bar
  let menu = SpreadsheetApp.getUi().createMenu('Run Manually')
  //Name of sub-menu option, Function to be executed when clicked
  menu.addItem('Update Sheet', 'myFunction').addToUi();
}
