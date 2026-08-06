# Local Development

| Version | Date | Author | Notes |
|---------|------|--------|------|
| 1.0 | July 2026 | Cindy Cheng | Initial documentation |

## Purpose

This guide explains how to run the website on a local computer for development.

It is intended for the technical maintainer.

---

# Requirements

Before starting, install:

- Node.js (version 22 or later)
- npm (included with Node.js)
- Git

---

# First-time Setup

Clone the repository.

```
git clone <repository>
```

Enter the project directory.

```
cd astroship
```

Install dependencies.

```
npm install
```

This only needs to be done the first time, or after pulling changes that update dependencies.

---

# Running the Website

```
npm run dev
```

Open the address shown in the terminal.

Usually:

```
http://localhost:4321
```

Changes are automatically reflected in the browser after saving.



---

# Building the Website

Before committing technical changes, always run:

```
npm run build
```

A successful build confirms that the website can be generated correctly.

Never deploy a version that does not build successfully.

---

# Testing the local CMS

The local CMS requires local_backend: true in public/admin/config.yml.

In a separate terminal window (separate from `npm run build`), navigate to the website folder and run:
 
```
npx decap-server
```

---

# Useful Commands

Run development server

```
npm run dev
```

Create production build

```
npm run build
```

Check outdated packages

```
npm outdated
```

Security audit

```
npm audit
```

Current Git status

```
git status
```


---

# Common Problems

## Port already in use

Another development server is probably still running.

Stop it using:

```
Ctrl+C
```

or choose another port.

---

## Missing packages

Run:

```
npm install
```

---

## Build fails

Read the first error.

Do not attempt multiple fixes simultaneously.

Resolve one error before continuing.

---

# Before Committing

Confirm:

✓ Website builds

✓ Website displays correctly

✓ No missing images

✓ No console errors

✓ Navigation works

✓ Mobile menu works