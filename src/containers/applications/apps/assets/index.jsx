import React from "react";

export const Mark = (props) => {
	return (
		<svg
			xmlns="https://www.w3.org/2000/svg"
			width={76}
			height={95}
			viewBox="0 0 760 950"
			{...props}
		>
			<path
				d="M120 881c0-155 96-575 144-630 7-9 25-48 40-88 31-82 50-104 71-82 14 15 81 162 120 264 51 136 105 412 105 542v63h-30c-30 0-30-1-30-55v-55H180v55c0 54 0 55-30 55h-30v-69zm343-98l107-6v-44c0-84-95-447-122-464-15-10-148-12-172-3-27 10-114 328-123 452l-6 72h105c58 0 153-3 211-7zm-89-588c-4-8-10-15-15-15s-9 7-9 15 7 15 15 15c9 0 12-6 9-15z"
				fill="#020202"
			/>
			<path
				fill={props.color || "#111"}
				d="M150 880v-70h420v140H150v-70zM305 213c10-42 47-123 55-123 9 0 60 112 60 134 0 13-11 16-61 16h-61l7-27z"
			/>
		</svg>
	);
};
