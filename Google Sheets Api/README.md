# Google SHeets Api Integration

Demo


<a href="https://vivek1898.github.io/sheetsApi-Js/">Live link</a><br>
<a href="https://docs.google.com/spreadsheets/d/1mvSNPQNDQeouYBgPv3DaI6a2bXULgPMalqe7F8RJiJg/edit#gid=0">Sheets Url</a>

## Screenshots
![screenshot](https://github.com/Vivek1898/sheetsApi-Js/blob/master/assets/screenshorts/1.JPG)
![screenshot](https://github.com/Vivek1898/sheetsApi-Js/blob/master/assets/screenshorts/2.JPG)

Setup

1.Open google sheets - https://docs.google.com/spreadsheets/
<br>
create new document and  copy unique id
https://docs.google.com/spreadsheets/d/uniqueId/edit#gid=0
- Mention column names as Define in html file (Case Senstive)
- First Last Company Group Email

2.GO TO  https://script.google.com/  <br><br>
-Login and create New Project
  <br><br>
3.In code.gs File Paste Below Code with and replace Your-unique-Id with your google sheets unique id
 
     var sheetUniqueId="Your-unique-Id"
    function doPost(e) {
        try {
            var ss = SpreadsheetApp.openById(sheetUniqueId);
            var sheet = ss.getSheetByName('Sheet1');
            var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
            var holderArray = [];
            for (var x = 0; x < headers.length; x++) {
                var tempValue = !e.parameter[headers[x]] ? ' ' : e.parameter[headers[x]];
                holderArray.push(tempValue);
            }
            sheet.appendRow(holderArray);
            var results = {
                "data": e.parameter
                , "holder": holderArray
            }
            var jsonData = JSON.stringify(results)
            return ContentService.createTextOutput(jsonData).setMimeType(ContentService.MimeType.JSON)
        }
        catch (e) {
            var error = {
                "error": e
            }
            var jsonError = JSON.stringify(error)
            return ContentService.createTextOutput(jsonError).setMimeType(ContentService.MimeType.JSON)
        }
    }
    function doGet(e) {

    try{
      var ss = SpreadsheetApp.openById(sheetUniqueId);
      var sheet=ss.getSheetByName('Sheet1');
      var data=sheet.getRange(2,1,sheet.getLastRow()-1,5).getValues();
      var JsonData=JSON.stringify(data)
       return ContentService.createTextOutput(JsonData).setMimeType(ContentService.MimeType.JSON)
    }
    catch(e){
      var error ={"error":e}
      var jsonError=JSON.stringify(error)
      return ContentService.createTextOutput(jsonError).setMimeType(ContentService.MimeType.JSON)
    }

    }
 <br>
4. Save and Click debug
   then Click review permisson and give permisson by clicking advanced
   then go to project then click allow

5.Click Deploy -> New Deploy -> Select typE ->Web app-> Who has acess -> Choose anyone ->deploy

6.Then Copy Web-App url Link
  and Paste into config.js  into url within single quotes

ALL set :)  
