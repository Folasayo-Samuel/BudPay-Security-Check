const crypto = require('crypto');

// Generate a new encryption key
const encryptionKey = crypto.randomBytes(32);

// Create a cipher using the key
const cipher = crypto.createCipher('aes-256-cbc', encryptionKey);

let encryptedData = '';

cipher.on('readable', () => {
  let chunk;
  while (null !== (chunk = cipher.read())) {
    encryptedData += chunk.toString('hex');
  }
});

cipher.on('end', () => {
  console.log('Encrypted data:', encryptedData);
});

cipher.write('Sensitive data', 'utf8');
cipher.end();