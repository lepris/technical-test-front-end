import React from 'react';
import * as PropTypes from 'prop-types';

function FarmsNav({ children }) {
  return (<nav className="w-1/5 p-4 border-r">
        <h2 className="mb-4">Wind Farms</h2>
        <ul>
            {children}
        </ul>

    </nav>);
}

export default FarmsNav;

FarmsNav.propTypes = {
  children: PropTypes.node,
};
