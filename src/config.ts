import { cosmiconfigSync } from 'cosmiconfig';
import { cwd } from 'process';

const explorerSync = cosmiconfigSync('elvenmint');
const customConfig = explorerSync.search(cwd());

// Minter Smart Contract
export const smartContractAddress = customConfig?.config?.smartContractAddress;

// Your created ESDT token for NFT collection - should also have all required roles
export const collectionTokenId = customConfig?.config?.collectionTokenId;

// Price after mint - 1 egld has 18 zeros
export const initialPriceOfNFT = customConfig?.config?.initialPriceOfNFT;

// royalties cut (format is a numeric value between 0 an 10000 (0 meaning 0% and 10000 meaning 100%)
export const royaltiesCut = customConfig?.config?.royaltiesCut || '0';

// Chain to be used (local, devnet, testnet, mainnet)
export const currentChain = customConfig?.config?.currentChain || 'devnet';

// Your wallet json file name
export const walletFileName =
  customConfig?.config?.walletFileName || 'wallet.json';

// Create NFT function name in your smart contract
export const createNftFunctionName =
  customConfig?.config?.createNftFunctionName || 'createNft';

// Your metadata.json file name (generated by 'nft-art-maker generate')
export const metadataFileName =
  customConfig?.config?.metadataFileName || 'metadata.json';

// This option will allow claiming tokens after minting. They will be sent to the caller's wallet after mint
export const claimTokensAfterMint =
  customConfig?.config?.claimTokensAfterMint || false;

export const providerIds: { [key: string]: string } = {
  local: 'local-testnet',
  testnet: 'elrond-testnet',
  devnet: 'elrond-devnet',
  mainnet: 'elrond-mainnet',
};
