# Project memory

## Product intent & audience

- Static business profile website for **Sri Nivas** (registration details sourced from a reference image).
- No database; fully static Next.js site suitable for production.
- Audience: visitors seeking verified business/registration information.

## Brand personality & voice

- Professional, calm, document-inspired (certificate-style) presentation.
- Trustworthy and warm tone; emphasizes legitimacy and transparency.

## Visual design & UX direction

- Color system: calm green paired with warm copper accents.
- Hero section styled as a certificate/registration summary.
- Sections: registration highlights, business particulars, registered address, responsive mobile navigation.
- Subtle animations used throughout.
- Responsive layout with mobile-first navigation.
- Document/certificate aesthetic — structured, formal, readable.

## Decisions, constraints & rationale

- Business name is **Sri Nivas**; "Surya Hospital" must never appear anywhere in the codebase or content.
- All business details were inferred from a readable reference image (registration details, address).
- Single-page layout chosen given the static, informational nature of the site.
- Tailwind + shadcn/ui + Lucide React only; no extra UI packages installed.
- Production build must pass with zero warnings; a CSS compatibility warning was identified and fixed.

## Open questions & assumptions

- The exact nature/category of the business is inferred from image context (likely medical/healthcare-adjacent) but not explicitly stated on the site.
- Contact details (phone, email, hours) were not mentioned; may need to be added if available.
- No SEO metadata or custom domain configuration discussed yet.