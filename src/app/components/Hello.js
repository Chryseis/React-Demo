/**
 * Created by AllenFeng on 2016/7/4.
 */


export default class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            "Hello":"xixixi",
            "World":"hahaha"
        }
    }

    componentDidMount(){

    }

    render() {
        const {Hello,World}=this.state;
        return <div className="red">
            {Hello}
            <div className="big">
                {World}
            </div>
            {this.props.children}
        </div>
    }
}