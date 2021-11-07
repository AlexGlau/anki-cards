import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationPanel = () => {
  return (
    <div className="nav-panel">
      <NavLink className="nav-tab">Home</NavLink>
      <NavLink className="nav-tab">Test</NavLink>
      <NavLink className="nav-tab">New words</NavLink>
    </div>
  );
};

export default NavigationPanel;
