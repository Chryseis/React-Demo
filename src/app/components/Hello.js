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
        // fetch('app/database/Cards.json')
        //     .then(res=>(res.json()))
        //     .then(json=>{
        //         this.setState({
        //             Hello:json.a1,
        //             World:json.b1
        //         })
        //     })
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