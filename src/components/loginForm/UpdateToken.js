function UpdateToken(){
    const isAuthenticated = localStorage.getItem('Authorization'); 
    return isAuthenticated;
  }

  export default UpdateToken;
 