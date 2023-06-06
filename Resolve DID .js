const { resolveDID } = require('@celo/identity');

// Resolve a DID to retrieve user information
const resolvedData = resolveDID(did);

console.log('Resolved Data:', resolvedData);
