import React, { useState } from 'react';
import { BoxingPortfolio, PortfolioS } from './style';
import ExplorerImg from './image/explorer.png';
import Personal from './image/personal.png';
import Calculadora from './image/calculadora.png';
import Nutricao from './image/nutrição.png';
import Psicologa from './image/psicologa.png';
import Marketing from './image/marketing.png';
export const PortfolioC = () => {
	const [focusedIndex, setFocusedIndex] = useState<number | null>(null); // Allow null as a possible value

	const handleMouseEnter = (index: number) => {
		// Specify the type of index
		setFocusedIndex(index);
	};

	const handleMouseLeave = () => {
		setFocusedIndex(null); // Assign null directly
	};
	const ListPortfolios = [
		{
			image: Personal,
			text: 'Personal trainer',
		},
		{
			image: Psicologa,
			text: 'Psicologa',
		},
		{
			image: ExplorerImg,
			text: 'Explore',
		},
		{
			image: Calculadora,
			text: 'Calculadora',
		},
		{
			image: Nutricao,
			text: 'Nutrição',
		},
		{
			image: Marketing,
			text: 'Marketing',
		},
	];
	return (
		<PortfolioS>
			<div className='container-portfolio'>
				{ListPortfolios.map((portfolio, index) => (
					<BoxingPortfolio
						key={index}
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={() => handleMouseLeave()}>
						<img
							style={{
								filter:
									focusedIndex === index ? 'grayscale(1) blur(1px)' : 'none',
							}}
							src={portfolio.image}
							alt='portfolio'
							className='img-portfolio'
						/>
						<div
							className='box-reveal-ptf'
							style={{ display: focusedIndex === index ? 'block' : 'none' }}>
							<h3 className='title-portfolio'>{portfolio.text}</h3>
							<button className='btn-portfolio'>Acessar</button>
						</div>
					</BoxingPortfolio>
				))}
			</div>
		</PortfolioS>
	);
};