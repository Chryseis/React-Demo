/**
 * Created by AllenFeng on 2016/7/12.
 */
import {Router,Route,browserHistory,Redirect} from 'react-router';
import Hello from '../components/Hello';
import {ReactClass} from '../components/Demo';

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