import * as bycrypt from 'bcryptjs';

export const hash = async (s: string): Promise<string> =>{
     
    const rounds: number = Number(process.env.BCRYPT_COST); 
    if (isNaN (Number (process.env.BCRYPT_COST))){
        throw new Error ("O cost precisa ser um número")
    }
    const salt = await bycrypt.genSalt(rounds);
    const result = await bycrypt.hash(s, salt);

    return (result);
}

export const compare = (s: string, hash: string): Promise<boolean> =>{
    return bycrypt.compare(s, hash)
}