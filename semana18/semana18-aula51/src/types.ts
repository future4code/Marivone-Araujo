
export type authenticationData = {
   id: string,
   role: string
}

export type userCredentials = {
   email: string,
   password: string
}

export type userPersonalInfo = {
   name: string,
   nickname: string
}

export enum userRole{
   admin = "admin",
   normal = "normal"
}

export type user = {
   id: string,
   email: string,
   password: string,
   name: string,
   nickname: string,
   role: userRole
}