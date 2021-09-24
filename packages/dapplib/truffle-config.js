require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name reward stereo coin grace basket equal general'; 
let testAccounts = [
"0xdcdb3f67e878680af113eb181275f7fcd70cf73c8b48b65902de46db43afc597",
"0xee69d09626befda8553de6e143a11790c6ca6707ad5158bc640ee2abcc8b11b7",
"0xf4c22d2e1dfd68135d654af7a6805623048b3d9ef3b38cef3d6fac7b8438f83d",
"0xe49bdf7deaa7bf63f6e1d01ac220d99e820ebe7bd046632b6f8ecf20cebfda80",
"0x852e76ca798dfae0d2a125d88e2eaf18e9284a76cb4c2a23b264c72bed35bda6",
"0xad5c2ff9e17afddf2444dc3fdaac17237214962fd81807bf44077a3b72d7ab75",
"0x0bb680f58dc936258d0fa04d6a2fde9e9852d4e8259104a2908bd2928af6f7d7",
"0x5ce199d0bd9587ff661bb6c7738563b79d77255cc764d7a23471ec6054266cb7",
"0x3d893d3e0dfa3f77adab50b0f001192326c1d72a84f8b3346a42d7b2a47658f0",
"0xa093a87700807147de2ffffeaa734cf888f5ba77adc31de59b202ced55d22d0d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


