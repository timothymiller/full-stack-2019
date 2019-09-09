import './style.less';
import {
    Form,
    Input,
    Button,
} from 'antd';

import axios from 'axios';

class EmailListForm extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                axios.post('/api/add-email-subscriber', {
                    emailAddress: values.email
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.error(error);
                });
            }
        });
    };

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

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Subscribe
                    </Button>
                </Form.Item>

            </Form>

        );

    }

}

export default EmailListForm;