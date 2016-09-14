/**
 * Created by chrys_000 on 2016/9/14.
 */
import * as Action from '../constants/ActionType'

export function MOVE_CARD() {
    return{
        type:Action.MOVE_CARD,
    }
}

export function MOVE_CHILD_CARD() {
    return{
        type:Action.MOVE_CHILD_CARD
    }
}

export function GET_CARD() {
    return{
        type:Action.GET_CARD
    }
}