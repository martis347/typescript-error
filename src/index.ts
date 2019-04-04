import baseStyled, { ThemedStyledInterface } from 'styled-components';

interface Theme {
	color: string;
}

const styled = baseStyled as ThemedStyledInterface<Theme>;
console.log(styled);