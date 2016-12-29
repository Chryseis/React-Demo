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

export function getCitys(citys) {
    return {
        type:Action.GET_CITYS,
        citys:citys
    }
}

export function getSubdistricts(subdistricts) {
    return {
        type:Action.GET_SUBDISTRICTS,
        subdistricts:subdistricts
    }
}