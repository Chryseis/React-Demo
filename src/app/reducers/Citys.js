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
    showSub:true,
    currentPro:'',
    currentCity:'',
    currentSub:''
}

const reducersMap={
    [Action.GET_PROVINCES]:(state,action)=>{
        return {provinces:action.area,showPro:false,showCitys:true,showSub:true}
    },
    [Action.GET_CITYS]:(state,action)=>{
        return {citys:action.citys,showPro:true,showCitys:false,showSub:true,currentPro:action.currentPro}
    },
    [Action.GET_SUBDISTRICTS]:(state,action)=>{
        return {subdistricts:action.subdistricts,showPro:true,showCitys:true,showSub:false,currentCity:action.currentCity}
    },
    [Action.CHANGE_TAB]:(state,action)=>{
        switch(action.tab){
            case 'provinces':return {showPro:false,showCitys:true,showSub:true};
            case 'citys':return {showPro:true,showCitys:false,showSub:true};
            case 'subdistricts':return {showPro:true,showCitys:true,showSub:false};
        }
    }
}

export function citys(state=initialState,action) {
    const reduceFn=reducersMap[action.type];
    if(!reduceFn){
        return state;
    }
    return Object.assign({},state,reduceFn(state,action));
}