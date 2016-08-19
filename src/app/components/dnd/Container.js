/**
 * Created by AllenFeng on 2016/8/4.
 */
import React, {Component, PropTypes} from 'react';
import update from 'react/lib/update';
import Card from './Card';
import {DropTarget, DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ItemTypes from './ItemTypes';

const style = {
    width: 400
};


@DragDropContext(HTML5Backend)
export default class Container extends Component {

    constructor(props) {
        super(props);
        this.moveCard = this.moveCard.bind(this);
        this.state = {
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
        };
    }

    moveCard(dragIndex, hoverIndex) {
        const {cards} = this.state;
        const dragCard = cards[dragIndex];

        this.setState(update(this.state, {
            cards: {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard]
                ]
            }
        }));
    }

    moveChildCard(dragIndex, hoverIndex, index) {
        const {children} = this.state.cards[index];
        const dragCard = children[dragIndex];

        this.setState(update(this.state, {
            cards: {
                [index]: {
                    children: {
                        $splice: [
                            [dragIndex, 1],
                            [hoverIndex, 0, dragCard]
                        ]
                    }
                }
            }
        }));
    }

    render() {
        const {cards} = this.state;

        return <div style={style}>
            {cards.map((card, i) => {
                return (
                    <Card key={card.id}
                          index={i}
                          id={card.id}
                          text={card.text}
                          children={card.children}
                          moveCard={this.moveCard}
                          moveChildCard={::this.moveChildCard}/>
                );
            })}
        </div>

    }
}