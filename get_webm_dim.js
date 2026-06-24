const fs = require('fs');

function getWebMDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  
  // Very basic search for the Video track track width/height elements
  // Width element ID: 0xB0, Height element ID: 0xBA
  
  let width = null;
  let height = null;
  
  for (let i = 0; i < Math.min(buffer.length - 4, 10000); i++) {
    // Look for Width (0xB0) followed by length (usually 1 or 2 bytes)
    if (buffer[i] === 0xB0) {
      const len = buffer[i+1] & 0x7F; // Simple length extraction
      if (len === 1) width = buffer[i+2];
      else if (len === 2) width = (buffer[i+2] << 8) | buffer[i+3];
    }
    
    // Look for Height (0xBA) followed by length
    if (buffer[i] === 0xBA) {
      const len = buffer[i+1] & 0x7F;
      if (len === 1) height = buffer[i+2];
      else if (len === 2) height = (buffer[i+2] << 8) | buffer[i+3];
    }
    
    if (width !== null && height !== null) break;
  }
  
  console.log(`Dimensions found: ${width}x${height}`);
}

getWebMDimensions('public/hero-vid.webm');
