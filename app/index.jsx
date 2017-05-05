import './index.less';
import React, { Component } from 'react';
import { render } from 'react-dom';

import { Input } from 'antd';

class App extends Component {
    render() {
        return (
            <div>
                Hello, FCC.
                <br />
                <Input 
                    style={{ width: 200 }}
                    placeholder="fcc" 
                />
            </div>
        );
    }
};

render(
    <App />,
    document.getElementById('app')
);