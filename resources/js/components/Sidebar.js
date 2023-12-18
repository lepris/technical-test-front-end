import React from 'react';
import * as propTypes from 'prop-types';

function Sidebar({ children, isSidebarOpen, setSidebarOpen }) {
  function onButtonClick() {
    console.log('button clicked');
    setSidebarOpen(!isSidebarOpen);
  }

  return (<div className={'flex h-screen flex-col '}>

        <h2 className={'text-2xl'}>Sidebar Content</h2>

        {children}
        <button className={'border border-blue-500 hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded'}
            onClick={onButtonClick}
        >
            Toggle Sidebar
        </button>
    </div>);
}

export default Sidebar;

Sidebar.propTypes = {
  children: propTypes.node,
  isSidebarOpen: propTypes.bool,
  setSidebarOpen: propTypes.func,
};
