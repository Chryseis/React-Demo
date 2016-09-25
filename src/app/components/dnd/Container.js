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
    }

    componentDidMount(){
        this.props.getCards();
    }

    render() {
        const {cards,moveCard,moveChildCard} = this.props;
        return <div style={style}>
            {cards.map((card, i) => {
                return (
                    <Card key={card.id}
                          index={i}
                          id={card.id}
                          text={card.text}
                          cards={card.children}
                          moveCard={moveCard}
                          moveChildCard={moveChildCard}/>
                );
            })}
        </div>

    }
}