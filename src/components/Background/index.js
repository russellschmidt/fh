import { h } from 'preact';
import style from './style';

import Logo from '../logo';

const Background = () => (
	<div class={style.bg}>
		<div class={style.logo} >
			<Logo />
		</div>
		<div>
			<h1 class={style.h1}>Join FarmHaus</h1>
		</div>
		<div>
			<h2 class={style.h2}>Enter your email to be in the know.</h2>
		</div>
		<div class={style.emailInput_container}>
			<input type="email" placeholder="Enter your email" id="email-input" class={style.emailInput} name="email-input" />
		</div>
		<div class={style.btn_container}>
			<button class={style.btn}>Enter</button>
		</div>
		<div class={style.socialIcon_container}>
			<a href="https://www.fb.me/FarmHausApp" target="_blank" rel="noopener noreferrer" >
				<img class={style.socialIcon} src="https://s3.amazonaws.com/farmhausapp/img/farmhaus-facebook%402x.png" alt="facebook icon" />
			</a>
			<a href="https://www.instagram.com/farmhausapp" target="_blank" rel="noopener noreferrer" >
				<img class={style.socialIcon} src="https://s3.amazonaws.com/farmhausapp/img/farmhaus-instagram%402x.png" alt="instagram icon" />
			</a>
			<a href="https://www.twitter.com/farmhausapp" target="_blank" rel="noopener noreferrer" >
				<img class={style.socialIcon} src="https://s3.amazonaws.com/farmhausapp/img/farmhaus-twitter%402x.png" alt="twitter icon" />
			</a>
		</div>
	</div>
);

export default Background;
