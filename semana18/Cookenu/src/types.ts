
export type authenticationData = {
   id: string,
}

export type user = {
   id: string,
   name: string,
   email: string,
   password: string,
   
}

export type recipe = {
   user_id: string,
   title: string, 
   method: string, 
   date: string
}