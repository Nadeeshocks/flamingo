import React from 'react';
import Toolbar from '../toolbar/toolbar.js';
import Affix from '../affix/affix';

const Header = props =>(
	<header>
		<Affix offset="450" disappear="650" className="h-100">
			<Toolbar 
				toolbarClick={props.drawerClickHandle} 
				cartClick={props.cartClickHandle} 
			/>
		</Affix>
	</header>
);

export default Header;