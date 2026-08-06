# Site Structure

| Version | Date | Author | Notes |
|---------|------|--------|------|
| 1.0 | July 2026 | Cindy Cheng | Initial documentation |
| 2.0 | Aug 2026 | Cindy Cheng | Initial working website |

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

Join Us

Performances

Contact

---

## content/

Markdown content used by the website.

about/ : pictures in the about page
location/ : picture on where people are from in the about page
pages/ : content for the about, contact, home, join and performance pages
performances/ : pictures for the performance gallery


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

Join Us

Performances

Contact

Additional pages should only be added where there is a clear need.

Keeping navigation concise improves usability.