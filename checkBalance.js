const { ethers } = require('ethers');

// Ganti dengan URL Infura atau Alchemy kamu
const provider = new ethers.JsonRpcProvider('https://your-infura-or-alchemy-url');

// Ganti dengan array alamat wallet yang ingin dicek
const walletAddresses = [
    '0xYourWalletAddress1',
    '0xYourWalletAddress2',
    '0xYourWalletAddress3'
];

async function checkBalances(addresses) {
    for (const address of addresses) {
        try {
            const balance = await provider.getBalance(address);
            const formattedBalance = ethers.formatEther(balance);
            console.log(`Saldo wallet ${address}: ${formattedBalance} ETH`);
        } catch (error) {
            console.error(`Error untuk ${address}:`, error);
        }
    }
}

checkBalances(walletAddresses);
