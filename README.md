# Mehtha Software Solutions — React website

A responsive, frontend-only React + Vite website using the navy and light-blue palette from the supplied logo. The application form QR code is generated automatically when you add your Google Forms responder URL.

## 1. Install prerequisites
- Install Node.js LTS from https://nodejs.org/ (npm is included).
- Extract this ZIP folder to a location you can find easily.

## 2. Configure contact information
Open `src/main.jsx` and edit the `COMPANY` object near the top:

```js
const COMPANY = {
  name: 'Mehtha Software Solutions',
  email: 'mehthacreativecollections@gmail.com',
  phoneDisplay: '+91 YOUR NUMBER',
  phoneDigits: '91YOURNUMBER',
  location: 'Bengaluru, Karnataka, India',
  googleFormUrl: 'https://forms.gle/YOUR_FORM_ID',
};
```

- `phoneDisplay`: human-readable phone number shown on the page.
- `phoneDigits`: country code + phone number, digits only, for `tel:` and WhatsApp links. Leave it empty until ready.
- `googleFormUrl`: the public responder link from Google Forms, not the form-editing URL. The QR code and application buttons use this value.
- Confirm the email address is the exact mailbox you intend to use before publishing.

## 3. Create your Google Form
1. Visit https://forms.google.com and create a form such as **Mehtha Software Solutions — Internship Enquiry**.
2. Add fields you need, for example: full name, email, phone, college, course/year, area of interest, and a short message.
3. Add a short description explaining what applicants are enquiring about. State any applicable program conditions and fees transparently before an applicant commits.
4. Use the form's **Send** or **Publish/Share** controls (labels can vary) to copy the public responder link.
5. Paste that link into `googleFormUrl` in `src/main.jsx`.

## 4. Run locally
Open a terminal in this project folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). Check mobile layout, email, phone, form link, and QR code. Stop the server with `Ctrl+C`.

## 5. Build for production

```bash
npm run build
npm run preview
```

Vite creates the production website in the `dist` folder.

## 6. Deploy free on Vercel
1. Create/sign in to an account at https://vercel.com.
2. Create a GitHub repository and push this project to it, or import the repository directly if you already have one.
3. In Vercel, choose **Add New → Project**, then import the repository.
4. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
5. Select **Deploy**. Vercel will provide a public `vercel.app` URL.
6. Test the deployed site from a phone, including scanning the QR code. You can connect a custom domain later through Vercel's project settings if you own one.

Alternative: Netlify can also host this static Vite build using build command `npm run build` and publish directory `dist`.

## Notes
- There is no backend or database. The Google Form collects application responses.
- The email and phone details are public once deployed. Use contact details you are comfortable publishing.
- This template does not claim accreditations, placement guarantees, registered-company status, or certificates that have not been confirmed. Edit the copy only to reflect what you genuinely offer.
