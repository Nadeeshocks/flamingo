import React from 'react';
import Toolbar from '../toolbar/toolbar.js'
import sideDrawer from '../sideDrawer/side_drawer.js';

const Header = () =>(
	<header>
		<Toolbar />
		<sideDrawer />
	</header>
);

export default Header;