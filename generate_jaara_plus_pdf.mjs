import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

async function createJaaraPlusPdf() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const orangeColor = rgb(0.95, 0.51, 0.0); // #f28201
  const darkOrange = rgb(0.8, 0.35, 0.0);
  const headerBg = rgb(0.92, 0.45, 0.05);
  const tableHeaderBg = rgb(0.0, 0.6, 0.8);
  const lightGrey = rgb(0.95, 0.95, 0.95);
  const textColor = rgb(0.1, 0.1, 0.1);

  const margin = 36;
  const pageWidth = 595.28; // A4
  const pageHeight = 841.89;
  const contentWidth = pageWidth - margin * 2;

  function createPage() {
    return pdfDoc.addPage([pageWidth, pageHeight]);
  }

  let currentPage = createPage();
  let y = pageHeight - margin;

  function checkSpace(needed) {
    if (y - needed < margin) {
      currentPage = createPage();
      y = pageHeight - margin;
    }
  }

  function drawTitle(title) {
    checkSpace(50);
    currentPage.drawRectangle({
      x: margin,
      y: y - 35,
      width: contentWidth,
      height: 35,
      color: orangeColor,
    });
    currentPage.drawText(title, {
      x: margin + 15,
      y: y - 25,
      size: 15,
      font: fontBold,
      color: rgb(1, 1, 1),
    });
    y -= 45;
  }

  function drawSectionHeader(sectionTitle) {
    checkSpace(24);
    currentPage.drawRectangle({
      x: margin,
      y: y - 18,
      width: contentWidth,
      height: 18,
      color: headerBg,
    });
    currentPage.drawText(sectionTitle, {
      x: margin + 8,
      y: y - 13,
      size: 9.5,
      font: fontBold,
      color: rgb(1, 1, 1),
    });
    y -= 22;
  }

  function drawBullet(text, level = 0) {
    const fontSize = 8.5;
    const indent = margin + 12 + level * 12;
    const maxWidth = contentWidth - 20 - level * 12;
    
    const words = text.split(' ');
    let lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const width = fontRegular.widthOfTextAtSize(testLine, fontSize);
      if (width > maxWidth) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);

    checkSpace(lines.length * 11 + 2);

    lines.forEach((line, idx) => {
      if (idx === 0) {
        currentPage.drawText('•', { x: indent - 8, y: y - 8, size: fontSize, font: fontBold, color: darkOrange });
      }
      currentPage.drawText(line, { x: indent, y: y - 8, size: fontSize, font: fontRegular, color: textColor });
      y -= 11;
    });
    y -= 2;
  }

  // --- TITLE & COVERAGE ---
  drawTitle('ILERA-EKO STANDARD JAARA PLUS BENEFITS PACKAGE');

  drawSectionHeader('CONSULTATION');
  drawBullet('Registration');
  drawBullet('General consultation');
  drawBullet('Blood Pressure, Weight, Temperature Checks, Height, RR');
  drawBullet('Specialist Consultation (limited to 8 visits per policy year)');
  drawBullet('General surgeons', 1);
  drawBullet('Paediatrician', 1);
  drawBullet('ENT Specialist', 1);
  drawBullet('Dietician', 1);
  drawBullet('Gynaecologist', 1);
  drawBullet('Family Physician', 1);
  drawBullet('Cardiologist', 1);
  drawBullet('Orthopaedics', 1);
  drawBullet('Physiotherapy (when medically indicated and up to 10 sessions)');

  drawSectionHeader('COMMON AILMENTS');
  drawBullet('Out-patient care for common ailments: Malaria and other acute uncomplicated febrile illnesses, Diarrhoeal diseases, Acute respiratory tract infections, Uncomplicated pneumonia, Simple anemia (not requiring blood transfusion), Simple skin diseases other uncomplicated bacterial, fungal, parasitic and viral infections and illnesses.');
  drawBullet('Follow-up treatment of chronic illnesses, e.g. Hypertension, Diabetes mellitus, Sickle cell, Asthma, Osteoarthritis.');
  drawBullet('First Aid for Dog bites, Snake bites, Scorpion stings, and other minor musculoskeletal diseases.');

  drawSectionHeader('CHILDHOOD ILLNESSES');
  drawBullet('Feeding problems and nutritional counselling');
  drawBullet('Treatment of common childhood illnesses e.g., Malaria and other uncomplicated febrile illnesses, Diarrhoeal diseases, Uncomplicated malnutrition, Measles, Upper respiratory tract infections.');
  drawBullet('Uncomplicated pneumonia and other childhood exanthemas as well as Common skin diseases.');

  drawSectionHeader('EYECARE');
  drawBullet('Treatment of minor eye ailments including Conjunctivitis, Parasitic and allergic ailments, Simple contusion, Abrasions');
  drawBullet('Removal of conjunctival non-penetrating foreign body');
  drawBullet('Refraction, Lens and Frames (NGN 10,000 LIMIT)');
  drawBullet('Pterygium Surgery (1 eye/year and with full premium payment)');
  drawBullet('Cataract Extraction Surgery (1 eye/year and with full premium payment)');

  drawSectionHeader('FAMILY PLANNING SERVICES');
  drawBullet('Counselling on family planning methods');
  drawBullet('Provision of services: Oral Contraceptive, Condom (3 units-per family/policy)');
  drawBullet('Provision of services: Emergency contraception, Injectables, Implant, Plain Intrauterine contraceptive device (Copper-T)');

  drawSectionHeader('CHILD WELFARE SERVICES');
  drawBullet('Nutritional advice, health education and other services');
  drawBullet('Growth monitoring');
  drawBullet('National Program on Immunization (NPI) schedule for Under 5s');

  drawSectionHeader('HOSPITAL CARE AND ADMISSION');
  drawBullet('Semi-private ward');
  drawBullet('A single meal per day (where available)');
  drawBullet('21 days cumulative per year');

  drawSectionHeader('PHARMACEUTICAL CARE');
  drawBullet('Provision of prescribed drugs in line with LSHS drug formulary');
  drawBullet('Community pharmacies are available for drugs pick-up (Mon – Sat from 9am – 8pm only)');

  drawSectionHeader('BLOOD TRANSFUSION');
  drawBullet('Two (2) pint limit per year');
  drawBullet('Donor Screening');

  drawSectionHeader('CHRONIC DISEASE');
  drawBullet('Screening and Diagnosis of Diabetes, Hypertension, Asthma and Osteoarthritis.');
  drawBullet('Treatment of Diabetes, Hypertension, Asthma and Osteoarthritis');
  drawBullet('Periodic routine investigations for Diabetes and Hypertension');

  drawSectionHeader('HIV / AIDS SERVICES');
  drawBullet('Provider initiated test based on clinical guidelines');
  drawBullet('Referral to HIV referral centres for treatment');
  drawBullet('Client-Initiated testing (once a year)');
  drawBullet('HIV service charge (consultation and dispensing of medication)');
  drawBullet('Perinatal HIV exposure for Neonate (Zidovudine and Nevirapine)');

  drawSectionHeader('TUBERCULOSIS SERVICES');
  drawBullet('Sputum AFB for Tuberculosis');
  drawBullet('Referral linkages to designated treatment centres for treatment');
  drawBullet('TB Service charge (Consultation, counselling and dispensing of drugs)');

  drawSectionHeader('HAEMATOLOGY');
  drawBullet('Full Blood count, ESR Westergren, Malaria Parasites, Genotype');
  drawBullet('Rhesus Factor, Blood Group, Bleeding Time, Clotting Time, Prothrombin Time (PT), Partial Thromboplastin Time (PTT), Screening of Blood');

  drawSectionHeader('CLINICAL CHEMISTRY');
  drawBullet('Random/Fasting Blood Sugar, 2HPP, Electrolyte (Sodium, Potassium, Chloride & Bicarbonate)');
  drawBullet('Pregnancy Test, Urinalysis, Widal Test');
  drawBullet('Oral Glucose Tolerance Test (OGTT)');
  drawBullet('Blood Urea Creatinine, Creatinine Clearance');
  drawBullet('Liver function Test (Cholesterol, Triglyceride, HDL/LDL Cholesterol, Gamma GT, Uric Acid, Bilirubin (Direct/Indirect), Total Protein and Albumin.');
  drawBullet('Glycosylated Haemoglobin (HbA1C)');
  drawBullet('Lipid profile: Cholesterol, Triglyceride, HDL/LDL Cholesterol');

  drawSectionHeader('MICROBIOLOGY');
  drawBullet('Sputum M/C/S');
  drawBullet('M/C/S for urine, stool, blood, HVS, wound swabs, semen and CSF');
  drawBullet('Semen analysis');
  drawBullet('Helicobacter Pylori');

  drawSectionHeader('DIAGNOSTIC RADIOLOGICAL INVESTIGATIONS');
  drawBullet('Plain X-Ray (Skull, Chest, Limbs, Vertebra)');
  drawBullet('Echocardiogram (1 PER YEAR)');

  drawSectionHeader('ULTRASOUND SCAN & TESTS');
  drawBullet('Obstetrics scan (Minimum of 2 + 1 extra per year outside ANC)');
  drawBullet('Abdominopelvic USS (2 PER YEAR)');
  drawBullet('ECG (2 PER YEAR)');
  drawBullet('Pap Smear (1 PER YEAR)');
  drawBullet('Mammogram (1 PER YEAR)');

  drawSectionHeader('MATERNAL & NEWBORN CARE (PRINCIPAL OR SPOUSE ONLY)');
  drawBullet('Antenatal Services (VDRL, Hep.B (HbsAg), HIV, blood group, BP, glucose, HB, prenatal drugs and at least 2 routine ultra-sound scans)');
  drawBullet('Cervical Cerclage');
  drawBullet('Normal Delivery, assisted vacuum or forceps deliveries');
  drawBullet('Elective/Emergency Caesarean Section');
  drawBullet('Dilatation and curettage for missed abortion and incomplete abortion');
  drawBullet('Rho(D) immune globulin human (Anti-D)');
  drawBullet('Hysterectomy, Explorative laparotomy indicated to control post-partum haemorrhage, Ruptured Ectopic');
  drawBullet('National Program on Immunization (NPI) vaccination schedule');
  drawBullet('Circumcision of a male neonate');
  drawBullet('Ear-piercing of female neonate');
  drawBullet('Perinatal care for the following conditions in the first 28 days: Incubator care for premature newborn (5 days limit), Ophthalmia neonatorum, Phototherapy, Asphyxia, Sepsis, EBT, Neonatal Tetanus.');
  drawBullet('Local Ambulance Services for Maternity emergency from Primary care facility');

  drawSectionHeader('DENTAL CARE');
  drawBullet('Preventive oral healthcare (COUNSELLING)');
  drawBullet('Scaling and polishing (1 PER YEAR)');
  drawBullet('Non-surgical extraction (2 PER YEAR)');
  drawBullet('Dental X-ray (2 PER YEAR)');
  drawBullet('Composite Filing (2 PER YEAR)');

  drawSectionHeader('SURGERIES');
  drawBullet('Minor: Incisions and Drainages, Suturing of Minor Laceration, Wound dressing (5 days limit)');
  drawBullet('Minor Surgeries: Herniotomy, Herniorrhaphy, Appendectomy (Full Premium Payment)');
  drawBullet('Lumpectomy (ganglion, simple lipoma, breast) (Full Premium Payment)');
  drawBullet('POP application for simple fractures');
  drawBullet('Major Surgeries: Exploratory Laparotomy (Ruptured appendix & Ruptured Ectopic), Salpingectomy, Repair of vesico-vaginal / recto-vaginal fistula (Full Premium Payment)');

  drawSectionHeader('RENAL DIALYSIS (FROM 2ND CONSECUTIVE YEAR)');
  drawBullet('Acute Renal Failure (at designated centers) (6 SESSIONS PER YEAR)');

  drawSectionHeader('CANCER TREATMENT (FROM 2ND CONSECUTIVE YEAR - NGN 2,500,000 LIMIT)');
  drawBullet('Treatment of stages 1 and 2 of Breast, Prostate, Cervical, Colorectal Cancer and Nasopharyngeal cancers');
  drawBullet('Treatment of stages 1 and 2 of Childhood cancer: Burkitt’s Lymphoma and Retinoblastoma');

  drawSectionHeader('ANNUAL MEDICAL SCREENING AT DESIGNATED CENTERS (PRINCIPAL & SPOUSE ONLY)');
  drawBullet('Enrollees are entitled to these tests from the 2nd consecutive policy year (FULL PREMIUM PAYMENT):');
  drawBullet('Physical examination, Urinalysis, Fasting Blood Sugar, Total Cholesterol, Basic Eye Exam, ALT, Occult blood test (stool), Chest X-ray (PA View), HBsAg, Serum creatinine, Pap smear, Serum Albumin, Breast Ultrasound scan (Sono Breast) (Bilateral), Abdomen USS/Pelvic USS, Prostate-Specific Antigen (PSA) (Male 40 Years & Above)');

  drawSectionHeader('EMERGENCY CARE');
  drawBullet('Establishing an intravenous line, Simple tracheostomy, Management of convulsion, Control of bleeding, CPR, assisted respiration (e.g. Ambubag, etc.)');
  drawBullet('Management of simple fractures (using splints, neck collars, etc.)');
  drawBullet('Aspiration of mucus plug to clear airways');
  drawBullet('Acute Asthma Attack & other emergency conditions as may be listed from time to time');
  drawBullet('Stabilisation for 48 HRS in a healthcare facility');

  drawSectionHeader('ILERA-EKO VIRTUAL BOOTH & TELEMEDICINE SERVICES');
  drawBullet('Virtual Booth (V-Booth) Locations: Adamo Market (Ikorodu), Sabo Market (Ikorodu), Sabo Market (Yaba), Ketu Fruit Market (Ketu), Aiyetoro Market (Epe)');
  drawBullet('V-Booth Services: Health Education, Blood Pressure checks, Blood Glucose Checks, Height & Weight Measurements, E-pharmacy, Emergency & Primary Care Referrals, Scheme Enrolment & Payment');
  drawBullet('Telemedicine Services: 24hrs via App & Telephone (080000-EKO-VBT / 080000-356-828 / 0800-035-6633), Prescriptions, Mental Health Consultation & Counseling, Clinical Psychologist Access');

  // --- PREMIUM TABLE ---
  checkSpace(160);
  drawSectionHeader('PREMIUM TABLE');

  const tableY = y - 5;
  const colWidths = [110, 130, 140, 140];
  const tableHeaders = ['POLICY DURATION', 'INDIVIDUAL', 'SMALL FAMILY (2-4)', 'LARGE FAMILY (5-6)'];
  
  currentPage.drawRectangle({
    x: margin,
    y: tableY - 20,
    width: contentWidth,
    height: 20,
    color: tableHeaderBg,
  });

  let curX = margin + 5;
  tableHeaders.forEach((th, i) => {
    currentPage.drawText(th, {
      x: curX,
      y: tableY - 14,
      size: 8.5,
      font: fontBold,
      color: rgb(1, 1, 1),
    });
    curX += colWidths[i];
  });

  const row1 = ['Annual', 'NGN 40,000', 'NGN 146,000', 'NGN 220,000'];
  const row2 = ['Semi-Annual', 'NGN 21,500 (Annual 43k)', 'NGN 78,500 (Annual 157k)', 'NGN 118,000 (Annual 236k)'];

  [row1, row2].forEach((row, rIdx) => {
    const rY = tableY - 20 - (rIdx + 1) * 20;
    currentPage.drawRectangle({
      x: margin,
      y: rY,
      width: contentWidth,
      height: 20,
      color: rIdx % 2 === 0 ? lightGrey : rgb(1, 1, 1),
      borderColor: rgb(0.85, 0.85, 0.85),
      borderWidth: 0.5,
    });
    let cX = margin + 5;
    row.forEach((cell, cIdx) => {
      currentPage.drawText(cell, {
        x: cX,
        y: rY + 6,
        size: 8,
        font: cIdx === 0 ? fontBold : fontRegular,
        color: textColor,
      });
      cX += colWidths[cIdx];
    });
  });

  y = tableY - 70;

  drawSectionHeader('POLICY NOTES');
  drawBullet('Access to Maternal Services, Surgeries, Annual Medical Investigations and Secondary Services is subject to full payment of annual premiums.');
  drawBullet('Maternal Care is for principal or spouse only.');
  drawBullet('Family of up to 4 comprises of Principal, Spouse & 2 children below 23years, or Principal and 3 children below 23 years.');
  drawBullet('Family of up to 6 comprises of Principal, Spouse & 4 children below 23years, or Principal and 5 children below 23 years.');
  drawBullet('Dependent/children age limit is under 23 years.');
  drawBullet('Additional dependent below 23 years will attract an additional premium of NGN 10,000 per dependant.');
  drawBullet('Additional dependent or any dependant regardless of family size above 23 years will attract NGN 15,000 per dependant.');
  drawBullet('Payment of premiums must be made on or before 25th of every month for the policy to be active from the first week of the following month.');

  const pdfBytes = await pdfDoc.save();
  const dir = `./src/assets/doc`;
  const outputPath = path.join(dir, 'jaaraPlus.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Generated jaaraPlus.pdf (${pdfBytes.length} bytes) successfully at ${outputPath}!`);
}

createJaaraPlusPdf().catch(console.error);
