import {
    Form,
    Input,
    Tooltip,
    Icon,
    Select,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker,
  } from 'antd';
  
  const { Option } = Select;

  import AcceptBitcoinForm from '../AcceptBitcoinForm/AcceptBitcoinForm';

class RegistrationForm extends React.Component {

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    componentDidMount() {
        this.props.form.setFieldsValue({
            gender: 'male',
        });
      }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
            // TODO Send via REST POST request to Node API server
        }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    handleChange = value => {
        console.log(`selected ${value}`);
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '1',
        })(
            <Select style={{ width: 70 }}>
                <Option value="1">+1</Option>
            </Select>,
        );

        return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item
                label={
                    <span>
                    First Name&nbsp;
                    <Tooltip title="What is your first name?">
                        <Icon type="question-circle-o" />
                    </Tooltip>
                    </span>
                }
            >
                {getFieldDecorator('firstname', {
                    rules: [{ required: true, message: 'Please input your first name', whitespace: true }],
                })(<Input />)}
            </Form.Item>

            <Form.Item
                label={
                    <span>
                    Last Name&nbsp;
                    <Tooltip title="What is your last name?">
                        <Icon type="question-circle-o" />
                    </Tooltip>
                    </span>
                }
            >
                {getFieldDecorator('lastname', {
                    rules: [{ required: true, message: 'Please input your last name', whitespace: true }],
                })(<Input />)}
            </Form.Item>

            <Form.Item
                label={
                    <span>
                    Gender&nbsp;
                    <Tooltip title="What is your gender?">
                        <Icon type="question-circle-o" />
                    </Tooltip>
                    </span>
                }
            >
                {getFieldDecorator('gender', {
                    rules: [{ required: true, message: 'Please select your gender', whitespace: true }],
                })(
                    <Select style={{ width: 120 }} onChange={this.handleGenderChange}>
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                    </Select>
                )}
            </Form.Item>

        
            <Form.Item
                label={
                    <span>
                    Date of Birth&nbsp;
                    <Tooltip title="What is your date of birth?">
                        <Icon type="question-circle-o" />
                    </Tooltip>
                    </span>
                }
            >
                {getFieldDecorator('birthday', {
                    rules: [{ required: true, type: 'object', message: 'Please select your date of birth', whitespace: true }],
                })(
                    <DatePicker format="MM-DD-YYYY" onChange={this.onChange} />
                )}
            </Form.Item>

            <Form.Item label="Phone Number">
            {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
            </Form.Item>

            

            <Form.Item label="E-mail">
            {getFieldDecorator('email', {
                rules: [
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ],
            })(<Input />)}
            </Form.Item>

            

            <Form.Item label="Address">
            {getFieldDecorator('address-line-1', {
                rules: [
                {required: true, message: 'Please enter your Address' },
                ],
            })(<Input />)}
            </Form.Item>

            <Form.Item label="City">
            {getFieldDecorator('city', {
                rules: [
                {required: true, message: 'Please enter your City' },
                ],
            })(<Input />)}
            </Form.Item>

            <Form.Item label="Zip Code">
            {getFieldDecorator('zipcode', {
                rules: [
                {required: true, message: 'Please enter your Zipcode' },
                ],
            })(<Input />)}
            </Form.Item>

            <Form.Item label="Deposit bitcoin">
            {getFieldDecorator('bitcoin', {
                rules: [
                {required: false, message: 'Please deposit Bitcoin to the address listed' },
                ],
            })(<AcceptBitcoinForm />)}
            </Form.Item>
            

            
            <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
                valuePropName: 'checked',
            })(
                <Checkbox>
                I have read the <a href="">agreement</a>
                </Checkbox>,
            )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                Register
            </Button>
            </Form.Item>
        </Form>
        );
    }
}

export default RegistrationForm;