import { GameLayout } from "./GameLayout";
import { Information } from "../information/Information";
import { FieldContainer } from "../field/FieldContainer";
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Game.css";

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(""));

	const restartGame = () => {
		setCurrentPlayer("X");
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(""));
	};

	return (
		<GameLayout>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>

			<FieldContainer
				currentPlayer={currentPlayer}
				field={field}
				setField={setField}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				setCurrentPlayer={setCurrentPlayer}
			/>

			<button className="restart" onClick={restartGame}>Restart Game</button>
		</GameLayout>
	);
};
Game.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	field: PropTypes.array.isRequired,
};
