# Technical Maintenance Guide

| Version | Date | Author | Notes |
|---------|------|--------|------|
| 1.0 | July 2026 | Cindy Cheng | Initial documentation |

## Purpose

This document is intended for the website's technical maintainer.

Unlike the Content Editing Guide, this document assumes basic familiarity with Git, GitHub and the command line.

The website should require very little maintenance. Most work consists of occasional software updates and responding to any deployment issues.

---

# Responsibilities

The technical maintainer is responsible for:

- keeping software dependencies reasonably up to date
- ensuring the website continues to build successfully
- maintaining deployment to GitHub Pages
- maintaining Decap CMS configuration
- maintaining GitHub repository settings
- assisting committee members if publishing fails

The technical maintainer is **not** expected to update website content on behalf of the committee.

---

# Before Making Changes

Always begin by checking the current state of the project.

```bash
git status
git pull
npm install
npm run build
```

Never begin making changes if the project does not already build successfully.

---

# Making Technical Changes

Whenever making changes:

1. Create a new Git branch.
2. Make one logical change.
3. Build the project.
4. Test locally.
5. Commit the change.
6. Merge back into `main`.

Avoid combining unrelated changes into a single commit.

Good examples:

- "Upgrade Astro"
- "Add gallery page"
- "Fix mobile navigation"

Poor examples:

- "Various fixes"

---

# Updating Dependencies

Approximately every 6–12 months:

```bash
npm outdated
npm audit
```

Update packages gradually.

After each update:

```bash
npm run build
npm run dev
```

Check:

- Homepage
- Navigation
- News
- Gallery
- Contact page

Do not update multiple major packages simultaneously unless necessary.

---

# Before Deployment

Confirm:

✓ Website builds successfully

✓ No console errors

✓ No missing images

✓ Navigation works

✓ Mobile navigation works

✓ Internal links work

✓ Forms (if any) work

---

# If the Build Fails

Do not panic.

Most build failures are caused by:

- missing package
- syntax error
- incorrect Markdown
- dependency update

Start by reading the first error message.

Do not attempt multiple fixes at once.

Fix one issue.

Build again.

Repeat.

---

# If Deployment Fails

1. Check GitHub Actions.

2. Read the first failing step.

3. Attempt the same build locally.

```bash
npm install
npm run build
```

If local and GitHub builds both fail:

Fix the local build first.

---

# Recovery

Git allows almost every mistake to be reversed.

Useful commands:

```bash
git log
git diff
git status
git restore
git revert
```

Avoid deleting history.

Prefer creating a new commit that fixes the problem.

---

# Annual Maintenance Checklist

Once each year:

□ Run `npm audit`

□ Run `npm outdated`

□ Run `npm run build`

□ Review Astro release notes

□ Confirm GitHub Pages still works

□ Confirm Decap CMS login

□ Confirm domain renewal

□ Confirm administrator accounts

Expected time:

1–2 hours.