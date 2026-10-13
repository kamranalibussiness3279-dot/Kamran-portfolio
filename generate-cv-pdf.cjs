const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function createCV(outputPath) {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 36, bottom: 36, left: 40, right: 40 }
  });

  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  const orange = '#ff6b00';
  const darkNavy = '#070c18';
  const charcoal = '#1e293b';
  const slate = '#475569';
  const lightBg = '#f8fafc';

  // Header background banner
  doc.rect(40, 36, 515, 95).fill('#0f172a');

  // Name & Title
  doc.fillColor('#ffffff').fontSize(22).font('Helvetica-Bold').text('KAMRAN ALI', 55, 48);
  doc.fillColor(orange).fontSize(11).font('Helvetica-Bold').text('JUNIOR DIGITAL MARKETER — DIRECT-RESPONSE & PAID SOCIAL', 55, 75);

  // Contact line
  doc.fillColor('#94a3b8').fontSize(8.5).font('Helvetica')
    .text('Karachi, Pakistan  |  +92 328 6725816  |  kamranalisomoroo@gmail.com  |  Portfolio Project', 55, 95);

  let y = 145;

  // Helper section title
  function drawSectionTitle(title, yPos) {
    doc.fillColor(orange).fontSize(10.5).font('Helvetica-Bold').text(title.toUpperCase(), 40, yPos);
    doc.strokeColor('#cbd5e1').lineWidth(0.75).moveTo(40, yPos + 14).lineTo(555, yPos + 14).stroke();
    return yPos + 22;
  }

  // 1. PROFESSIONAL PROFILE
  y = drawSectionTitle('Professional Profile', y);
  doc.fillColor(charcoal).fontSize(8.5).font('Helvetica').lineGap(2.5)
    .text(
      'Trained junior digital marketer skilled in direct-response ad copywriting, competitor creative research, and vertical video storyboarding. Practiced creating high-converting multi-angle ads and marketing strategies through structured projects using marketing frameworks and AI-assisted workflows. Eager and prepared to support business owners, agency teams, and campaign managers with ad copy, competitor audits, and creative testing.',
      40, y, { width: 515, align: 'justify' }
    );
  y = doc.y + 10;

  // 2. EDUCATION & CERTIFICATION
  y = drawSectionTitle('Education & Training', y);

  // Digital Marketing Course
  doc.fillColor(charcoal).fontSize(9.5).font('Helvetica-Bold').text('Digital Marketing Course', 40, y);
  doc.fillColor(orange).fontSize(8.5).font('Helvetica-Bold').text('86% Score  |  Certified Credential', 400, y, { width: 155, align: 'right' });
  y += 12;
  doc.fillColor(slate).fontSize(8).font('Helvetica').text('Comprehensive hands-on training program', 40, y);
  y += 10;
  doc.fillColor(charcoal).fontSize(8).font('Helvetica').lineGap(2).text(
    '• Covered Meta & TikTok Ads structure, direct-response copywriting principles, audience targeting, and competitor benchmarking.\n• Hands-on campaign frameworks, ad angle split-testing, email marketing architectures, and AI tool workflows.',
    45, y, { width: 510 }
  );
  y = doc.y + 6;

  // Intermediate
  doc.fillColor(charcoal).fontSize(9).font('Helvetica-Bold').text('Intermediate (HSC Part II) — Pre-Medical', 40, y);
  doc.fillColor(slate).fontSize(8).font('Helvetica').text('Karachi, Pakistan', 450, y, { width: 105, align: 'right' });
  y += 12;
  doc.fillColor(slate).fontSize(8).font('Helvetica').text('Board of Intermediate Education Karachi (BIEK)', 40, y);
  y = doc.y + 10;

  // 3. CORE MARKETING SKILLS
  y = drawSectionTitle('Core Marketing Skills', y);

  const skills = [
    { col: 1, title: 'Direct-Response Ad Copy', desc: 'Scroll-stopping hooks, benefit-driven angles, and objection-handling copy.' },
    { col: 2, title: 'Short-Form Video Strategy', desc: '3-second visual hooks, UGC storyboards, and 9:16 vertical video ad scripts.' },
    { col: 1, title: 'Competitor Ad Auditing', desc: 'Meta Ad Library research, creative pattern analysis, and messaging breakdowns.' },
    { col: 2, title: 'Landing Page Copy', desc: 'Headline, offer section, benefit bullets, and call-to-action writing for conversion.' },
    { col: 1, title: 'Paid Social Frameworks', desc: 'Creative testing matrices (CTR, Hook Rate, Hold Rate, CPA benchmarks).' },
    { col: 2, title: 'Tracking & Setup', desc: 'Meta Pixel integration, event tracking, and Google Tag Manager basics.' },
  ];

  const colWidth = 250;
  let rowY = y;
  for (let i = 0; i < skills.length; i += 2) {
    const s1 = skills[i];
    const s2 = skills[i + 1];

    doc.fillColor(charcoal).fontSize(8.5).font('Helvetica-Bold').text(`• ${s1.title}: `, 40, rowY, { continued: true });
    doc.fillColor(slate).font('Helvetica').text(s1.desc, { width: colWidth });

    if (s2) {
      doc.fillColor(charcoal).fontSize(8.5).font('Helvetica-Bold').text(`• ${s2.title}: `, 300, rowY, { continued: true });
      doc.fillColor(slate).font('Helvetica').text(s2.desc, { width: colWidth });
    }
    rowY += 18;
  }
  y = rowY + 6;

  // 4. HANDS-ON PRACTICE PROJECTS (URBAN THREAD CASE STUDIES)
  y = drawSectionTitle('Hands-On Practice Projects (Urban Thread - D2C Fashion)', y);

  const projects = [
    {
      title: 'Project 1: Competitor Analysis & Ad Strategy Report',
      role: 'Competitor Intelligence & Ad Auditing',
      bullets: [
        'Researched 3 local streetwear competitors, identifying creative fatigue and sizing objection gaps.',
        'Developed 6 hook-driven direct-response angles focusing on fabric weight, durability, and relaxed drop-shoulder cut.',
        'Constructed a 5-variable creative testing matrix isolating Hook Rate, CTR, and CPA.'
      ]
    },
    {
      title: 'Project 2: Direct-Response Ad Copy Samples',
      role: 'Meta Paid Feeds (Facebook & Instagram)',
      bullets: [
        'Wrote multi-angle headline and body copy variations with sensory tactile details and explicit pricing.',
        'Designed high-contrast ad creatives in Canva and Pomelli with mobile-first readability.'
      ]
    },
    {
      title: 'Project 3: TikTok Video Ad Creatives & Storyboards',
      role: 'Short-Form Video Strategy & CapCut Production',
      bullets: [
        'Scripted high-impact 15-second vertical video ads featuring 3-second macro fabric pattern interrupts.',
        'Produced 9:16 mobile video concepts optimized for TikTok with on-screen text overlays and COD call-to-action.'
      ]
    }
  ];

  projects.forEach((p) => {
    doc.fillColor(charcoal).fontSize(8.5).font('Helvetica-Bold').text(p.title, 40, y);
    doc.fillColor(orange).fontSize(7.5).font('Helvetica-Bold').text(p.role, 320, y, { width: 235, align: 'right' });
    y += 11;
    p.bullets.forEach((b) => {
      doc.fillColor(slate).fontSize(7.8).font('Helvetica').text(`  - ${b}`, 45, y, { width: 505 });
      y = doc.y + 1;
    });
    y += 4;
  });

  // 5. TOOLS & TECHNOLOGIES
  y = drawSectionTitle('Tools & Software', y);
  doc.fillColor(charcoal).fontSize(8.2).font('Helvetica').lineGap(2).text(
    'Creative & Video: Canva, CapCut Desktop, Flow / Veo 3, Pomelli\n' +
    'AI & Research: Google AI Studio, NotebookLM, Meta Ad Library\n' +
    'Tracking & Web: Meta Pixel, Google Tag Manager',
    40, y, { width: 515 }
  );

  doc.end();

  return new Promise((resolve, reject) => {
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  });
}

async function run() {
  const publicPath = path.join(__dirname, 'public', 'Kamran-Ali-CV.pdf');
  const rootPath = path.join(__dirname, 'Kamran-Ali-CV.pdf');
  await createCV(publicPath);
  console.log('Created:', publicPath);
  fs.copyFileSync(publicPath, rootPath);
  console.log('Copied to:', rootPath);
}

run().catch(console.error);
