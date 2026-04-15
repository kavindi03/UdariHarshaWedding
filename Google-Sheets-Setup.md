# Google Sheets Setup for Wedding RSVP

## Step 1: Create Google Sheet
1. Go to https://sheets.google.com
2. Create a new spreadsheet
3. Name it "Wedding RSVP Data"
4. Create these columns in row 1:
   - A: Name
   - B: Phone
   - C: Attending
   - D: Timestamp
   - E: Date
   - F: Time

## Step 2: Create Google Apps Script
1. In your Google Sheet, click: Extensions > Apps Script
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append new row with RSVP data
    sheet.appendRow([
      data.name,
      data.phone,
      data.attending,
      data.timestamp,
      data.date,
      data.time
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy as Web App
1. Click "Deploy" > "New deployment"
2. Select type: "Web app"
3. Description: "Wedding RSVP Web App"
4. Execute as: "Me" (your Google account)
5. Who has access: "Anyone"
6. Click "Deploy"
7. Copy the Web app URL (looks like: https://script.google.com/macros/s/.../exec)

## Step 4: Update Your Website Code
In your `GoogleFormRSVP.tsx` file, replace:
```
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

With your actual Web app URL from Step 3.

## Step 5: Test
1. Deploy your website changes
2. Submit a test RSVP from any device
3. Check your Google Sheet - data should appear automatically!

## Benefits:
- All RSVP data from all devices goes to one central Google Sheet
- Real-time updates
- No data loss between devices
- Easy to export to Excel
- Automatic timestamps
