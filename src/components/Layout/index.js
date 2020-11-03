import React from 'react';
import Aux from '../../hoc/Aux';

import './layout.scss';

const layout = ( props ) => {

    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className="layout">
                {props.children}
            </main>
        </Aux>
    )
};

export default layout;