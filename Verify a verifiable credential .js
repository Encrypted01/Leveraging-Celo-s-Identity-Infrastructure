const { verifyVerifiableCredential } = require('@celo/identity');

// Verify a verifiable credential
const isValid = verifyVerifiableCredential(credential);

console.log('Is Verifiable Credential Valid?', isValid);
