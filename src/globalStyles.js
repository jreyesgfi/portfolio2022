import styled, {createGlobalStyle} from 'styled-components'

export const globalColors = {
    dark:{
        primary:'#3E4463',
        second:'#808633'
    },
    light:{
        primary:'#F2F2E6',
        second:'#f2fbff'
    },
    grey:{
        primary:'#B3B1AA',
        light:'#d3d5d7',
        dark:'#5f6368',
    },
    color:{
        primary:'#D4DB00',
        second:'#808633',
        third:'#E6CE1D',
		light:'#FDEC00'
    },
    transparent:{
        dark:'#012f4167',
        light:'rgba(252, 255, 255, 0.961)',
		light2:'rgba(252, 255, 255, 0.561)',
        primaryColor:'#aed05e3d',
		full:'#ffffff00'
    },
    green:{
        primary:'#aed05e',
		light:'#EBF4D8'

    },
    red:{
        primary:'#ac2f2f',
		light:'#F7E1E1',
    },
	blue:{
		primary:'#83DAFD',
		light: '#DAF4FE'
	}
}

const GlobalStyles = createGlobalStyle`
    
    /*general style*/
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
		color:${globalColors.dark.primary};
        font-family: primary-normal, sans-serif;
		font-display: auto;
    }

`;
export const WaitingContainer = styled.div`
	visibility: ${({ loading }) => (loading==1?'hidden':'visible')}
`

export const Container = styled.div`
    width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;
export const MainHeading = styled.h1`
    font-size: clamp(2.3rem, 4vw, 4.5rem);
	margin-bottom: 1rem;
	color: ${({ inverse }) => (inverse ? 
        globalColors.dark.primary : 
        globalColors.light.primary)};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
	user-select: none;
`;
export const Heading = styled.h2`
	font-size: clamp(0.7rem, 3.5vw, 2.6rem);
	user-select: none;
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? 
        globalColors.dark.primary : 
        globalColors.light.primary)};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: left;
	display: inline-block;
	width: ${({ width }) => (width ? width : '')};
	max-width: 40%;
	@media screen and (max-width: 700px) {
		text-align: center;
		margin-left:auto;
		margin-right:auto;
		max-width:80%;
		display: block;
	}
`;
export const TextWrapper = styled.span`
	position: ${({ position }) => (position ? position : 'relative')};
    color: ${({ color }) => (color ? color : '')};
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	height:fit-content;
`;
export const Page = styled.div`
	scroll-snap-type: y mandatory;
	overflow-y:scroll;
	height:100vh;
`
export const Section = styled.section`
	scroll-snap-align: start;
	padding: ${({ padding }) => (padding ? padding : '0')};
	user-select: none;
	overflow-x: hidden;
	overflow-y: hidden;
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ inverse }) => (inverse ?
        globalColors.light.primary : 
        globalColors.dark.primary)};
	position: ${({ position }) => (position ? position : 'relative')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '360px')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	padding-bottom: ${({ bottomWave}) => (bottomWave ? 0 : '')};
	margin-bottom: ${({ bottomWave}) => (bottomWave ? 0 : '')};
	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '0')};
	}
`;
export const Row = styled.div`
    display: flex;
	flex-direction: row;
	user-select: none;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;
export const Column = styled.div`
    display: flex;
	flex-direction: column;
	user-select: none;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;
export const Button = styled.button`
    border-radius: 4px;
	background-color:${globalColors.blue.light};
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: ${globalColors.dark.primary};
	outline: none;
	border: 2px solid ${globalColors.light.primary};
	cursor: pointer;
	overflow: hidden;
	position: relative;
	user-select: none;
	&:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
		background-color: ${globalColors.dark.primary};
	}
	&:hover {
		background-color: ${globalColors.transparent.full};
		color: ${globalColors.light.primary};
		border:2px solid ${globalColors.light.primary};
		
	}
`;

export const Text = styled.p`
    color:${({inverse})=>inverse?globalColors.dark.primary:globalColors.light.primary};
    width:${({width})=>width?width:'50%'};
	font-size:${({fontSize})=>fontSize?fontSize:'12pt'};
	user-select: none;
    @media screen and (max-width: 700px) {
		width:${({smWidth})=>smWidth?smWidth:'70%'};
	}
`;
export const Image = styled.img`
	object-fit:cover;
	max-width:${({width})=>width?width:'50vw'};
	max-height:${({height})=>height?height:'60vh'};
	@media screen and (max-width: 700px) {
		max-width:${({width})=>width?width:'60vw'};
		margin:0 auto;
	}
`
export const CenterWrapper = styled.div`
	position:absolute;
	inset:0;
	width:95%;
	height:${({ height }) => (height ? height : 'fit-content')};
	margin:auto;
	display:flex;
	flex-wrap: wrap;
	gap:1.5rem;
	justify-content:space-around;
`;

export default GlobalStyles;