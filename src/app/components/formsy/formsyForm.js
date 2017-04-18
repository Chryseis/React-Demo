/**
 * Created by AllenFeng on 2017/4/18.
 */
import Formsy from 'formsy-react';
import MyInput from './myInput'

class FormsyForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            canSubmit:false
        }
    }

    _submit(data){
        alert(JSON.stringify(data, null, 4));
    }

    _enableButton() {
        this.setState({ canSubmit: true });
    }

    _disableButton() {
        this.setState({ canSubmit: false });
    }

    render() {
        return (
            <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
                <MyInput name="email" title="Email" validations="isEmail" validationError="This is not a valid email" required />
                <MyInput name="password" title="Password" type="password" required />
                <div className="buttons">
                    <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
                </div>
            </Formsy.Form>
        );
    }
}

export default FormsyForm;