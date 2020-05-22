import {createStore} from 'redux'

let loginInfo={
  isLogin:false,
  isLoading:false,
  user:''
}

function loginReducer(state={...loginInfo},action){
  switch (action.type) {
    case 'loginRequest':
      return {...state,isLoading: true}
    case 'successful':
      return {...state,...action.payload,isLoading: false};
    case 'fail':
      return {...state,isLoading: false}
    default:
      break;
  }
}

const loginStore=createStore(loginReducer)
export default loginStore