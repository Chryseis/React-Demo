/**
 * Created by AllenFeng on 2016/7/4.
 */


export default class Hello extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="red">
            Hello
            <div className="big">
                World 1212222
            </div>
            {this.props.children}
        </div>
    }
}