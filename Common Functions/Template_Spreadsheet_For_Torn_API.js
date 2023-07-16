let ss = SpreadsheetApp.getActiveSpreadsheet();
let prefSheet = ss.getSheetByName("Dashboard");
let logSheet = ss.getSheetByName("Data");
let apiKey = prefSheet.getRange("B1").getValue();
let hiddenSheet = ss.getSheetByName("Metadata");

function writeUpdateMessage(message) {
  let time = getTime(new Date().getTime()/1000);
  writeSingleValue(prefSheet, "B2", time);
  writeSingleValue(prefSheet, "B3", message);
}
function getTime(timestamp) {
  //timestamp in milliseconds
  return Utilities.formatDate(new Date(timestamp*1000), "GMT", "dd MMMM yyyy  hh:mm:ss a");
}

function myFunction() {
  let url = "https://api.torn.com/user/?selections=events&key="+apiKey;
  try {
    let data = JSON.parse(UrlFetchApp.fetch(url));
    if (data["error"]) {
       writeUpdateMessage(data["error"]["error"]);
      return;
    } else if (data["events"]) {
      let last_entry = hiddenSheet.getRange("B1").getValue();
      let outputArray = [];
      let timestampArray = [];
      for (const identifier in data["events"]) {
        let event = data["event"][identifier];
        timestampArray.push(event["timestamp"]);
        if (event["timestamp"] > last_entry) {
          //Do whatever
        } 
      }

      let noOfNewEntries = outputArray.length;
      if (noOfNewEntries > 0) {
        logSheet.insertRowsAfter(1, noOfNewEntries);
        logSheet.getRange(2, 1, noOfNewEntries, 14).setValues(outputArray);
        logSheet.sort(1, false);
      }
      let last_array = [];
      if (timestampArray.length > 0) {
        last_array = timestampArray.sort(function(a, b) {
          return a - b;
        });
        let lastStamp = last_array[last_array.length - 1];
        hiddenSheet.getRange("B1").setValue(timestamp);
        writeUpdateMessage("Successfully Updated");
      }
    }
  }
  catch(error) {
    writeUpdateMessage(error.message);
  }
}
