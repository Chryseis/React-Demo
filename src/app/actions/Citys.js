/**
 * Created by AllenFeng on 2016/12/9.
 */
import * as Action from '../constants/ActionType'

export function getProvinces() {
    return (dispatch)=> {
        return fetch('/app/database/Citys.json')
            .then(res=>(res.json()))
            .then(json=>(dispatch({
                type: Action.GET_PROVINCES,
                area: json
            })))
    }
}

export function getCitys(currentPro,citys) {
    return {
        type:Action.GET_CITYS,
        citys:citys,
        currentPro:currentPro
    }
}

export function getSubdistricts(currentCity,subdistricts) {
    return {
        type:Action.GET_SUBDISTRICTS,
        subdistricts:subdistricts,
        currentCity:currentCity
    }
}

export function getSubdistrictsName(currentSubdistricts) {
    return {
        type:Action.GET_SUBDISTRICT_NAME,
        currentSubdistricts:currentSubdistricts
    }
}

export function changeTab(tab) {
    return {
        type:Action.CHANGE_TAB,
        tab:tab
    }
}