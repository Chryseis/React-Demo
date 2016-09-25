/**
 * Created by AllenFeng on 2016/9/14.
 */
import * as Action from '../constants/ActionType';
import update from 'react/lib/update';

const initialState = {
    cards: []
}

const reducersMap = {
    //move card
    [Action.MOVE_CARD]: (state, action)=> { 
        const dragCard=state.cards[action.dragIndex];

        return update(state,{cards:{
                $splice: [
                    [action.dragIndex, 1],
                    [action.hoverIndex, 0, dragCard]
                ]             
            }
        })
    },
    //move child card
    [Action.MOVE_CHILD_CARD]: (state, action)=> {
        const dragCard = state.cards[action.index].children[action.dragIndex];

        return update(state, {
            cards: {
                [action.index]: {
                    children: {
                        $splice: [
                            [action.dragIndex, 1],
                            [action.hoverIndex, 0, dragCard]
                        ]
                    }
                }
            }
        })
    },
    //get cards
    [Action.GET_CARD]:(state,action)=>{
        return {cards:action.cards}
    }

}

export function card(state=initialState,action) {
    const reduceFn=reducersMap[action.type];
    if(!reduceFn){
        return state;
    }
    return Object.assign({},state,reduceFn(state,action));
}