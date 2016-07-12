/**
 * Created by AllenFeng on 2016/7/4.
 */
import {ReactClass} from './Demo'

export default class Hello extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="red">
            Hello
            <div className="big">
                World
            </div>
            <ReactClass></ReactClass>
        </div>
    }
}