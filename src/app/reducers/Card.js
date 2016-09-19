/**
 * Created by AllenFeng on 2016/9/14.
 */
import * as Action from '../constants/ActionType';
import update from 'react/lib/update';

const initialState = {
    cards: [{
        id: 1,
        text: 'Write a cool JS library',
        children: [{id: 1, text: 'child1'}, {id: 2, text: 'child2'}, {id: 3, text: 'child3'}]
    }, {
        id: 2,
        text: 'Make it generic enough',
        children: [{id: 1, text: 'child1'}, {id: 2, text: 'child2'}, {id: 3, text: 'child3'}]
    }, {
        id: 3,
        text: 'Write README',
        children: [{id: 1, text: 'child1'}, {id: 2, text: 'child2'}, {id: 3, text: 'child3'}]
    }, {
        id: 4,
        text: 'Create some examples',
        children: [{id: 1, text: 'child1'}, {id: 2, text: 'child2'}, {id: 3, text: 'child3'}]
    }, {
        id: 5,
        text: 'Spam in Twitter and IRC to promote it',
        children: [{id: 1, text: 'child1'}, {id: 2, text: 'child2'}, {id: 3, text: 'child3'}]
    }, {
        id: 6,
        text: '???',
        children: [{id: 1, text: 'child1'}, {id: 2, text: 'child2'}, {id: 3, text: 'child3'}]
    }, {
        id: 7,
        text: 'PROFIT',
        children: [{id: 1, text: 'child1'}, {id: 2, text: 'child2'}, {id: 3, text: 'child3'}]
    }]
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
    }

}

export function card(state=initialState,action) {
    const reduceFn=reducersMap[action.type];
    if(!reduceFn){
        return state;
    }
    return Object.assign({},state,reduceFn(state,action));
}