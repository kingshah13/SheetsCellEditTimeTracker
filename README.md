# Google Sheets Edit Timestamp Logger

This Google Apps Script automatically logs the date and time in **Column H** whenever a change is made in **Column E** of specified Google Sheets. It works on multiple sheets, including `"Sheet Name1"` and `"Sheet Name2"`.

## 🚀 Features
- Automatically records timestamps in **DD Month YYYY HH:MM AM/PM** format.
- Works on multiple sheets (customizable list).
- Skips the first row to avoid headers.
- Right-aligns the timestamp for better visibility.

## 📜 How It Works
1. When a user edits **Column E** in a specified sheet, the script logs the edit timestamp in **Column H**.
2. The timestamp is formatted and aligned to the right.

## 🛠 Installation
1. Open your Google Spreadsheet.
2. Click on **Extensions > Apps Script**.
3. Delete any existing code and paste the following script:
   
   ```javascript
   function onEdit(e) {
     var sheet = e.source.getActiveSheet();
     var allowedSheets = ["Sheet Name1", "Sheet Name2"]; // List of sheets to apply the script

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
