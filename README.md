# Portfolio Website Update Guide

This guide explains how to update the text, links, images, and brand sections of your website.

## 🚀 New: Synchronized Hero Animations
The website now features a cinematic sequential reveal.
1. **Typewriter Heading**: Animates in character-by-character first.
2. **Delayed Reveal**: The Navbar, project mosaic, and supporting description only arrive *after* the typing finishes.
3. **Synchronization Logic**: Controlled via the `isHeaderFinished` state in `client/pages/Index.tsx`.

## 📂 Quick File Reference

All your content is located in the `client/data/` folder.

| Content Type | File Location | Description |
| :--- | :--- | :--- |
| **Basic Info & FAQs** | `client/data/config.ts` | Name, Hero text, Email, Resume link, FAQs |
| **Social Links** | `client/data/links.ts` | Facebook, Behance, WhatsApp, Email links |
| **Testimonials** | `client/data/testimonials.ts` | Client reviews and names |
| **Images** | `client/assets/` | Logo, Project images, About photo |

---

## 1. Updating Hero Content (`Hero.tsx`)

The Hero section now uses a stabilized typewriter effect.
*   **Text Changes**: Edit strings directly in `client/components/portfolio/Hero.tsx`.
*   **Tool Icons**: Located in `public/tools/`. To change an icon, replace the SVG file and update the path in the `toolIcons` object inside `Hero.tsx`.

## 2. Updating Basic Info & FAQs (`config.ts`)

Open `client/data/config.ts`. You can change:

*   **`logoText`**: The name displayed in the top left (e.g., "TANJIB AHMED.").
*   **`inquiryEmail`**: The email address shown in the contact section.
*   **`faqs`**: A list of Question & Answer pairs.

## 3. Updating Social Links (`links.ts`)

Open `client/data/links.ts`.

*   **Edit Links**: Change the `href` value to your profile URL.
*   **Email**: The email link automatically copies the address to the clipboard.

## 4. Updating Testimonials (`testimonials.ts`)

Open `client/data/testimonials.ts`.

*   **Add/Edit Review**: Update the `quote`, `author`, and `role`.

## 5. Updating Images

### Logo
*   Place your logo image (PNG or JPG) in `client/assets/logo/`.
*   The site typically uses the first image found in that folder.

### About Photo
*   Place your portrait photo in `client/assets/about/`.

### Project Thumbnails (Hero)
*   The floating "mosaic" cards in the Hero section use images from your project list. 
*   They are automatically pulled from `thumbnailList`/`logoList`.

---

## 💡 Tips
*   **Quotes**: text must be inside double quotes `"like this"`.
*   **State Sync**: If you add new elements that should only appear after the heading, use the `isHeaderFinished` prop.
*   **Saving**: After saving a file (Ctrl+S), the website updates automatically if it's running.
