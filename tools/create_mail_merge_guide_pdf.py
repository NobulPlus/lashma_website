from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import (
    Flowable,
    Image,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


OUTPUT = "output/pdf/mail_merge_step_by_step_guide.pdf"


class ScreenshotBox(Flowable):
    def __init__(self, title, labels, width=6.7 * inch, height=1.85 * inch):
        super().__init__()
        self.title = title
        self.labels = labels
        self.width = width
        self.height = height

    def draw(self):
        c = self.canv
        w, h = self.width, self.height
        c.setStrokeColor(colors.HexColor("#CBD5E1"))
        c.setFillColor(colors.HexColor("#F8FAFC"))
        c.roundRect(0, 0, w, h, 6, stroke=1, fill=1)

        c.setFillColor(colors.HexColor("#E2E8F0"))
        c.roundRect(0, h - 24, w, 6, 4, stroke=0, fill=1)
        c.setFillColor(colors.HexColor("#0F172A"))
        c.setFont("Helvetica-Bold", 9)
        c.drawString(12, h - 17, self.title)

        x = 12
        y = h - 54
        button_h = 24
        for index, label in enumerate(self.labels):
            text_w = stringWidth(label, "Helvetica", 8)
            button_w = max(72, text_w + 22)
            if x + button_w > w - 12:
                x = 12
                y -= 34
            fill = "#DCFCE7" if index == len(self.labels) - 1 else "#FFFFFF"
            stroke = "#16A34A" if index == len(self.labels) - 1 else "#CBD5E1"
            c.setFillColor(colors.HexColor(fill))
            c.setStrokeColor(colors.HexColor(stroke))
            c.roundRect(x, y, button_w, button_h, 4, stroke=1, fill=1)
            c.setFillColor(colors.HexColor("#0F172A"))
            c.setFont("Helvetica", 8)
            c.drawCentredString(x + button_w / 2, y + 8, label)
            x += button_w + 8


class MergeFlow(Flowable):
    def __init__(self, width=6.7 * inch, height=1.3 * inch):
        super().__init__()
        self.width = width
        self.height = height

    def draw(self):
        c = self.canv
        steps = [
            ("1", "Word template"),
            ("2", "Excel list"),
            ("3", "Merge fields"),
            ("4", "Preview"),
            ("5", "Print or email"),
        ]
        box_w = 86
        gap = (self.width - (box_w * len(steps))) / (len(steps) - 1)
        y = 22
        for i, (number, label) in enumerate(steps):
            x = i * (box_w + gap)
            c.setFillColor(colors.HexColor("#EFF6FF"))
            c.setStrokeColor(colors.HexColor("#60A5FA"))
            c.roundRect(x, y, box_w, 40, 5, stroke=1, fill=1)
            c.setFillColor(colors.HexColor("#1D4ED8"))
            c.circle(x + 14, y + 20, 9, stroke=0, fill=1)
            c.setFillColor(colors.white)
            c.setFont("Helvetica-Bold", 8)
            c.drawCentredString(x + 14, y + 17, number)
            c.setFillColor(colors.HexColor("#0F172A"))
            c.setFont("Helvetica", 8)
            c.drawString(x + 29, y + 16, label)
            if i < len(steps) - 1:
                c.setStrokeColor(colors.HexColor("#94A3B8"))
                c.line(x + box_w + 4, y + 20, x + box_w + gap - 4, y + 20)
                c.line(x + box_w + gap - 9, y + 24, x + box_w + gap - 4, y + 20)
                c.line(x + box_w + gap - 9, y + 16, x + box_w + gap - 4, y + 20)


def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#64748B"))
    canvas.drawString(doc.leftMargin, 0.45 * inch, "Mail Merge Step-by-Step Guide")
    canvas.drawRightString(A4[0] - doc.rightMargin, 0.45 * inch, f"Page {doc.page}")
    canvas.restoreState()


def p(text, style):
    return Paragraph(text, style)


def bullet_items(items, style):
    return ListFlowable(
        [ListItem(Paragraph(item, style), leftIndent=12) for item in items],
        bulletType="bullet",
        start="circle",
        leftIndent=16,
    )


def numbered_items(items, style):
    return ListFlowable(
        [ListItem(Paragraph(item, style), leftIndent=14) for item in items],
        bulletType="1",
        leftIndent=18,
    )


def build():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=A4,
        rightMargin=0.65 * inch,
        leftMargin=0.65 * inch,
        topMargin=0.65 * inch,
        bottomMargin=0.72 * inch,
        title="Mail Merge Step-by-Step Guide",
        author="Codex",
    )
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle("TitleLarge", parent=styles["Title"], fontSize=25, leading=30, textColor=colors.HexColor("#0F172A"), spaceAfter=10))
    styles.add(ParagraphStyle("Subtitle", parent=styles["BodyText"], fontSize=10.5, leading=15, textColor=colors.HexColor("#475569"), spaceAfter=16))
    styles.add(ParagraphStyle("Heading", parent=styles["Heading2"], fontSize=14, leading=18, textColor=colors.HexColor("#1E3A8A"), spaceBefore=12, spaceAfter=7))
    styles.add(ParagraphStyle("SmallHeading", parent=styles["Heading3"], fontSize=10.5, leading=13, textColor=colors.HexColor("#0F172A"), spaceBefore=8, spaceAfter=5))
    styles.add(ParagraphStyle("Body", parent=styles["BodyText"], fontSize=9.4, leading=13.2, textColor=colors.HexColor("#1F2937"), spaceAfter=6))
    styles.add(ParagraphStyle("Note", parent=styles["BodyText"], fontSize=8.7, leading=12, textColor=colors.HexColor("#334155"), backColor=colors.HexColor("#F8FAFC"), borderColor=colors.HexColor("#CBD5E1"), borderWidth=0.7, borderPadding=7, spaceBefore=5, spaceAfter=8))

    story = []
    story.append(Paragraph("Mail Merge Step-by-Step Guide", styles["TitleLarge"]))
    story.append(Paragraph("Create personalized letters, labels, envelopes, certificates, or email messages from one template and one recipient list.", styles["Subtitle"]))
    story.append(MergeFlow())
    story.append(Spacer(1, 8))

    story.append(Paragraph("What You Need", styles["Heading"]))
    data = [
        ["Item", "Purpose", "Example"],
        ["Main document", "The template everyone will receive.", "A letter, certificate, label sheet, or email."],
        ["Data source", "The list of people and personalized details.", "An Excel sheet with Name, Email, Address, Date."],
        ["Merge fields", "Placeholders inserted into the template.", "<<First_Name>>, <<Address>>, <<Amount>>."],
    ]
    table = Table(data, colWidths=[1.35 * inch, 2.6 * inch, 2.65 * inch])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1E3A8A")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 8.2),
        ("LEADING", (0, 0), (-1, -1), 10.5),
        ("BACKGROUND", (0, 1), (-1, -1), colors.HexColor("#FFFFFF")),
        ("GRID", (0, 0), (-1, -1), 0.45, colors.HexColor("#CBD5E1")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    story.append(table)

    story.append(Paragraph("Step 1: Prepare Your Excel List", styles["Heading"]))
    story.append(Paragraph("Create a simple spreadsheet. The first row should contain column names, and every row below it should contain one recipient.", styles["Body"]))
    excel_data = [
        ["First_Name", "Last_Name", "Email", "Address", "Appointment_Date"],
        ["John", "Smith", "john@email.com", "12 Green Road", "10 Aug 2026"],
        ["Mary", "Brown", "mary@email.com", "45 King Street", "11 Aug 2026"],
    ]
    excel_table = Table(excel_data, colWidths=[1.1 * inch, 1.1 * inch, 1.65 * inch, 1.55 * inch, 1.3 * inch])
    excel_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#DCFCE7")),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 7.7),
        ("GRID", (0, 0), (-1, -1), 0.45, colors.HexColor("#CBD5E1")),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(excel_table)
    story.append(Paragraph("Tip: Avoid blank rows, merged cells, and unclear headings. Save the Excel file before connecting it to Word.", styles["Note"]))

    story.append(Paragraph("Step 2: Start Mail Merge in Word", styles["Heading"]))
    story.append(ScreenshotBox("Microsoft Word - Mailings tab", ["File", "Home", "Insert", "Design", "Layout", "References", "Mailings", "Start Mail Merge"]))
    story.append(numbered_items([
        "Open Microsoft Word and create or open your template.",
        "Click the <b>Mailings</b> tab.",
        "Click <b>Start Mail Merge</b>.",
        "Choose the document type: Letters, Email Messages, Envelopes, Labels, or Directory.",
    ], styles["Body"]))

    story.append(Paragraph("Step 3: Connect Your Recipient List", styles["Heading"]))
    story.append(ScreenshotBox("Select recipients", ["Start Mail Merge", "Select Recipients", "Use an Existing List", "Choose Excel file"]))
    story.append(numbered_items([
        "Click <b>Select Recipients</b>.",
        "Choose <b>Use an Existing List</b>.",
        "Select your Excel file.",
        "Choose the correct worksheet or table when Word asks.",
    ], styles["Body"]))

    story.append(PageBreak())

    story.append(Paragraph("Step 4: Insert Merge Fields", styles["Heading"]))
    story.append(Paragraph("Place your cursor where a personalized detail should appear, then insert the matching field.", styles["Body"]))
    field_example = [
        [Paragraph("<b>Template text in Word</b>", styles["Body"])],
        [Paragraph("Dear &lt;&lt;First_Name&gt;&gt; &lt;&lt;Last_Name&gt;&gt;,<br/><br/>Your appointment is scheduled for &lt;&lt;Appointment_Date&gt;&gt;.<br/><br/>We will contact you at &lt;&lt;Email&gt;&gt;.", styles["Body"])],
    ]
    field_table = Table(field_example, colWidths=[6.7 * inch])
    field_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#EFF6FF")),
        ("BACKGROUND", (0, 1), (-1, -1), colors.HexColor("#FFFFFF")),
        ("BOX", (0, 0), (-1, -1), 0.7, colors.HexColor("#93C5FD")),
        ("INNERGRID", (0, 0), (-1, -1), 0.45, colors.HexColor("#DBEAFE")),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    story.append(field_table)
    story.append(ScreenshotBox("Insert fields", ["Address Block", "Greeting Line", "Insert Merge Field", "First_Name"]))

    story.append(Paragraph("Step 5: Preview the Results", styles["Heading"]))
    story.append(ScreenshotBox("Preview and check records", ["Preview Results", "Previous", "Next", "Find Recipient", "Check for Errors"]))
    story.append(bullet_items([
        "Check several recipients, not only the first one.",
        "Confirm names, dates, addresses, spacing, and punctuation.",
        "If something looks wrong, fix the Word template or Excel list before finishing.",
    ], styles["Body"]))

    story.append(Paragraph("Step 6: Finish and Merge", styles["Heading"]))
    finish_data = [
        ["Option", "Use it when you want to..."],
        ["Edit Individual Documents", "Create one new Word document containing all personalized copies."],
        ["Print Documents", "Print each personalized copy directly."],
        ["Send Email Messages", "Send personalized emails through Outlook."],
    ]
    finish_table = Table(finish_data, colWidths=[2.35 * inch, 4.35 * inch])
    finish_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1E3A8A")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 8.2),
        ("GRID", (0, 0), (-1, -1), 0.45, colors.HexColor("#CBD5E1")),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    story.append(finish_table)

    story.append(KeepTogether([
        Paragraph("Email Merge Checklist", styles["Heading"]),
        bullet_items([
            "Your Excel file must have an email column.",
            "Use <b>Start Mail Merge > Email Messages</b>.",
            "Choose the email column in the <b>To</b> field.",
            "Add a clear subject line.",
            "Use HTML format for normal formatted email.",
            "Send a test to yourself before sending to everyone.",
        ], styles["Body"]),
    ]))

    story.append(KeepTogether([
        Paragraph("Quick Troubleshooting", styles["Heading"]),
        bullet_items([
            "If fields show as &lt;&lt;First_Name&gt;&gt; after finishing, you may still be viewing the template. Use Preview Results or Finish & Merge.",
            "If the wrong names appear, reconnect the correct Excel file or worksheet.",
            "If spacing looks odd, remove extra spaces around fields in the Word template.",
            "If emails do not send, check Outlook setup and test with one recipient first.",
        ], styles["Body"]),
    ]))

    doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)


if __name__ == "__main__":
    build()
