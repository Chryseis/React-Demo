/**
 * Created by AllenFeng on 2016/12/9.
 */
import * as Action from '../constants/ActionType';

const initialState={
    provinces:[],
    citys:[],
    subdistricts:[],
    showPro:false,
    showCitys:true,
    showSub:true
}

const reducersMap={
    [Action.GET_PROVINCES]:(state,action)=>{
        return {provinces:action.area,showPro:false,showCitys:true,showSub:true}
    },
    [Action.GET_CITYS]:(state,action)=>{
        return {citys:action.citys,showPro:true,showCitys:false,showSub:true}
    },
    [Action.GET_SUBDISTRICTS]:(state,action)=>{
        return {subdistricts:action.subdistricts,showPro:true,showCitys:true,showSub:false}
    }
}

export function citys(state=initialState,action) {
    const reduceFn=reducersMap[action.type];
    if(!reduceFn){
        return state;
    }
    return Object.assign({},state,reduceFn(state,action));
}