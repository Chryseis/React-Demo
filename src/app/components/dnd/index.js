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
                <Container {...this.props} />
            </div>
        );
    }
}