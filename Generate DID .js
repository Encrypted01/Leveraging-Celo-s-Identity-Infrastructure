const { CeloWallet } = require('@celo/wallet-base');
const { generateDID } = require('@celo/identity');

// Create a Celo wallet instance
const wallet = new CeloWallet();

// Generate a DID for the wallet
const did = generateDID(wallet.getAccounts()[0]);

console.log('Generated DID:', did);
