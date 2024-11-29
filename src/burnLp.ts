import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID, MintLayout, Token } from '@solana/spl-token';
import { Connection, PublicKey, Transaction, SystemProgram, Keypair, TransactionInstruction, sendAndConfirmRawTransaction, sendAndConfirmTransaction } from '@solana/web3.js';

export async function burnToken(
    connection: Connection,
    mainKp: Keypair,
    mintAddress: PublicKey,
    tokenAccount: PublicKey
) {
   
}
