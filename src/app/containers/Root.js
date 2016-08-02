/**
 * Created by AllenFeng on 2016/7/12.
 */
import {Router,Route,browserHistory,Redirect} from 'react-router';
import Hello from '../component/Hello';
import {ReactClass} from '../component/Demo';

export default class Root extends React.Component{
    
    render(){
        return <Router history={browserHistory}>
            <Route path="hello" component={Hello}>
                <Route path="demo" component={ReactClass}></Route>
            </Route>
            <Redirect from="/" to="/hello"/>
        </Router>
    }
}