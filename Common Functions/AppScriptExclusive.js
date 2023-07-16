function parseTime(timestamp) {
  //timestamp in milliseconds
  return Utilities.formatDate(new Date(timestamp), "GMT", "dd MMMM yyyy  hh:mm:ss a");
}
