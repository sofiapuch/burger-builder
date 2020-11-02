import React, { Component } from 'react';

import Layout from './components/Layout/index';
import BurgerBuilder from './containers/BurgerBuilder/index';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <BurgerBuilder/>
                </Layout>
            </div>
        );
    }
}

export default App;
