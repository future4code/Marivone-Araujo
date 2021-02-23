export const goToLoginPage = (history) => {
    history.push("/login");
  };
  
  export const goToRegisterPage = (history) => {
    history.push("/cadastrar");
  };
 
  export const goToFeedPage = (history) => {
    history.push("/");
  };
  
  export const goToPostPage = (history, id) => {
    history.push(`/post/${id}`);
  };
  
  
  
  
