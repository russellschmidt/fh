import { h } from 'preact';

import style from './style';

const Logo = () => (
	<div>
		<img src="https://s3.amazonaws.com/farmhausapp/img/farmhaus-logo-white%402x.png" alt="farmhaus logo" class={style.logo} />
	</div>
);

export default Logo;
