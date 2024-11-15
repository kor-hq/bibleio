// !!!!!!!!! this file isn't being used yet, we plan to use this for customizable themes and colors once we got time

import type { Color, Theme } from "./ThemeProvider";

// HEX values for each and every Theme & Color combo
export const colorMap: Record<Color, ColorScheme> = {
	gray: {
		light: {
			bg1: "#CCCCCC",
			fg1: "#D4D4D4",
			fg2: "#DDDDDD",
			accent: "#00507C",
			accentReversed: "#00A3FF",
		},
		dark: {
			bg1: "#1B1B1B",
			fg1: "#212121",
			fg2: "#262626",
			accent: "#00A3FF",
			accentReversed: "#00507C",
		},
	},
	red: {
		light: {
			bg1: "#E6CBCB",
			fg1: "#EBD6D6",
			fg2: "#EDDEDE",
			accent: "#802525",
			accentReversed: "#F45252",
		},
		dark: {
			bg1: "#1F1414",
			fg1: "#281A1A",
			fg2: "#2E1E1E",
			accent: "#F45252",
			accentReversed: "#802525",
		},
	},
	orange: {
		light: {
			bg1: "#E6D5CB",
			fg1: "#EBDDD6",
			fg2: "#EDE3DE",
			accent: "#804425",
			accentReversed: "#F48B52",
		},
		dark: {
			bg1: "#1F1814",
			fg1: "#281F1A",
			fg2: "#2E241E",
			accent: "#F48B52",
			accentReversed: "#804425",
		},
	},
	yellow: {
		light: {
			bg1: "#E6DFCB",
			fg1: "#EBE5D6",
			fg2: "#EDE9DE",
			accent: "#8D7820",
			accentReversed: "#FCD05F",
		},
		dark: {
			bg1: "#1F1D14",
			fg1: "#29251A",
			fg2: "#2F2B1E",
			accent: "#FCD05F",
			accentReversed: "#8D7820",
		},
	},
	lime: {
		light: {
			bg1: "#DCE6CB",
			fg1: "#E3EBD6",
			fg2: "#E8EEDD",
			accent: "#5F8226",
			accentReversed: "#A4D94E",
		},
		dark: {
			bg1: "#1B1F14",
			fg1: "#23281A",
			fg2: "#282E1E",
			accent: "#A4D94E",
			accentReversed: "#5F8226",
		},
	},
	green: {
		light: {
			bg1: "#CBE6D4",
			fg1: "#D6EBDD",
			fg2: "#DDEEE3",
			accent: "#268245",
			accentReversed: "#4ED97D",
		},
		dark: {
			bg1: "#141F18",
			fg1: "#1A291F",
			fg2: "#1E2F24",
			accent: "#4ED97D",
			accentReversed: "#268245",
		},
	},
	teal: {
		light: {
			bg1: "#CDE2E5",
			fg1: "#D7E8EA",
			fg2: "#DEECED",
			accent: "#00707C",
			accentReversed: "#00BDD2",
		},
		dark: {
			bg1: "#141B1F",
			fg1: "#1A2328",
			fg2: "#1E282E",
			accent: "#00BDD2",
			accentReversed: "#00707C",
		},
	},
	blue: {
		light: {
			bg1: "#CDDCE5",
			fg1: "#D7E3EA",
			fg2: "#DEE8ED",
			accent: "#00507C",
			accentReversed: "#00A3FF",
		},
		dark: {
			bg1: "#141B1F",
			fg1: "#1A2329",
			fg2: "#1E292F",
			accent: "#00A3FF",
			accentReversed: "#00507C",
		},
	},
	purple: {
		light: {
			bg1: "#D5CBE6",
			fg1: "#DDD6EB",
			fg2: "#E3DDEE",
			accent: "#4930A5",
			accentReversed: "#AC85F1",
		},
		dark: {
			bg1: "#16141F",
			fg1: "#1D1A28",
			fg2: "#221E2E",
			accent: "#AC85F1",
			accentReversed: "#4930A5",
		},
	},
	pink: {
		light: {
			bg1: "#E6CBE3",
			fg1: "#EBD6E9",
			fg2: "#EEDDED",
			accent: "#A53099",
			accentReversed: "#F185E6",
		},
		dark: {
			bg1: "#1F141E",
			fg1: "#281A27",
			fg2: "#2E1E2D",
			accent: "#F185E6",
			accentReversed: "#A53099",
		},
	},
};

export const themeMap: Record<Theme, ThemeScheme> = {
	light: {
		text: "050505E5",
		textSolid: "#000000",
		textSubtle: "#00000054",
		textReversed: "#E5E5E5E5",
		textReversedSolid: "#ffffff",
		textReversedSubtle: "#DEDEDE66",
		stroke: "#000000",
		red: "#F45252",
		orange: "#F45252",
		yellow: "#FCD05F",
		lime: "#F45252",
		green: "#4ED97D",
		teal: "#F45252",
		blue: "#00A3FF",
		purple: "#AC85F1",
		pink: "#F45252",
		gray: "#EEEEEE",
		redReversed: "#802525",
		orangeReversed: "#802525",
		yellowReversed: "#8D7820",
		limeReversed: "#802525",
		greenReversed: "#268245",
		tealReversed: "#802525",
		blueReversed: "#00507C",
		purpleReversed: "#4930A5",
		pinkReversed: "#802525",
		grayReversed: "#5F5F5F",
		shadowInnerColor: "#FFFFFF1A",
	},
	dark: {
		text: "#F8F8F8E5",
		textSolid: "#ffffff",
		textSubtle: "#DEDEDE4D",
		textReversed: "#000000E5",
		textReversedSolid: "#000000",
		textReversedSubtle: "#00000054",
		stroke: "#FFFFFF1A",
		red: "#802525",
		orange: "#802525",
		yellow: "#8D7820",
		lime: "#802525",
		green: "#268245",
		blue: "#00507C",
		teal: "#802525",
		purple: "#4930A5",
		pink: "#802525",
		gray: "#5F5F5F",
		redReversed: "#F45252",
		orangeReversed: "#802525",
		yellowReversed: "#FCD05F",
		limeReversed: "#802525",
		greenReversed: "#4ED97D",
		tealReversed: "#802525",
		blueReversed: "#00A3FF",
		purpleReversed: "#AC85F1",
		pinkReversed: "#802525",
		grayReversed: "#EEEEEE",
		shadowInnerColor: "#00000033",
	},
};

// types

type ThemeScheme = {
	text: string;
	textSolid: string;
	textSubtle: string;
	textReversed: string;
	textReversedSolid: string;
	textReversedSubtle: string;
	stroke: string;
	red: string;
	orange: string;
	yellow: string;
	lime: string;
	green: string;
	blue: string;
	teal: string;
	purple: string;
	pink: string;
	gray: string;
	redReversed: string;
	orangeReversed: string;
	yellowReversed: string;
	limeReversed: string;
	greenReversed: string;
	blueReversed: string;
	tealReversed: string;
	purpleReversed: string;
	pinkReversed: string;
	grayReversed: string;
	shadowInnerColor: string;
};

type ColorScheme = {
	light: {
		bg1: string;
		fg1: string;
		fg2: string;
		accent: string;
		accentReversed: string;
	};
	dark: {
		bg1: string;
		fg1: string;
		fg2: string;
		accent: string;
		accentReversed: string;
	};
};
