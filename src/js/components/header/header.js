import React from 'react';
import Toolbar from '../toolbar/toolbar.js';

const Header = props =>(
	<header>
		<Toolbar 
			toolbarClick={props.drawerClickHandle} 
			cartClick={props.cartClickHandle} 
		/>
	</header>
);

export default Header;