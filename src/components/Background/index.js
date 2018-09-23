import { h } from 'preact';
import style from './style';

import Logo from '../logo';

const Background = () => (
	<div class={style.bg}>
		<div class={style.logo} >
			<Logo />
		</div>
	</div>
);

export default Background;
