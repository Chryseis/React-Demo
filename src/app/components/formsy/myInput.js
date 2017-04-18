/**
 * Created by AllenFeng on 2017/4/18.
 */
import {Decorator as FormsyElement} from 'formsy-react';
// const MyInput = React.createClass({
//     mixins: [Formsy.Mixin],
//     changeValue(event) {
//         this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
//     },
//     render() {
//         const className = 'form-group' + (this.props.className || ' ') + (this.showRequired() ? 'required' : this.showError() ? 'error' : null);
//         const errorMessage = this.getErrorMessage();
//         return (
//             <div className={className}>
//                 <label htmlFor={this.props.name}>{this.props.title}</label>
//                 <input
//                     type={this.props.type || 'text'}
//                     name={this.props.name}
//                     onChange={this.changeValue}
//                     value={this.getValue()}
//                     checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
//                 />
//                 <span className='validation-error'>{errorMessage}</span>
//             </div>
//         );
//     }
// });
@FormsyElement()
class MyInput extends React.Component {
    render() {
        const className = 'form-group' + (this.props.className || ' ') + (this.props.showRequired() ? 'required' : this.props.showError() ? 'error' : null);
        const errorMessage = this.props.getErrorMessage();
        return (
            <div className={className}>
                <label htmlFor={this.props.name}>{this.props.title}</label>
                <input
                    type={this.props.type || 'text'}
                    name={this.props.name}
                    onChange={(e)=>this.props.setValue(e.target.value)}
                    value={this.props.getValue()}
                    checked={this.props.type === 'checkbox' && this.props.getValue() ? 'checked' : null}
                />
                <span className='validation-error'>{errorMessage}</span>
            </div>
        );
    }
}


export default MyInput;