import { Keypair, PublicKey, Transaction, VersionedTransaction } from "@solana/web3.js"
import {
  DEVNET_PROGRAM_ID,
  jsonInfo2PoolKeys,
  Liquidity,
  MAINNET_PROGRAM_ID,
  MARKET_STATE_LAYOUT_V3, LiquidityPoolKeys,
  Token, TokenAmount, ZERO, ONE, TEN,
  TOKEN_PROGRAM_ID, parseBigNumberish, bool,
  buildSimpleTransaction,
  TxVersion
} from "@raydium-io/raydium-sdk"
import { unpackMint } from "@solana/spl-token";
import base58 from "bs58"
import BN from "bn.js"

import { addLookupTableInfo, cluster, makeTxVersion, poolCreationInterval, tokens } from "./config"
import { createMarket } from "./src/createMarket"
import { createTokenWithMetadata } from "./src/createTokenPinata"
import { outputBalance, readJson, retrieveEnvVariable, saveDataToFile, sleep } from "./src/utils"
import { PoolInfo, UserToken } from './src/types'
import {
  getTokenAccountBalance,
  assert,
  getWalletTokenAccount,
} from "./utils/get_balance";
import { buildAndSendTx, build_swap_instructions, build_create_pool_instructions } from "./utils/build_a_sendtxn";
import {
  connection,
  LP_wallet_keypair, swap_wallet_keypair,
  quote_Mint_amount,
  input_baseMint_tokens_percentage,
  lookupTableCache,
  delay_pool_open_time, DEFAULT_TOKEN, swap_sol_amount,
  swapWallets
} from "./config";

import { jitoWithAxios } from "./src/jitoWithAxios";
import { token } from "@metaplex-foundation/js";
import { executeVersionedTx } from "./src/execute";
import { txCreateNewPoolAndBundleBuy } from "./src/createPoolAndBundleBuy";
import { ammRemoveLiquidity } from "./src/removeLiquidity";

type WalletTokenAccounts = Awaited<ReturnType<typeof getWalletTokenAccount>>

const recoveryMode = retrieveEnvVariable("RECOVERY_MODE") == "true"
const programId = cluster == "devnet" ? DEVNET_PROGRAM_ID : MAINNET_PROGRAM_ID

const single = async (token: UserToken) => {
  let params: PoolInfo
  try {
      //TODO
  } catch (error) {
    console.log("Error happened in one of the token flow", error)
  }
}

const main = async () => {
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    console.log(`Token ${i + 1} is to be created`)
    await single(token)
    // await removeLiquidity()
    await sleep(10000)
    console.log("One token process is ended, and go for next one")
  }
}

main()
