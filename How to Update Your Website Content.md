# How to Update Your Website Content

This guide explains how to easily update the text, links, images, and testimonials on your website without touching the complex code.

## 📂 Quick File Reference

All your content is located in the `client/data/` folder.

| Content Type | File Location | Description |
| :--- | :--- | :--- |
| **Basic Info & FAQs** | `client/data/config.ts` | Name, Hero text, Email, Resume link, FAQs |
| **Social Links** | `client/data/links.ts` | Facebook, Behance, WhatsApp, Email links |
| **Testimonials** | `client/data/testimonials.ts` | Client reviews and names |
| **Images** | `client/assets/` | Logo, Project images, About photo |

---

## 1. Updating Basic Info & FAQs (`config.ts`)

Open `client/data/config.ts`. You can change:

*   **`logoText`**: The name displayed in the top left (e.g., "TANJIB AHMED.").
*   **`heroTitle`**: The main headline on the homepage.
*   **`heroSubtitle`**: The description under the headline.
*   **`resumeUrl`**: The link to your Google Drive resume.
*   **`inquiryEmail`**: The email address shown in the contact section.
*   **`faqs`**: A list of Question & Answer pairs.
    *   To add a new FAQ, copy an existing `{ question: "...", answer: "..." }` block and paste it inside the `[]` brackets.

## 2. Updating Social Links (`links.ts`)

Open `client/data/links.ts`.

*   **Edit Links**: Change the `href` value to your profile URL.
    *   *Example*: `href: "https://www.facebook.com/your-profile"`
*   **New Tab**: All links (except Email) automatically open in a new tab.
*   **Email**: The email link automatically copies the address to the clipboard.
*   **Footer Visibility**: If you want a link to appear in the "About" section but **NOT** in the footer (like Email), add `excludeFromFooter: true`.

## 3. Updating Testimonials (`testimonials.ts`)

Open `client/data/testimonials.ts`.

*   **Add/Edit Review**: Update the `quote`, `author`, and `role`.
*   You can add as many testimonials as you like by copying the structure `{ id: "...", quote: "...", ... }`.

## 4. Updating Images

### Logo
*   Place your logo image (PNG or JPG) in `client/assets/logo/`.
*   The site typically uses the first image found in that folder.
*   If you don't want an image logo, just remove the file, and the text logo ("TANJIB AHMED.") will show.

### About Photo
*   Place your portrait photo in `client/assets/about/`.
*   The site automatically uses the image in this folder.

### Project Images
*   Place project thumbnails in `client/assets/projects/`.
*   Currently, project data is in `client/data/projects.ts` (if applicable) or hardcoded in `client/components/portfolio/Projects.tsx`. If you need to add new projects, you may need to edit the `Projects.tsx` file or request an update to move projects to a data file as well.

---

## 💡 Tips
*   **Quotes**: detailed text must be inside double quotes `"like this"`.
*   **Saving**: After saving a file (Ctrl+S), the website updates automatically if it's running.
