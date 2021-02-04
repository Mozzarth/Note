import sql from "../../../shared/infrastructure/persistence/sql/implements/connectionMySql";
import { EmailAddres } from "../../../shared/domain/value-object/EmailAdress";
import { IFindUserRepository } from "../domain/findUserRepository";
import { Uuid } from "../../../shared/domain/value-object/Uuid";
import { User } from "../../createUser/domain/User";

type queryResponse = { idUSer: string, email: string, password: string } | undefined

export class FindUserRepository implements IFindUserRepository {


    async handle(email: string): Promise<User | undefined> {
        // TODO active = 0 ya no va 
        try {
            const connection = await sql.getConnection()
            return new Promise((res, rej) => {
                connection.query(`SELECT
                                  BIN_TO_UUID(idUSer) as idUSer,
                                  email,
                                  password
                                  FROM users where email = ?;`, [email],
                    (error, result: queryResponse[], field) => {
                        if (error) { return rej(error) }
                        if (result[0] == undefined) { return res(result[0]) }
                        const user = new User(
                            {
                                id: new Uuid(result[0].idUSer),
                                email: new EmailAddres(result[0].email),
                                password: result[0].password
                            })
                        connection.end()
                        res(user)
                    })
            })
        } catch (error) { throw error }

    }

}