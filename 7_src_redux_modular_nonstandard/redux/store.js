//该文件可以创建一个redux中最为核心的一个对象---store，随后会暴露出去。

//引入createStore，用于创建store
import {createStore,applyMiddleware} from 'redux' 
//引入总reducer
import allReducer from './reducers'
//引入redux-thunk用于支持异步action
import thunk from 'redux-thunk'


//创建store，同时指定好为store所服务的reducer,随后暴露
export default createStore(allReducer,applyMiddleware(thunk))
