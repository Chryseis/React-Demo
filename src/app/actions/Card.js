/**
 * Created by chrys_000 on 2016/9/14.
 */
import * as Action from '../constants/ActionType'

export function moveCard(dragIndex,hoverIndex) {
    return{
        type:Action.MOVE_CARD,
        dragIndex,
        hoverIndex
    }
}

export function moveChildCard(dragIndex,hoverIndex,index) {
    return{
        type:Action.MOVE_CHILD_CARD,
        dragIndex,
        hoverIndex,
        index
    }
}