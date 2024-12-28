import React from 'react'
import { legacy_createStore } from 'redux'
import { reducer } from './reducer'

const intilastate={
    counter :0
}

 const store =legacy_createStore(reducer,intilastate)
 export default store;