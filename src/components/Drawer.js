import React from 'react';
import classNames from 'classnames';


import { IconSvgSelector } from '../assets/icons/IconsSvgSelector';
import { Card, Button } from '.';

function Drawer({active, ...props}) {
	return (
		<div className={classNames("drawer", {'active' : active})}>
			<div className="overlay"></div>
			<div className="drawer__body">
				<div className="drawer__title">
					<h3>Корзина</h3>
					<IconSvgSelector id='btn-remove' />
				</div>
				<div className="drawer__card-container">
					<div className="drawer__card-list">
						<Card cart horizontal img={''} title={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'12 999'} />
						<Card cart horizontal img={''} title={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'12 999'} />
						<Card cart horizontal img={''} title={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'12 999'} />
						<Card cart horizontal img={''} title={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'12 999'} />
					</div>
					<div className="drawer__card-total">
						<div className="drawer__total-info">
							<span>Итого:</span>
							<div className="drawer__total-line"></div>
							<b>21 498 руб руб</b>
						</div>
						<div className="drawer__total-info">
							<span>Налог 5%:</span>
							<div className="drawer__total-line"></div>
							<b>1074 руб</b>
						</div>
						<Button large>
							Оформить заказ
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Drawer;
