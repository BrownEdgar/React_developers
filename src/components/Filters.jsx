import React from 'react';
import classNames from 'classnames'

export default function Filters({ currentButtonIndex, users, resetFilter, setActivButtonIndex }) {
	return (
		<div className="filters">
			<button
				onClick={resetFilter}
				className={classNames({
					active: currentButtonIndex < 0
				})}>all</button>
			{
				Array.from(new Set(users.map(user => user.favoritColor)))
					.map((color, index) => {
						return (
							<button
								key={index}
								className={classNames({
									active: currentButtonIndex.includes(index)
								})}
								onClick={() => setActivButtonIndex(index, color)}
							>{color}</button>
						)
					})
			}

		</div>
	)
}
