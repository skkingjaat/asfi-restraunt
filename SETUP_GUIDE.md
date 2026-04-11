# Restaurant Website Setup Guide

## Overview
Your restaurant website is now complete with:
- ✅ Full homepage with hero section, menu, testimonials, and info
- ✅ Contact page with contact form
- ✅ WhatsApp button (floating in bottom right)
- ✅ Navbar with responsive mobile menu
- ✅ Footer with links and social media

## Setup Instructions

### 1. Configure WhatsApp Button
Update the phone number in [components/whatsapp-button.tsx](components/whatsapp-button.tsx):

```typescript
const phoneNumber = "1234567890"; // Change to your WhatsApp business number
const message = "Hello! I'd like to know more about your restaurant.";
```

⚠️ **Important**: Use the format without `+` or any special characters (just digits).
Example: `"1234567890"` not `"+1 (234) 567-890"`

### 2. Setup Google Form for Contact Form Submission

#### Step 1: Create a Google Form
1. Go to [forms.google.com](https://forms.google.com)
2. Click "Create" → "Blank form"
3. Add the following fields:
   - Name (Short answer)
   - Email (Short answer)
   - Phone (Short answer)
   - Subject (Short answer)
   - Message (Paragraph)

#### Step 2: Get Form IDs
1. Click the three dots menu (⋮) → "Get pre-filled link"
2. Fill out every field with test values
3. Click "Get link"
4. Copy the generated URL
5. The URL will look like: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?...`

**Extract two things:**
- `FORM_ID`: The part between `/e/` and `/viewform`
- Field entry IDs: Open the URL, inspect each form field, and find `name="entry.XXXXXXXXXX"`

#### Step 3: Alternative Method to Find Field IDs
1. Open your Google Form in edit mode
2. Right-click on a field → "Inspect" (or press F12)
3. Look for the input element's `name` attribute
4. It will be in format: `entry.1234567890`

#### Step 4: Update Contact Form
Open [components/contact-form.tsx](components/contact-form.tsx) and update:

```typescript
const GOOGLE_FORM_ID = "YOUR_FORM_ID"; // Replace with your form ID
const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

const fieldIds = {
  name: "entry.XXXXXXXXXX",      // Replace with actual ID
  email: "entry.YYYYYYYYYY",      // Replace with actual ID
  phone: "entry.ZZZZZZZZZZ",      // Replace with actual ID
  subject: "entry.WWWWWWWWWW",    // Replace with actual ID
  message: "entry.VVVVVVVVVV",    // Replace with actual ID
};
```

### 3. Update Restaurant Information

#### Homepage ([app/page.tsx](app/page.tsx))
- Update menu items and prices
- Change restaurant name "Lick A Chick" to your restaurant name
- Update contact phone and email

#### Contact Page ([app/contact/page.tsx](app/contact/page.tsx))
- Update restaurant address
- Update phone number
- Update email address
- Update business hours
- Change the Google Map embed code (modify the iframe src)

#### Navbar ([components/navbar.tsx](components/navbar.tsx))
- Change "Logo" text to your restaurant name
- Update navigation links if needed

#### Footer ([components/footer.tsx](components/footer.tsx))
- Update restaurant name
- Update description
- Add your actual social media links

### 4. Test the Contact Form
1. Run `npm run dev`
2. Go to `http://localhost:3000/contact`
3. Fill out and submit the form
4. Check your Google Form responses to verify data is being collected

### 5. Security Notes
✅ **What's Secure:**
- Form uses HTTPS (when deployed)
- No sensitive data stored in client-side code
- Data goes directly to Google Forms servers
- Google Form handles data encryption

⚠️ **Best Practices:**
- Don't store form data on your server
- Use Google Form's built-in security features
- Enable reCAPTCHA on Google Form if needed (Form Settings → Presentation)
- Regularly export responses from Google Forms to backup

### 6. Deployment
When ready to deploy:
1. Update all placeholder information
2. Test all forms and WhatsApp button
3. Deploy to Vercel, Netlify, or your hosting provider
4. Test all functionality on production URL

### 7. Useful Links
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Google Forms API Guide](https://www.google.com/url?q=https://developers.google.com/forms)

## What's Included

### Components
- `navbar.tsx` - Responsive navigation with mobile menu
- `footer.tsx` - Multi-column footer with links
- `contact-form.tsx` - Contact form with Google Forms integration
- `whatsapp-button.tsx` - Floating WhatsApp button
- `ui/button.tsx` - shadcn Button component
- `ui/sheet.tsx` - shadcn Sheet component for mobile menu
- `ui/separator.tsx` - shadcn Separator component

### Pages
- `/` - Homepage with hero, menu, features, testimonials
- `/contact` - Contact page with form and info

## Questions?
Refer back to the component files for more detailed implementation notes.
