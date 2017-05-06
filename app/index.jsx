import './index.less';
import React, { Component } from 'react';
import { render } from 'react-dom';

import { Input, Form, Button } from 'antd';

const FormItem = Form.Item;
class App extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-container">
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }]
                        })(
                            <Input placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your password!' }]
                        })(
                            <Input type="password" placeholder="password" />
                        )}
                    </FormItem>
                    <Button htmlType="submit">提交</Button>
                </Form>
            </div>
        );
    }
};
const LoginForm = Form.create()(App);
render(
    <LoginForm />,
    document.getElementById('app')
);