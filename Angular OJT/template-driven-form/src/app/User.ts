export class User{
  id: any;
  name: any;
  email: any;
  password:{
    pwd:  any;
    confirmPwd:  any;
  }| any;
  gender:  any;
  terms: any;
  
  constructor(values:Object={}){
    Object.assign(this, values);
  }
}