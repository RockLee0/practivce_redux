import { Middleware } from "redux";

const logger:Middleware=(store)=>(next)=>(action)=>{
console.log('Current State',store.getState());
console.log('Action',action);
next(action);
}
export default logger;