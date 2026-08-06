# Choir Website

| Version | Date | Author | Notes |
|---------|------|--------|------|
| 1.0 | July 2026 | Cindy Cheng | Initial documentation |
| 1.1 | Aug 2026 | Cindy Cheng | Initial working website |

## Purpose

This website exists to provide a simple, reliable and easy-to-maintain online presence for the choir.

The objectives of the project are:

- provide up-to-date information for audiences and potential members
- advertise concerts and events
- publish news
- showcase photographs
- minimise ongoing costs
- minimise technical maintenance
- allow committee members to update content without needing programming knowledge

The website has been deliberately designed to remain maintainable even if the original developer is no longer involved.

The website is hosted on Cloudflare Pages and automatically rebuilt whenever changes are pushed to the GitHub repository or published through Decap CMS.

---

# Technology

The website currently uses:

| Technology | Purpose |
|------------|---------|
| Astro | Static website framework |
| Tailwind CSS | Styling |
| GitHub | Source code & version control
| GitHub OAuth | CMS authentication
| Cloudflare Pages | Website hosting
| Cloudflare Workers | GitHub OAuth authentication for Decap CMS
| Cloudflare DNS | Domain management
| Decap CMS | Browser-based content editing |

---

# Design Principles

The project follows several guiding principles.

## Keep things simple

The website should avoid unnecessary plugins, dependencies and custom code.

Whenever a simple solution exists, it should be preferred over a more complex one.

---

## Separate content from design

Website text, news and concert information should remain separate from the page layouts.

This makes redesigning the website easier in future.

---

## Make editing straightforward

Committee members should be able to update content using Decap CMS without editing source code.

Routine editing should not require knowledge of Git, Astro or Tailwind.

---

## Document important decisions

Wherever practical, significant technical decisions should be documented so that future maintainers understand *why* something was done.

---

# Expected Maintenance

Content editing

- whenever required

Technical maintenance

- approximately once or twice per year

Major redesign

- only when the committee decides the appearance should change

---

# Repository Structure

The repository contains:

- website source code
- documentation
- content
- deployment configuration

The live website is generated automatically from this repository.

---

# Who Should Read Which Document?

Committee members

→ Content Editing Guide

Technical maintainer

→ Technical Maintenance Guide

New maintainer

→ Handover Guide

Everyone

→ Project Overview