require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remind hub include clinic fringe ski'; 
let testAccounts = [
"0x4c827d8cf2167ec656f1c3e7ef17244c94ea1ed6c077788732be21fcf072e558",
"0x312ac6705e6696ff406968fc50cd379645864d64fced3bb77471eb6b49e7b8a2",
"0x8085c0959fd3e72503450d1e7dae2718afaf3d85807796df46f039c6b7024b07",
"0xf61184582952a1362e8a6323925b76ddc1b37fe55aa8ae985876f840af647b9d",
"0xde532c6c434eb2b180a1ae54e41187422e56ede5a3d1ca7645a29c5ca3010688",
"0x9bd5383bef57e0cf5c4a974ab05a08b40a743b0c93dd050bebc5339f2efb9643",
"0x4d66277ddd8ad3612cf559d6543eb4440002bafb2f020d5a74e591669d2dc03b",
"0xa0ab9cdb0cc80df562dc8860db2b26619ae53ec83ab715d3aa106597851d3b00",
"0x97bd8636ac6e8bc3ce73eaa33282b5556533af0f4d7bf5067f294bdeeff6f783",
"0xdec0f8dc3602681f0951e727affdf79698d33ab383a0c635e7061adb5ae3f997"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

