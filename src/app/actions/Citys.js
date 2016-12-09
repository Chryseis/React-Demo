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

export function getCitys(province) {
    return {
        type:Action.GET_CITYS,
        province:province
    }
}

export function getSubdistricts(city) {
    return {
        type:Action.GET_SUBDISTRICTS,
        city:city
    }
}