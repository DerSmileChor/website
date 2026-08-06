# Decap CMS User Guide

| Version | Date | Author | Notes |
|---------|------|--------|------|
| 1.0 | Aug 2026 | Cindy Cheng | Initial working website |

## Purpose

This guide explains how to edit the website using Decap CMS.
No knowledge of Git, Astro or programming is required.


---

# Editing Workflow

1. Sign into Decap CMS.

	1.1 Visit:
	https://dersmilechor.com/admin

	1.2 Login with GitHub

	1.3 Sign in using your GitHub account.

	1.4 Approve access if prompted.

2. Select the content you wish to edit.

3. Make changes.

4. Preview the page.

5. Click **Publish**.

The website will update automatically once the changes have been deployed.


---

## Choosing a page

The left-hand menu lists all editable collections.

Examples:

Home
About
Join
Contact
Performances
Gallery

Select the page or entry you wish to edit.

---

##  Editing text

- Simply click inside a text field and edit the content.

- Highlighted text:

	Words wrapped in
	**double asterisks**
	will appear in the page accent colour.

	Example
	Join our **choir**

- Accent colours

	Some pages allow you to change the page accent colour.
	Enter a six-digit hexadecimal colour code, for example:
	#0b8f87
	A colour picker is available at:
	https://htmlcolorcodes.com

- Uploading images

	Click Choose image or drag a file into the upload area.
	Always include meaningful alternative text.

- Uploading PDFs

	Some pages allow PDF uploads.
	Uploading a new PDF automatically replaces the previous one.
 
---

## Save 

Click Save to store your work without publishing.
Other visitors will not see these changes.

---
## Publishing

Click Publish
to make the changes live.

Publishing automatically:
	Creates a Git commit.
	Starts a Cloudflare Pages deployment.
	Updates the website.
	This usually takes around 1–2 minutes.

---

## Editing performances

Each performance is a separate entry.
Past performances should normally remain published as part of the archive.


---
## Editing the About page

Leadership entries appear below the choir photographs.
Each leadership entry may include:
	name
	title
	biography
	optional photograph

General choir photographs are managed separately.

---
## If publishing fails

	Do not repeatedly click Publish.
	Record the error message.
	Contact the technical maintainer.
---

## Frequently Asked Questions

- Why don't my changes appear immediately?
	The website is rebuilding.
	Wait approximately 1–2 minutes and refresh the page.
- Can I undo a mistake?
	Yes.
	Previous versions are stored in GitHub.
	Contact the technical maintainer if assistance is needed.
- Do I need to know Git?
	No.
	Everything should be done through the CMS.