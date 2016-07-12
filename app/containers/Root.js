/**
 * Created by AllenFeng on 2016/7/12.
 */
import {Router,Route,browserHistory} from 'react-router';
import Hello from '../component/Hello';

export default class Root extends React.Component{
    
    render(){
        return <Router history={browserHistory}>
            <Route path="/hello" component={Hello}></Route>
        </Router>
    }
}