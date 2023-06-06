const { createVerifiableCredential } = require('@celo/identity');

// Create a verifiable credential
const credential = createVerifiableCredential({
  claim: {
    // Include the necessary claims
  },
  issuer: did,
  expirationDate: '2023-12-31',
});

console.log('Created Verifiable Credential:', credential);
