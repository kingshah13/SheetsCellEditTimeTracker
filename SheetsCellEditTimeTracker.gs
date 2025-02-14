function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var allowedSheets = ["Schedule", "Schedule C6"]; // List of sheets to apply the script

  // Check if the edited sheet is in the allowedSheets list
  if (allowedSheets.includes(sheet.getName())) {
    var editedCell = e.range;

    // Check if the edited cell is in column E (column number 5) and not in the first row
    if (editedCell.getColumn() == 5 && editedCell.getRow() > 1) {
      var row = editedCell.getRow();
      var currentDate = new Date();

      // Format date and time as DD Month YYYY HH:MM AM/PM
      var formattedDateTime = Utilities.formatDate(currentDate, Session.getScriptTimeZone(), "dd MMMM yyyy hh:mm a");

      // Record the date and time in column H (column number 8)
      var cell = sheet.getRange(row, 8);
      cell.setValue(formattedDateTime);

      // Set the cell alignment to right
      cell.setHorizontalAlignment("right");
    }
  }
}
