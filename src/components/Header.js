import React from 'react';

function Header() {
	return (
		<header className='header'>
			<div className="header__row">
				<div className="logo">
					<img src="" alt="logo" className="logo__img" />
					<div className="logo__info-box">
						<div className="h3">REACT SNEAKERS</div>
						<span className='color-gray'>Магазин лучших кроссовок</span>
					</div>
				</div>
				<nav className="header__actions actions">
					<ul className="actions__list">
						<li className="actions__item">
							<div className="actions__btn">
								<div className="actions__icon"></div>
								<div className="actions__info">1205 руб.</div>
							</div>
						</li>
						<li className="actions__item">
							<div className="actions__btn">
								<div className="actions__icon"></div>
								<div className="actions__info"></div>
							</div>
						</li>
						<li className="actions__item">
							<div className="actions__btn">
								<div className="actions__icon"></div>
								<div className="actions__info"></div>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</header>
  );
}

export default Header;
