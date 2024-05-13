import React from "react";
import { FieldLayout } from "./FieldLayout";
import styles from "./field.css";
import PropTypes from "prop-types";

export const FieldContainer = ({
	currentPlayer,
	field,
	setField,
	setIsGameEnded,
	setIsDraw,
	setCurrentPlayer,
}) => {
	const handleCellClick = (index) => {
		if (!field[index] && !setIsGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);

			checkWinCondition(newField);
		}
	};

	const checkWinCondition = (newField) => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (
				newField[a] &&
				newField[a] === newField[b] &&
				newField[a] === newField[c]
			) {
				setIsGameEnded(true);
				return setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
			}
		}

		if (newField.every((cell) => cell !== "")) {
			setIsGameEnded(true);
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
		}
	};

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};

FieldContainer.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	field: PropTypes.array.isRequired,
	setField: PropTypes.func.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	setIsDraw: PropTypes.func.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
};
