import './style.less';
import {
    Form,
    Input,
    Button,
    message
} from 'antd';

import axios from 'axios';

class EmailListForm extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const hide = message.loading('Sending POST request..', 0);
                this.props.form.resetFields();
                axios.post('/api/add-email-subscriber', {
                    emailAddress: values.email
                }).then(function (response) {
                    setTimeout(hide, 0);
                    message.success('Subscribed!');
                    console.log(response);
                }).catch(function (error) {
                    setTimeout(hide, 0);
                    message.error('There was an error!');
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
            <div>
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
            </div>


        );

    }

}

export default EmailListForm;