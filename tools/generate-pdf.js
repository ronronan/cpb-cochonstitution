const fs = require('fs');
const path = require('path');
const { mdToPdf } = require('md-to-pdf');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'REGLEMENT.md');
const DEST = path.join(ROOT, 'data', 'REGLEMENT.pdf');
const STYLESHEET = path.join(__dirname, 'pdf', 'style.css');

async function main() {
  fs.mkdirSync(path.dirname(DEST), { recursive: true });

  const pdf = await mdToPdf(
    { path: SRC },
    {
      dest: DEST,
      stylesheet: [STYLESHEET],
      pdf_options: {
        format: 'a4',
        printBackground: true,
        preferCSSPageSize: true,
      },
    }
  );

  if (!pdf) {
    throw new Error('La génération du PDF a échoué.');
  }

  console.log(`PDF généré : ${path.relative(ROOT, DEST)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
