/**
 * Created by AllenFeng on 2016/9/18.
 */
import {card} from './Card';
import {citys} from './Citys';
import {combineReducers} from 'redux';

const  reducer=combineReducers({
    card,
    citys
});

export default reducer;

