# Google Form Setup for Wedding RSVP

## Quick Setup (2 minutes):

### Step 1: Create Google Form
1. Go to: https://forms.google.com
2. Click "Create new form"
3. Form title: "Wedding RSVP - Udari & Harsha"

### Step 2: Add Questions
1. **Name** (Short answer) - Required
2. **Phone Number** (Short answer) - Required
3. **Will you attend?** (Multiple choice) - Required
   - Option 1: "Yes, I'll be there!"
   - Option 2: "Sorry, can't make it"

### Step 3: Get Form URL
1. Click "Send" button (top right)
2. Click the link icon (🔗)
3. Copy the URL
4. It will look like: `https://docs.google.com/forms/d/e/1FAIpQL.../viewform`

### Step 4: Link to Google Sheets
1. In your form, click: Responses tab
2. Click "Link to Sheets" (green spreadsheet icon)
3. Create new spreadsheet: "Wedding RSVP Responses"
4. Click "Create"

### Step 5: Update Your Code
Replace this line in your code:
```
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf1234567890abcdef/formResponse';
```

With your actual form URL (change `/viewform` to `/formResponse`).

### Step 6: Test
1. Deploy your website changes
2. Submit test RSVP
3. Check your Google Sheet - data should appear!

## Benefits:
- All data goes to one Google Sheet
- Automatic timestamps
- Easy Excel export
- Works from any device
- No Apps Script needed!
