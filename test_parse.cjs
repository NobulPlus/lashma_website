const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function run() {
  const pdfPath = 'C:/Users/USer/Downloads/CP List September 2026.pdf';
  const buffer = fs.readFileSync(pdfPath);
  const uint8 = new Uint8Array(buffer);
  const parser = new PDFParse(uint8);
  await parser.load();
  const text = await parser.getText();
  console.log('Text parsed! Total length:', text.length);
  fs.writeFileSync('extracted_text.txt', text);
  console.log('First 2000 chars:\n', text.slice(0, 2000));

  const tables = await parser.getPageTables();
  console.log('Tables count:', tables ? tables.length : 0);
  if (tables && tables.length > 0) {
    fs.writeFileSync('extracted_tables.json', JSON.stringify(tables, null, 2));
    console.log('Sample table data from page 1:');
    console.log(JSON.stringify(tables[0], null, 2).slice(0, 1000));
  }
}

run().catch(console.error);
