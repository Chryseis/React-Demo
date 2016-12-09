/**
 * Created by AllenFeng on 2016/12/9.
 */
import * as Action from '../constants/ActionType';

const initialState={
    provinces:[],
    citys:[],
    subdistricts:[]
}

const reducersMap={
    [Action.GET_PROVINCES]:(state,action)=>{
        return {provinces:action.area}
    },
    [Action.GET_CITYS]:(state,action)=>{
        return {citys:action.citys}
    },
    [Action.GET_SUBDISTRICTS]:(state,action)=>{
        return {subdistricts:action.subdistricts}
    }
}

export function citys(state=initialState,action) {
    const reduceFn=reducersMap[action.type];
    if(!reduceFn){
        return state;
    }
    return Object.assign({},state,reduceFn(state,action));
}