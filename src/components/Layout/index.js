import React from 'react';
import Aux from '../../hoc/Aux';

import './Layout.scss';

const layout = ( props ) => {

    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main class="Layout">
                {props.children}
            </main>
        </Aux>
    )
};

export default layout;