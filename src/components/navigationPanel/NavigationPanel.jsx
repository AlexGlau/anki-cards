import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationPanel = () => {
  return (
    <div className="nav-panel">
      <NavLink to="/" className="nav-tab" exact>Home</NavLink>
      <NavLink to="/new" className="nav-tab">New words</NavLink>
      <NavLink to="/test" className="nav-tab">Test</NavLink>
    </div>
  );
};

export default NavigationPanel;
