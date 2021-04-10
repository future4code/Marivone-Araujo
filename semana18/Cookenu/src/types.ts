
export type authenticationData = {
   id: string,
   role: string
}

export type user = {
   id: string,
   name: string,
   email: string,
   password: string,
   role: string
   
}

export type recipe = {
   id: string,
   user_id: string,
   title: string, 
   description: string, 
}

export type editRecipe = {
   title: string, 
   description: string, 
}

export enum userRole{
   ADMIN = "ADMIN",
   NORMAL = "NORMAL"
}