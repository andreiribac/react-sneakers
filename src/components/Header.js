import React from 'react';
import { Link } from "react-router-dom";

import { IconSvgSelector } from '../assets/icons/IconsSvgSelector';
import Logo from '../assets/img/logo.png';


function Header({openDrawer, ...props}) {
	return (
		<header className='header'>
			<div className="header__row">
				<Link to="/" className="logo">
					<img src={Logo} alt="logo" className="logo__img" />
					<div className="logo__info-box">
						<div className="h3">REACT SNEAKERS</div>
						<span className='color-gray'>Магазин лучших кроссовок</span>
					</div>
				</Link>
				<nav className="header__actions actions">
					<ul className="actions__list">
						<li className="actions__item">
							<div className="actions__btn" onClick={openDrawer}>
								<IconSvgSelector id='cart' className="actions__icon" />
								<span className="actions__info">1205 руб.</span>
							</div>
						</li>
						<li className="actions__item">
							<Link to="/favorites" className="actions__btn">
								<IconSvgSelector id='heart' className="actions__icon" />
								<span className="actions__info"></span>
							</Link>
						</li>
						<li className="actions__item">
							<div className="actions__btn">
								<IconSvgSelector id='user' className="actions__icon" />
								<span className="actions__info"></span>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</header>
  );
}

export default Header;
