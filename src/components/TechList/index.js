import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTech } from '../../store/modules/techs/Actions';

// import { Container } from './styles';

export default function TechList() {
	const [newTech, setNewTech] = useState('');

	const techs = useSelector(state => state.techs);

	const dispatch = useDispatch();
	function handleAddTech() {
		if (newTech) {
			dispatch(addTech(newTech));
		}
		setNewTech('');
	}

	return (
		<div>
			<form data-testid="tech-form" onSubmit={handleAddTech}>
				<ul data-testid="tech-list">
					{techs.map(tech => (
						<li key={tech}>{tech}</li>
					))}
				</ul>

				<label htmlFor="tech">Tech</label>
				<input
					id="tech"
					value={newTech}
					onChange={e => setNewTech(e.target.value)}
				/>
				<button type="submit">Adicionar</button>
			</form>
		</div>
	);
}
