/**
 * Created by AllenFeng on 2016/12/9.
 */
import {connect} from 'react-redux';
import AreaContainer from './AreaContainer';
import * as Action from '../../actions/Citys';

@connect(state=>({
    provinces: state.citys.provinces,
    citys: state.citys.citys,
    subdistricts: state.citys.subdistricts,
    showProvince: state.citys.showPro,
    showCitys: state.citys.showCitys,
    showSubdistricts: state.citys.showSub,
    currentProvince: state.citys.currentPro,
    currentCity: state.citys.currentCity,
    currentSubdistrict: state.citys.currentSub,
    isHide:state.citys.isHide
}), dispatch=>({
    getProvinces: ()=>(dispatch(Action.getProvinces())),
    getCitys: (currentPro, citys)=>(dispatch(Action.getCitys(currentPro, citys))),
    getSubdistricts: (currentCity, subdustricts)=>(dispatch(Action.getSubdistricts(currentCity, subdustricts))),
    getSubName: (currentSub)=>(dispatch(Action.getSubdistrictsName(currentSub))),
    changeTab: (tab)=>(dispatch(Action.changeTab(tab))),
    showArea:()=>(dispatch(Action.showArea()))
}))
export default class AreaTools extends React.Component {

    constructor(props) {
        super(props);
        props.getProvinces();
    }

    render() {
        const {provinces, citys, subdistricts, getCitys, getSubdistricts, getSubName, showProvince, showCitys, showSubdistricts, changeTab, currentProvince, currentCity, currentSubdistrict,isHide,showArea}=this.props;
        return <div style={{width: '800px',height: '600px',border: 'solid'}}>
            <input type="text" style={{width:300}}
                   value={this._showArea.call(this,currentProvince,currentCity,currentSubdistrict)} onFocus={showArea}/>
            <div className={classnames({'area-content':true,'hide':isHide})}>
                <div className="area-container">
                    <div className="area">
                        <ul className="area-tools clearfix">
                            <li onClick={changeTab.bind(null,'provinces')}
                                className={classnames({'area-province':true,active:!showProvince})}>选择省份
                            </li>
                            <li onClick={changeTab.bind(null,'citys')}
                                className={classnames({'area-citys':true,active:!showCitys})}>选择城市
                            </li>
                            <li onClick={changeTab.bind(null,'subdistricts')}
                                className={classnames({'area-subdistrict':true,active:!showSubdistricts})}>选择区县
                            </li>
                        </ul>
                    </div>
                </div>
                <AreaContainer item={provinces} currentItem={currentProvince} getCell={getCitys} show={showProvince}/>
                <AreaContainer item={citys} currentItem={currentCity} getCell={getSubdistricts} show={showCitys}/>
                <AreaContainer item={subdistricts} currentItem={currentSubdistrict} show={showSubdistricts}
                               getCell={getSubName}/>
            </div>
        </div>
    }

    _showArea(province, citys, subdistricts) {
        if (subdistricts) {
            return `${province}\\${citys}\\${subdistricts}`
        }
        if (citys) {
            return `${province}\\${citys}`;
        }
        if (province) {
            return `${province}`;
        }
    }
}