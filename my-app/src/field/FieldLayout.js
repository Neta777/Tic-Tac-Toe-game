import React from "react";
import PropTypes from "prop-types";
export const FieldLayout = ({ field, handleCellClick }) => {
	return (
		<>
			<h1>The Game</h1>
			<div className="field">
				{field.map((cell, index) => (
					<button key={index} onClick={() => handleCellClick(index)}>
						{cell}
					</button>
				))}
			</div>
		</>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array.isRequired,
	handleCellClick: PropTypes.func.isRequired,
};
