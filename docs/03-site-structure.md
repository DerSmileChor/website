# Site Structure

| Version | Date | Author | Notes |
|---------|------|--------|------|
| 1.0 | July 2026 | Cindy Cheng | Initial documentation |

## Purpose

This document explains how the project is organised.

Understanding the directory structure makes it much easier to locate files and avoid accidental changes.

---

# Main Directories

## src/

Contains nearly all website source code.

---

## components/

Reusable interface elements.

Examples:

- navigation
- footer
- buttons
- cards
- gallery

Whenever possible, reusable interface elements should be placed here.

---

## layouts/

Overall page layouts.

Layouts define the common structure shared by multiple pages.

Examples:

- header
- footer
- fonts
- metadata

---

## pages/

Website pages.

Each file normally corresponds to one webpage.

Examples:

Home

About

Contact

News

Gallery

---

## content/

Markdown content used by the website.

Examples:

News articles

Blog posts

Concert information

Future content should normally be added here rather than directly inside page files.

---

## public/

Static files.

Examples:

Images

PDF programmes

Downloads

Files placed here are served directly without processing.

---

## docs/

Project documentation.

This folder should always be kept up to date.

---

# Recommended Workflow

Reusable element?

→ component

Entire page?

→ pages

Content?

→ content

Image?

→ public

Documentation?

→ docs

---

# Planned Website Structure

Home

About

Join

Concerts

News

Gallery

Contact

Additional pages should only be added where there is a clear need.

Keeping navigation concise improves usability.