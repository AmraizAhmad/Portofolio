from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
)
from reportlab.lib.enums import TA_LEFT

DARK = colors.HexColor("#0B1220")
ACCENT = colors.HexColor("#0F9D58")  # print-safe deep green
BLUE = colors.HexColor("#1976D2")    # print-safe deep blue
GRAY = colors.HexColor("#444444")
LIGHT_GRAY = colors.HexColor("#666666")

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name", parent=styles["Title"], fontName="Helvetica-Bold",
    fontSize=22, textColor=DARK, alignment=TA_LEFT, spaceAfter=2,
)
title_style = ParagraphStyle(
    "TitleRole", parent=styles["Normal"], fontName="Helvetica-Bold",
    fontSize=11.5, textColor=ACCENT, spaceAfter=2,
)
contact_style = ParagraphStyle(
    "Contact", parent=styles["Normal"], fontName="Helvetica",
    fontSize=9, textColor=GRAY, spaceAfter=0,
)
section_style = ParagraphStyle(
    "Section", parent=styles["Heading2"], fontName="Helvetica-Bold",
    fontSize=11.5, textColor=DARK, spaceBefore=9, spaceAfter=4,
    borderPadding=0,
)
body_style = ParagraphStyle(
    "Body", parent=styles["Normal"], fontName="Helvetica",
    fontSize=9, textColor=GRAY, leading=12, spaceAfter=3,
)
bullet_style = ParagraphStyle(
    "Bullet", parent=body_style, leftIndent=12, bulletIndent=0, spaceAfter=2,
)
job_title_style = ParagraphStyle(
    "JobTitle", parent=styles["Normal"], fontName="Helvetica-Bold",
    fontSize=9.5, textColor=DARK, spaceAfter=0,
)
job_meta_style = ParagraphStyle(
    "JobMeta", parent=styles["Normal"], fontName="Helvetica-Oblique",
    fontSize=8.5, textColor=BLUE, spaceAfter=2,
)

def hr():
    return HRFlowable(width="100%", thickness=1, color=colors.HexColor("#DDDDDD"), spaceBefore=2, spaceAfter=8)

def section_header(text):
    return Paragraph(text.upper(), section_style)

story = []

# ---------- Header ----------
story.append(Paragraph("Amraiz Ahmad", name_style))
story.append(Paragraph("BS Cyber Security Student | Aspiring Penetration Tester &amp; Red Teamer", title_style))
story.append(Spacer(1, 4))

contact_line = (
    "Faisalabad, Pakistan &nbsp;|&nbsp; +92 343 8666435 &nbsp;|&nbsp; "
    "iamamraiz.ahmad@gmail.com &nbsp;|&nbsp; github.com/AmraizAhmad &nbsp;|&nbsp; "
    "linkedin.com/in/amraiz-ahmad-45599241b"
)
story.append(Paragraph(contact_line, contact_style))
story.append(Spacer(1, 8))
story.append(hr())

# ---------- Professional Summary ----------
story.append(section_header("Professional Summary"))
story.append(Paragraph(
    "BS Cyber Security student passionate about Ethical Hacking, Penetration Testing, Red Teaming, "
    "Linux, Network Security, and Web Application Security. Continuously improving practical skills through "
    "hands-on labs, cybersecurity projects, and Capture The Flag (CTF) challenges, backed by completed "
    "training in cybersecurity fundamentals. Seeking an internship or entry-level role to apply and grow "
    "offensive security skills in a professional environment.",
    body_style,
))

# ---------- Career Objective ----------
story.append(section_header("Career Objective"))
story.append(Paragraph(
    "To become a highly skilled Red Team Operator and Penetration Tester, helping organizations strengthen "
    "their security posture through ethical, authorized, and responsible security assessments.",
    body_style,
))

# ---------- Education ----------
story.append(section_header("Education"))
story.append(Paragraph("BS Cyber Security", job_title_style))
story.append(Paragraph("Superior University &middot; Expected Graduation: 2028", job_meta_style))
story.append(Paragraph(
    "Relevant coursework: Network Security, Operating Systems, Applied Cryptography, "
    "Web Application Security, Digital Forensics.",
    body_style,
))

# ---------- Technical Skills ----------
story.append(section_header("Technical Skills"))
skills_data = [
    ["Operating Systems:", "Linux, Kali Linux"],
    ["Networking:", "TCP/IP, DNS, HTTP/HTTPS, Network Security"],
    ["Programming:", "Python, Bash"],
    ["Cybersecurity:", "Ethical Hacking, Penetration Testing, Red Teaming, Web Application Security, OWASP Top 10, Vulnerability Assessment"],
    ["Tools:", "Nmap, Burp Suite, Wireshark, Gobuster, Git, GitHub"],
    ["Currently Learning:", "Metasploit, Splunk, Active Directory"],
]
skills_table = Table(skills_data, colWidths=[1.35 * inch, 5.0 * inch])
skills_table.setStyle(TableStyle([
    ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
    ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
    ("FONTSIZE", (0, 0), (-1, -1), 9.5),
    ("TEXTCOLOR", (0, 0), (0, -1), DARK),
    ("TEXTCOLOR", (1, 0), (1, -1), GRAY),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ("TOPPADDING", (0, 0), (-1, -1), 0),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
]))
story.append(skills_table)

# ---------- Projects ----------
story.append(section_header("Projects"))
projects = [
    ("Personal Portfolio", "Next.js, TypeScript, Tailwind CSS, Framer Motion",
     "Performance-first personal portfolio website presenting cybersecurity work and projects."),
    ("Python Port Scanner", "Python, Sockets, Threading",
     "Multithreaded TCP port scanner with service detection and clean CLI output."),
    ("Network Scanner", "Python, Scapy, ARP",
     "Local network discovery tool that maps live hosts, open ports, and basic OS fingerprints."),
    ("Linux Notes", "Markdown, Linux, Bash",
     "Structured, growing knowledge base of Linux internals, hardening checklists, and command references."),
    ("Password Strength Checker", "Python, Regex, HaveIBeenPwned API",
     "Scores password strength against entropy, common patterns, and breach-list exposure."),
    ("Nmap Automation", "Bash, Python, Nmap",
     "Wrapper that chains Nmap scan profiles and auto-generates a readable recon report per target."),
    ("Log Analyzer", "Python, Pandas, Regex",
     "Log parsing utility that flags suspicious authentication attempts and attack signatures."),
]
for pname, ptech, pdesc in projects:
    story.append(Paragraph(pname, job_title_style))
    story.append(Paragraph(ptech, job_meta_style))
    story.append(Paragraph(pdesc, bullet_style))
    story.append(Spacer(1, 1.5))

# ---------- Certifications ----------
story.append(section_header("Certifications"))
story.append(Paragraph("Foundations of Cybersecurity", job_title_style))
story.append(Paragraph("Google via Coursera &middot; Completed December 2025", job_meta_style))
story.append(Spacer(1, 3))
story.append(Paragraph("Cyber Security Training", job_title_style))
story.append(Paragraph("Corvit Systems &middot; September 2025 &ndash; November 2025 &middot; Completed", job_meta_style))
story.append(Spacer(1, 3))
story.append(Paragraph(
    "<i>Currently working toward: CompTIA Security+, Cisco Certified CyberOps Associate, "
    "Google Cybersecurity Professional Certificate, TryHackMe, Hack The Box, EC-Council CEH.</i>",
    body_style,
))

doc = SimpleDocTemplate(
    "resume-amraiz-ahmad.pdf",
    pagesize=letter,
    topMargin=0.45 * inch,
    bottomMargin=0.4 * inch,
    leftMargin=0.65 * inch,
    rightMargin=0.65 * inch,
    title="Amraiz Ahmad - Resume",
    author="Amraiz Ahmad",
)
doc.build(story)
print("Resume generated.")
