import { h, Component } from 'preact';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import style from './style';
import firebase from '../Firebase';

import Logo from '../logo';

export default class Background extends Component {
	handleChange(e) {
		this.setState({
			email: e.target.value
		});
	}

	handleSocialFacebookIn(e) {
		e.currentTarget.src = 'https://s3.amazonaws.com/farmhausapp/img/farmhaus-facebook-hover%402x.png';
	}

	handleSocialFacebookOut(e) {
		e.currentTarget.src = 'https://s3.amazonaws.com/farmhausapp/img/farmhaus-facebook%402x.png';
	}

	handleSocialInstagramIn(e) {
		e.currentTarget.src = 'https://s3.amazonaws.com/farmhausapp/img/farmhaus-instagram-hover%402x.png';
	}

	handleSocialInstagramOut(e) {
		e.currentTarget.src = 'https://s3.amazonaws.com/farmhausapp/img/farmhaus-instagram%402x.png';
	}

	handleSocialTwitterIn(e) {
		e.currentTarget.src = 'https://s3.amazonaws.com/farmhausapp/img/farmhaus-twitter-hover%402x.png';
	}

	handleSocialTwitterOut(e) {
		e.currentTarget.src = 'https://s3.amazonaws.com/farmhausapp/img/farmhaus-twitter%402x.png';
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.email !== '') {
			const itemsRef = firebase.database().ref('betalist');
			const email = {
				email: this.state.email
			};
			itemsRef.push(email);
			this.notify();
			this.setState({
				email: ''
			});
		}
	}

	notify = (email) => toast.success(`Thanks for signing up, ${this.state.email}!`,{
		position: toast.POSITION.TOP_CENTER,
		className: 'success-toast'
	});

	constructor() {
		super();
		this.state = {
			email: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSocialFacebookIn = this.handleSocialFacebookIn.bind(this);
		this.handleSocialFacebookOut = this.handleSocialFacebookOut.bind(this);
		this.handleSocialInstagramIn = this.handleSocialInstagramIn.bind(this);
		this.handleSocialInstagramOut = this.handleSocialInstagramOut.bind(this);
		this.handleSocialTwitterkIn = this.handleSocialTwitterIn.bind(this);
		this.handleSocialTwitterOut = this.handleSocialTwitterOut.bind(this);
		this.notify = this.notify.bind(this);
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
						<input type="email"
							placeholder="Email address"
							id="email-input"
							class={style.emailInput}
							name="email-input"
							onChange={this.handleChange}
							value={this.state.email}
						/>
					</div>
					<div class={style.btn_container}>
						<button class={style.btn}>Join</button>
					</div>
				</form>
		
				<div class={style.socialIcon_container}>
					<a href="https://www.fb.me/FarmHausApp" target="_blank" rel="noopener noreferrer" >
						<img
							class={style.socialIcon} 		 src="https://s3.amazonaws.com/farmhausapp/img/farmhaus-facebook%402x.png" alt="facebook icon"
							onMouseOver={this.handleSocialFacebookIn}
							onMouseOut={this.handleSocialFacebookOut}
						/>
					</a>
					<a href="https://www.instagram.com/farmhausapp" target="_blank" rel="noopener noreferrer" >
						<img
							class={style.socialIcon} 		 src="https://s3.amazonaws.com/farmhausapp/img/farmhaus-instagram%402x.png" alt="instagram icon"
							onMouseOver={this.handleSocialInstagramIn}
							onMouseOut={this.handleSocialInstagramOut}
						/>
					</a>
					<a href="https://www.twitter.com/farmhausapp" target="_blank" rel="noopener noreferrer" >
						<img
							class={style.socialIcon} src="https://s3.amazonaws.com/farmhausapp/img/farmhaus-twitter%402x.png" alt="twitter icon"
							onMouseOver={this.handleSocialTwitterkIn}
							onMouseOut={this.handleSocialTwitterOut}
						/>
					</a>
				</div>
				<ToastContainer />
			</div>
		);
	}
}