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
 
        const characters: string = "0123456789abcdefABCDEF@#-*"

        let newPassword: string = ""

        for (let i = 0; i < 12; i++){
            const randomIndex: number = (Math.random() * characters.length)
            newPassword += characters[randomIndex]
        }

        const cypherText: string = await hash(newPassword)

        await connection("cookenu_user")
            .update({password: cypherText})
            .where({email})

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

        res.send(`Um email foi enviado para ${email}`)

    } catch (error) {
        res.status(500).send(error.message)
    }

} 