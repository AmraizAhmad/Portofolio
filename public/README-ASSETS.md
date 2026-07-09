# Assets included

Your real assets are already in place:

1. `profile.jpg` — your profile photo (used in the hero's glowing circular frame).
2. `resume-amraiz-ahmad.pdf` — your ATS-friendly resume (auto-generated from `scripts/generate_resume.py`).
3. `certificates/google-cybersecurity.jpg` — Google Foundations of Cybersecurity certificate.
4. `certificates/corvit-cybersecurity.jpg` — Corvit Systems Cyber Security Training certificate.

## Still to add (optional, for full SEO polish)

- `og-image.png` — 1200x630px social share preview image (used for OpenGraph/Twitter cards).
- `favicon.ico` — 32x32 (or multi-size) favicon. A default SVG icon (`app/icon.svg`) is already
  used by Next.js automatically if you don't add one.
- `apple-touch-icon.png` — 180x180px icon for iOS home screens.

## Updating your resume later

Edit `scripts/generate_resume.py` with new content, then regenerate:

```bash
pip install reportlab
python scripts/generate_resume.py
mv scripts/resume-amraiz-ahmad.pdf public/resume-amraiz-ahmad.pdf
```
