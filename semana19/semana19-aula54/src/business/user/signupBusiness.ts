import { insertUser } from "../../data/insertUser";
import { generateToken } from "../../services/authenticator";
import { hash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";
import { convertStringToUserRole, signupInput } from "../../model/user";

export async function signupBusiness(input: signupInput): Promise<string> {
  try {
    if (
      !input.name ||
      !input.nickname ||
      !input.email ||
      !input.password ||
      !input.role
    ) {
      throw new Error(
        'Preencha os campos "name","nickname", "email" e "password"'
      );
    }

    if (input.email.indexOf("@") === -1) {
      throw new Error("Insira um '@' no campo email");
    }

    if (input.password.length < 6) {
      throw new Error("Password deve conter, no mínimo, 6 caracteres");
    }
    const id: string = generateId();

    const cypherPassword = await hash(input.password);

    await insertUser({
      id,
      name: input.name,
      nickname: input.nickname,
      email: input.email,
      password: cypherPassword,
      role: convertStringToUserRole(input.role),
    });

    const token: string = generateToken({
      id,
      role: convertStringToUserRole(input.role),
    });

    return token;
  } catch (error) {
    throw new Error(
      error.message ||
        "Erro ao criar usuário. Por favor, consulte o administrador do sistema."
    );
  }
}
