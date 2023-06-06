const { CeloWallet } = require('@celo/wallet-base');
const { ContractKit } = require('@celo/contractkit');

// Create a Celo wallet instance
const wallet = new CeloWallet();

// Create a ContractKit instance using the wallet
const kit = ContractKit.newKitFromWallet(wallet);

// Sign a transaction
const signedTx = await wallet.signTransaction(tx);

console.log('Signed Transaction:', signedTx);
