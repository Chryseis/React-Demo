/**
 * Created by AllenFeng on 2016/8/4.
 */
import Container from './Container';
import {connect} from 'react-redux';
import * as Action from '../../actions/Card'

@connect((state)=>({
    cards:state.card.cards
}),(dispatch)=>({
    moveCard:(dragIndex,hoverIndex)=>(dispatch(Action.moveCard(dragIndex,hoverIndex))),
    moveChildCard:(dragIndex,hoverIndex,index)=>(dispatch(Action.moveChildCard(dragIndex,hoverIndex,index))),
    getCards:()=>(dispatch(Action.getCards()))
}))
export default class SortableCancelOnDropOutside extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <b><a href='https://github.com/gaearon/react-dnd/tree/master/examples/04%20Sortable/Cancel%20on%20Drop%20Outside'>Browse the Source</a></b>
                </p>
                <p>
                    Because you write the logic instead of using the readymade components, you can tweak the behavior to the one your app needs.
                    In this example, instead of moving the card inside the drop target's <code>drop()</code> handler, we do it inside the drag source's <code>endDrag()</code> handler. This let us check <code>monitor.didDrop()</code> and revert the drag operation if the card was dropped outside its container.
                </p>
                <Container {...this.props} />
            </div>
        );
    }
}