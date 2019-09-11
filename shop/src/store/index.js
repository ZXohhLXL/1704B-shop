import {createStore,combineReducers} from "redux"
import user from "./user/index.reducer"

let reducer=combineReducers({
    user
})
let store=createStore(reducer)
window.store=store
export default store