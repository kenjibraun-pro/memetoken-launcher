import { Keypair, PublicKey, Transaction, TransactionMessage, VersionedTransaction } from "@solana/web3.js"
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

import { createMarket } from "./createMarket"
import { createTokenWithMetadata } from "./createTokenPinata"
import { outputBalance, readJson, retrieveEnvVariable, saveDataToFile, sleep } from "./utils"
import { PoolInfo, UserToken } from './types'
import {
    getTokenAccountBalance,
    assert,
    getWalletTokenAccount,
} from "../utils/get_balance";
import { buildAndSendTx, build_swap_instructions, build_create_pool_instructions } from "../utils/build_a_sendtxn";
import {
    connection,
    addLookupTableInfo, cluster, makeTxVersion, poolCreationInterval, tokens,
    LP_wallet_keypair, swap_wallet_keypair,
    quote_Mint_amount,
    input_baseMint_tokens_percentage,
    lookupTableCache,
    delay_pool_open_time, DEFAULT_TOKEN, swap_sol_amount,
    swapWallets
} from "../config";

import { executeVersionedTx } from "./execute";
import { jitoWithAxios } from "./jitoWithAxios";

const programId = cluster == "devnet" ? DEVNET_PROGRAM_ID : MAINNET_PROGRAM_ID

export async function txCreateNewPoolAndBundleBuy() {
}
