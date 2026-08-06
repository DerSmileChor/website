# Accounts and Ownership

| Version | Date | Author | Notes |
|---------|------|--------|------|
| 1.0 | July 2026 | Cindy Cheng | Initial documentation |
| 2.0 | Aug 2026 | Cindy Cheng | Initial working website |

## Purpose

This document records **what accounts exist**, **what they are used for**, and **who should have access**.

Do **not** store passwords in this repository.

Passwords should be kept in the choir's password manager.

---

# Core Services

| Service | Purpose | Owner | Notes |
|----------|---------|-------|------|
| GitHub | Source code & Repository | dersmilechor@gmail.com | |
| Github OAuth| Decap authentication| dersmilechor@gmail.com| |
| Cloudflare | Hosting, DNS, SSL, Workers| dersmilechor@gmail.com | |
| Decap CMS | Website editing | | |
| dersmilechor@gmail.com  | Recovery | | |


---

# Domain Information

Website:

```
________________________
```

Registrar:

```
________________________
```

Renewal date:

```
________________________
```

Auto-renew enabled?

```
Yes / No
```

---

# GitHub

Repository:

```
________________________
```

Organisation (recommended):

```
________________________
```

Administrators

- ______________________
- ______________________

---

# Email Account

Shared committee email

```
________________________
```

Used for:

- GitHub recovery
- Domain recovery
- CMS authentication

---

# Password Manager

Passwords are stored in:

```
________________________
```

Recovery codes stored by:

```
________________________
```

---

# Access Checklist

| Version | Date | Author | Notes |
|---------|------|--------|------|
| 1.0 | July 2026 | Cindy Cheng | Initial documentation |

At least two committee members should have access to:

- GitHub
- Domain registrar
- DNS provider
- Shared email
- Password manager
- Decap CMS

---

# If Someone Leaves the Committee

Immediately:

- Remove GitHub access
- Remove CMS access
- Remove password manager access
- Transfer ownership if necessary

---

# Emergency Recovery

If the website stops working:

1. Confirm the domain has not expired.
2. Check GitHub Actions.
3. Check GitHub Pages settings.
4. Attempt a local build.
5. Restore the last working commit if necessary.

Never make multiple unrelated changes while troubleshooting.