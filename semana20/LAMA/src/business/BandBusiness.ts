import { BandDatabase } from "../data/BandDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { Band, BandInputDTO } from "../model/Band";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export class BandBusiness {
    constructor(
        private bandDatabase: BandDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ){}
        async registerBand (input: BandInputDTO, token: string){

            const tokenData = this.authenticator.getData(token)
            // const id = this.idGenerator.generate()

            if (tokenData.role !== UserRole.ADMIN){
                throw new UnauthorizedError("Only ADMINS can acess this feature")
            }

            if(!input.name || !input.mainGenre || !input.responsible){
                throw new InvalidInputError("You must complete the fields: 'name', 'mainGenre' and 'responsible'")
            }

            await this.bandDatabase.createBand(
                Band.toBand({
                    ...input,
                    id: this.idGenerator.generate()
                })!
            )

        }

        async getBandDetailByIdOrName (input: string): Promise<Band>{
            if(!input){
                throw new  InvalidInputError("Invalid information to get band details")
            }

            return this.bandDatabase.getBandByIdOrNameOrFail(input)
        }
}