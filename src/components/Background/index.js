import { h, Component } from 'preact';
import style from './style';
import firebase from '../Firebase';

import Logo from '../logo';

export default class Background extends Component {
	handleChange(e) {
		this.setState({
			email: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const itemsRef = firebase.database().ref('betalist');
		const email = {
			email: this.state.email
		}
		itemsRef.push(email);
		this.setState({
			email: ''
		});
	}

	constructor() {
		super();
		this.state = {
			email: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return ( 
			<div class={style.bg}>
				<div class={style.logo} >
					<Logo />
				</div> 

				<div>
					<h1 class={style.h1}>Something cool is coming to your kitchen.</h1>
				</div>

				<div>
					<h2 class={style.h2}>Enter your email to be part of the first crop when we launch.</h2>
				</div>
		
				<form onSubmit={this.handleSubmit}>
					<div class={style.emailInput_container}>
						<input type="email" placeholder="Email address" id="email-input" class={style.emailInput} name="email-input" onChange={this.handleChange} value={this.state.email} />
					</div>
					<div class={style.btn_container}>
						<button class={style.btn}>Join</button>
					</div>		
				</form>
		
				<div class={style.socialIcon_container}>
					<a href="https://www.fb.me/FarmHausApp" target="_blank" rel="noopener noreferrer" >
						<img 
							class={style.socialIcon} 		 src="https://s3.amazonaws.com/farmhausapp/img/farmhaus-facebook%402x.png" alt="facebook icon" 
							onMouseOver={e => (e.currentTarget.src = "https://s3.amazonaws.com/farmhausapp/img/farmhaus-facebook-hover%402x.png")}
							onMouseOut={e => (e.currentTarget.src = "https://s3.amazonaws.com/farmhausapp/img/farmhaus-facebook%402x.png")} />
					</a>
					<a href="https://www.instagram.com/farmhausapp" target="_blank" rel="noopener noreferrer" >
						<img 
							class={style.socialIcon} 		 src="https://s3.amazonaws.com/farmhausapp/img/farmhaus-instagram%402x.png" alt="instagram icon" 
							onMouseOver={e => (e.currentTarget.src = "https://s3.amazonaws.com/farmhausapp/img/farmhaus-instagram-hover%402x.png")}
							onMouseOut={e => (e.currentTarget.src = "https://s3.amazonaws.com/farmhausapp/img/farmhaus-instagram%402x.png")} />
					</a>
					<a href="https://www.twitter.com/farmhausapp" target="_blank" rel="noopener noreferrer" >
						<img 
							class={style.socialIcon} src="https://s3.amazonaws.com/farmhausapp/img/farmhaus-twitter%402x.png" alt="twitter icon" 
							onMouseOver={e => (e.currentTarget.src = "https://s3.amazonaws.com/farmhausapp/img/farmhaus-twitter-hover%402x.png")}
							onMouseOut={e => (e.currentTarget.src = "https://s3.amazonaws.com/farmhausapp/img/farmhaus-twitter%402x.png")} />
					</a>
		
				</div>
		
		
			</div>
		);
	}
}