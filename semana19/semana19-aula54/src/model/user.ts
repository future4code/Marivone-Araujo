export enum USER_ROLES {
   normal = 'normal',
   admin = 'admin'
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type user = {
   id: string,
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type signupInput = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: string

}

export type loginInput = {
   email: string,
   password: string,
  
}

export function convertStringToUserRole (role: string): USER_ROLES{
   switch(role){
      case "normal":
         return USER_ROLES.normal;
      case "admin":
         return USER_ROLES.admin;
      default:
         throw new Error ("O user role precisa ser 'normal' ou 'admin'")
   }
}
