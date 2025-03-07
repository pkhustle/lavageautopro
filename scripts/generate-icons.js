const sharp = require('sharp');
const { readFileSync } = require('fs');
const { join } = require('path');

const sizes = [16, 32, 192, 512];
const inputSvg = readFileSync(join(process.cwd(), 'public', 'icon.svg'));

async function generateIcons() {
  // Generate PNG icons
  for (const size of sizes) {
    await sharp(inputSvg)
      .resize(size, size)
      .png()
      .toFile(join(process.cwd(), 'public', `icon-${size}.png`));
    
    console.log(`Generated ${size}x${size} icon`);
  }

  // Use 32x32 as favicon.ico
  await sharp(inputSvg)
    .resize(32, 32)
    .png()
    .toFile(join(process.cwd(), 'public', 'favicon.ico'));
  console.log('Generated favicon.ico');
}

generateIcons().catch(console.error);
