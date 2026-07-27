# Deployment Guide

| Version | Date | Author | Notes |
|---------|------|--------|------|
| 1.0 | July 2026 | Cindy Cheng | Initial documentation |

## Purpose

This document explains how the website is published and what to do if publishing fails.

The intention is that day-to-day content editors never need this document. It is for the technical maintainer.

---

# Deployment Overview

The website is generated using Astro and published through GitHub Pages.

The publishing process is:

```
Developer or CMS Editor
        │
        ▼
Git Repository (main branch)
        │
        ▼
GitHub Actions
        │
        ▼
Astro Build
        │
        ▼
GitHub Pages
        │
        ▼
Live Website
```

Whenever changes are merged into the `main` branch:

1. GitHub starts an automated workflow.
2. Astro builds the static website.
3. If the build succeeds, GitHub Pages replaces the live website.
4. No manual upload is required.

---

# Before Publishing

Always check:

- `npm run build` succeeds
- The homepage loads correctly
- Navigation works
- Images display correctly
- There are no JavaScript errors in the browser console

---

# Deploying Changes

## Content changes (via Decap CMS)

Normally no action is required.

Publishing through Decap CMS automatically creates a Git commit and triggers deployment.

---

## Technical changes

After modifying code:

```
git add .
git commit -m "Describe the changes"
git push
```

GitHub will automatically rebuild the website.

---

# If Deployment Fails

## Step 1

Open GitHub Actions.

Locate the latest workflow.

Read the first reported error.

---

## Step 2

Run locally:

```bash
npm install
npm run build
```

If the local build fails, fix those errors first.

---

## Step 3

If the local build succeeds but GitHub fails:

Check:

- Node version
- package-lock.json committed
- GitHub Pages settings
- Repository permissions

---

# Recovering From Problems

Git makes recovery straightforward.

To restore a previous version:

```
git log
```

Find the desired commit.

Either:

- revert the bad commit

or

- restore the previous commit

Avoid deleting history unless absolutely necessary.

---

# Annual Maintenance

Once each year:

- Run `npm audit`
- Run `npm outdated`
- Run `npm run build`
- Review dependency updates
- Confirm GitHub Pages is still enabled
- Confirm the domain still points at GitHub Pages
- Confirm Decap CMS login still works
- Review committee access

Expected time:
approximately 1–2 hours.