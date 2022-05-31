import styled from 'styled-components'


export const Card = styled.div `
	font-family: Arial, Helvetica, sans-serif;
	font-size: 16px;
	padding: 10px;
	margin: 10px;
	width: 90%;
	background-color: ${props => props.bgcolor ? props.bgcolor : "aqua"};
	text-align: center;
`

export const CenteredRow = styled.div `
	display: flex;
	justify-content: center;
`

export const Button = styled.button `
	padding: 5px;
	background-color: pink;
	margin: 5px;
`

export const Input = styled.input `
	padding: 5px;
	width: 80%;
	height: 50px;
	margin: 5px;
`