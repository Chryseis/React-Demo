/**
 * Created by AllenFeng on 2016/12/9.
 */


export default class AreaContainer extends React.Component {
    render() {
        const {item,getCell,show,currentItem}=this.props;
        return <div className={classnames({container:true,hide:show})}>
            {item && item.length > 0 && item.map((child, i)=>(<a href="javascript:void(0)" className={classnames({active:child.name==currentItem})} key={i} onClick={getCell&&getCell.bind(null,child.cell,child.name)}>{child.name}</a>))}
        </div>
    }
}