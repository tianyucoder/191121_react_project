//引入createStore创建store，引入applyMiddleware应用中间件
import {createStore,applyMiddleware} from 'redux'
//引入thunk用于异步编码（异步action）
import thunk from 'redux-thunk'
//引入composeWithDevTools支持开发者工具的使用
import {composeWithDevTools} from 'redux-devtools-extension'
//引入汇总之后的reducer
import allReducer from './reducers'

//暴露store对象
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))