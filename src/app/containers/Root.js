/**
 * Created by AllenFeng on 2016/7/12.
 */
import {Router,Route,browserHistory,Redirect} from 'react-router';
import Hello from '../components/Hello';
import {Demo} from '../components/Demo';
import SortableCancelOnDropOutside from '../components/dnd/index';
import AreaTools from '../components/selectArea/AreaTools'
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore'

const store=configureStore();

export default class Root extends React.Component{
    render(){
        return <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="hello" component={Hello}>
                    <Route path="demo" component={Demo}></Route>
                </Route>
                <Route path="dnd" component={SortableCancelOnDropOutside}></Route>
                <Route path="selectArea" component={AreaTools}></Route>
                <Redirect from="/" to="/hello"/>
            </Router>
        </Provider>
    }
}