import {
  buildSimpleTransaction,
  InnerSimpleV0Transaction,
  LiquidityPoolKeysV4,
  LOOKUP_TABLE_CACHE,
  TokenAccount,
  TokenAmount,
  TxVersion,
} from "@raydium-io/raydium-sdk";
import {
  Connection,
  Keypair,
  SendOptions,
  Signer,
  Transaction,
  VersionedTransaction,
} from "@solana/web3.js";
import { Liquidity } from "@raydium-io/raydium-sdk";
import { cluster, connection } from "../config";

export async function sendTx(
  connection: Connection,
  payer: Keypair | Signer,
  txs: (VersionedTransaction | Transaction)[],
  options?: SendOptions
): Promise<string[]> {
  
}

export async function buildAndSendTx(
  keypair: Keypair,
  innerSimpleV0Transaction: InnerSimpleV0Transaction[],
) {
  
}

export async function build_swap_buy_instructions(
  connection: Connection,
  poolKeys: LiquidityPoolKeysV4,
  tokenAccountRawInfos_Swap: TokenAccount[],
  keypair: Keypair,
  inputTokenAmount: TokenAmount,
  minAmountOut: TokenAmount
) {
  
}

export async function build_swap_sell_instructions(
  connection: Connection,
  poolKeys: LiquidityPoolKeysV4,
  tokenAccountRawInfos_Swap: TokenAccount[],
  keypair: Keypair,
  inputTokenAmount: TokenAmount,
  minAmountOut: TokenAmount
) {
  
}
