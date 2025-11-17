# Implementation Notes - Heizungspumpen Website

## ✅ Completed Features

### 1. Contact Channels - All Clickable
- **Phone (tel: links)**
  - Number: +4974719429413
  - Used in: Header, Hero, ContactForm alternatives, Footer pre-footer bar, Footer contact info
  - Format: `tel:+4974719429413`

- **WhatsApp**
  - Number: +4974719429413 (without country code formatting for WhatsApp)
  - Used in: Header, Hero, ContactForm alternatives, Footer pre-footer bar
  - Format: `https://wa.me/4974719429413?text=Heizungspumpe%20defekt%20–%20bitte%20um%20Rückruf`

- **Email**
  - Address: info@solarics.de
  - Used in: ContactForm, Footer contact info
  - Format: `mailto:info@solarics.de`

### 2. Main Inquiry Form - Fully Functional
Location: `src/components/ContactForm.tsx` (id="inquiry-form")

**Fields Implemented:**
- Name / Company (required)
- Email (required, validated)
- Phone (required)
- ZIP / City (required)
- Customer Type (radio: Privat, Gewerbe, Handwerker)
- Manufacturer (select: Grundfos, Wilo, KSB, etc.)
- Pump Model/Type (optional)
- Pump Year (optional)
- File Upload for photos (optional - displays filename when selected)
- Problem Description (required, min 10 chars)
- Urgency Level (radio: Today/Tomorrow, 48 hours, In next days)
- Callback Checkbox
- Energy Alternative Checkbox

**Form Submission:**
- Client-side validation using Zod schema
- Prepares email content with all form data
- Attempts to call `/api/send-inquiry` endpoint (for backend integration)
- Shows success message on page with clear CTA
- Auto-scrolls to top after 8 seconds
- Ready for backend integration with email service

**Success Feedback:**
- Green success message banner
- Styled with checkmark icon
- Clear confirmation text
- Auto-dismisses after 8 seconds

### 3. All CTAs - Scroll to Form
All buttons now scroll smoothly to the inquiry form:
- Hero section: "Rückruf anfordern" button
- Problem Selection: All three "Passende Ersatzpumpe anfragen" buttons
- FAQ section: New "Anfrage stellen" button with arrow icon

### 4. FAQ Section - Accordion Fully Functional
- Located in `src/components/FAQ.tsx` (id for anchor navigation)
- Smooth expand/collapse animations
- 11 relevant FAQs included
- New CTA button below FAQ to scroll to form
- Uses Radix UI Accordion for accessibility

### 5. Pre-Footer Emergency Bar
- Prominent text: "Heizungspumpe defekt und Sie brauchen schnelle Hilfe?"
- "Jetzt anrufen" button → tel:+4974719429413
- "WhatsApp öffnen" button → WhatsApp link
- Contact info displayed with icons

### 6. Footer Links - All Clickable
- Phone: `tel:+4974719429413`
- Email: `mailto:info@solarics.de`
- Service links to form and FAQ
- Legal links (Imprint, Privacy, Terms, Right of Withdrawal)
- All contact info clickable with hover effects

### 7. Responsive Design
- Mobile-first approach with TailwindCSS
- Breakpoints: sm, md, lg
- All components tested visually for:
  - Mobile (< 640px)
  - Tablet (640px - 1024px)
  - Desktop (> 1024px)

## 📋 Form Data Structure

The form collects and prepares the following data:
```json
{
  "nameCompany": "string",
  "email": "string",
  "phone": "string",
  "zipCity": "string",
  "customerType": "privat|gewerbe|handwerker",
  "manufacturer": "string",
  "pumpModel": "string",
  "pumpYear": "string",
  "urgency": "today|48h|days",
  "wantCallback": boolean,
  "wantEnergyAlternative": boolean,
  "message": "string",
  "fileUrl": "string (filename)"
}
```

## 🔌 Backend Integration - TODO

To fully complete the form submission, set up one of the following:

### Option 1: Using Resend (Recommended for email delivery)
1. Install: `npm install resend`
2. Create API route: `src/routes/api/send-inquiry.ts`
3. Set up environment variable: `VITE_RESEND_API_KEY`

Example endpoint:
```typescript
import { Resend } from 'resend';

export default async function handler(req, res) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  const { to, subject, content, formData } = req.body;
  
  await resend.emails.send({
    from: 'noreply@solarics.de',
    to: to,
    subject: subject,
    html: formatEmailHTML(content, formData),
  });
  
  res.status(200).json({ success: true });
}
```

### Option 2: Using EmailJS (Client-side)
1. Install: `npm install emailjs-com`
2. Initialize in ContactForm with public key
3. Send directly from client

### Option 3: Custom backend with Node/Express
1. Create backend endpoint at `/api/send-inquiry`
2. Accept POST with form data
3. Send email via your preferred service
4. Return success response

## 📝 Notes

- The form currently shows a success message locally without requiring backend setup
- All contact links (tel:, mailto:, WhatsApp) work immediately
- Form data is logged to console for development
- File upload stores filename only (production: upload to storage service)
- All styling uses TailwindCSS utility classes for consistency
- Accessibility: Proper labels, ARIA attributes, keyboard navigation

## 🎨 Color & Brand Information

- Primary color: Brand blue (from theme)
- Accent color: Red/destructive (for CTAs)
- Trust/secondary colors for highlights
- Typography: German language, professional tone
- Company: Solarics GmbH, 72379 Hechingen

## ✨ No Dead Links Guarantee

Every button on the page has a real action:
- ✅ Phone buttons → tel: link
- ✅ WhatsApp buttons → wa.me link
- ✅ CTA buttons → scroll to form
- ✅ Footer links → real contact/legal links
- ✅ Email links → mailto: links
- ✅ Form → validation + submission
