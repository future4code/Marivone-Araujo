import {Request, Response} from "express"
import connection from "../connection"
import { hash } from "../services/hashManager"
import transporter from "../services/nodemailer"

export default async function resetPassword(
    req: Request,
    res: Response
): Promise <void> {
  
    try {
        const { email } = req.body
        // const email = req.body.email

        //gerar nova senha
        const characters: string = "0123456789abcdefABCDEF@#-*"

        let newPassword: string = ""

        for (let i = 0; i < 12; i++){
            const randomIndex: number = (Math.random() * characters.length)
            newPassword += characters[randomIndex]
        }

        //salvar no banco
        const cypherText: string = await hash(newPassword)

        await connection("to_do_list_users")
            .update({password: cypherText})
            .where({email})

        //enviar para o email do usuário 

        const info = transporter.sendMail({
            from: `Astrodev <${process.env.NODEMAILER_USER}>`,
            to: email,
            subject: "Alteração de senha",
            text: "Alteramos sua senha",
            html: `
            <h2>Sua nova senha é:</h2>
            <h3>${newPassword}</h3>
            `
        })

        // console.log(info)

        res.send(`Um email foi enviado para ${email}`)

    } catch (error) {
        // console.log(error.message)
        res.status(500).send('Internal server error')
    }

} 