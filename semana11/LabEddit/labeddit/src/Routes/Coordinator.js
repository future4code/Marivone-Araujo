export const goToLoginPage = (history) => {
    history.push("/");
  };
  
  export const goToRegisterPage = (history) => {
    history.push("/cadastrar");
  };
 
  export const goToFeedPage = (history) => {
    history.push("/feed");
  };
  
  export const goToPostPage = (history, id) => {
    history.push(`/post/${id}`);
  };
  
  
  
  
