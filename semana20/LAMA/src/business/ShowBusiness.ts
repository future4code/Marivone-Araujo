import { BandDatabase } from "../data/BandDatabase";
import { ShowDatabase } from "../data/ShowDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { NotFoundError } from "../error/NotFoundError";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { Show, ShowInputDTO } from "../model/Show";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness{
    constructor(
        private showDatabase: ShowDatabase,
        private bandDatabase: BandDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ){}

    async createShow(input: ShowInputDTO, token: string){
        const tokenData = this.authenticator.getData(token)

       
        if(tokenData.role !== UserRole.ADMIN){
            throw new UnauthorizedError("Only ADMIN can access this feature")
        }         

        if(!input.bandId || !input.weekDay || !input.startTime || !input.endTime){
            throw new InvalidInputError("You must insert 'id', 'week day', 'start time', 'end time' ")
        }

        if (input.startTime < 8 || input.endTime > 23 || input.startTime >= input.endTime){
            throw new InvalidInputError("Invalid time  to create Show ")
        }

        if (!Number.isInteger(input.startTime) || !Number.isInteger(input.endTime)){
            throw new InvalidInputError("Time should be integer to Create Show")
        }

        const band = await this.bandDatabase.getBandByIdOrNameOrFail(input.bandId)

        if(!band){
            throw new NotFoundError("Band not found")
        }

        const registeredShows = await this.showDatabase.getShowByTime(input.weekDay, input.startTime, input.endTime)

        if(registeredShows.length) {
            throw new InvalidInputError("No more shows can be registered at this time")
        }       
        await this.showDatabase.createShow(
            Show.toShow({
                ...input,
                id: this.idGenerator.generate()
            })
        )
    }
}