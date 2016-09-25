/**
 * Created by AllenFeng on 2016/8/4.
 */
import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import ItemTypes from './ItemTypes';
import { DragSource, DropTarget } from 'react-dnd';
import CardChild from './CardChild'

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move'
};

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index
        };
    },

    endDrag(props, monitor) {

    }
};

const cardTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        if (dragIndex === hoverIndex) {
            return;
        }

        const hoverBoundingRect = ReactDOM.findDOMNode(component).getBoundingClientRect();

        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        const clientOffset = monitor.getClientOffset();

        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        props.moveCard(dragIndex, hoverIndex);

        monitor.getItem().index = hoverIndex;
    }
};

@DropTarget(ItemTypes.CARD, cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
}))
@DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export default class Card extends Component {
    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired,
        id: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired,
        moveCard: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
    }

    render() {
        const { text, isDragging, connectDragSource, connectDropTarget,id,index,moveChildCard,cards } = this.props;
        const opacity = isDragging ? 0 : 1;
        return connectDragSource(connectDropTarget(
            <div style={{ ...style, opacity }}>
                {text}
                <div>
                    {cards.map((card,i)=>{
                        return <CardChild
                                pId={id}
                                key={card.id}
                                index={i}
                                pIndex={index}
                                id={card.id}
                                text={card.text}
                                moveCard={moveChildCard}/>
                    })}
                </div>
            </div>
        ));
    }
}