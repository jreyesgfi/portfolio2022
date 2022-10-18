import styled from 'styled-components';
import { globalColors} from '../../globalStyles';

export const DividerWavesDiv = styled.div`
    position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
    width: 100%;
    overflow-x: hidden;
    overflow-y: ${({ outside}) => (outside ?  'visible': 'hidden')};
    line-height: 0;
    bottom:${({inverted }) => (inverted?  '0': 'auto')};
    top:${({inverted }) => (inverted?  'auto': '0')};
    bottom:${({ outside, inverted }) => (outside && inverted?  '100%': '')};
    top:${({ outside, inverted }) => (outside && !inverted?  '100%': '')};
    transform: ${({inverted})=> (inverted ? 'rotate(180deg)':'')};
    margin:0;
    margin-top:${({inverted})=> (inverted ? '0':'-1pt')};
    margin-bottom:${({inverted})=> (inverted ? '-5pt':'0')};
    z-index:${({zindex})=> (zindex ? zindex:'100')};
    >svg{
        overflow:visible;
        position: relative;
        display: block;
        width: calc(158% + 1.3px);
        height: ${({height})=>(height?height:'150px')};
        > path{
            fill: ${({color})=>(color? color:globalColors.dark.primary)};
        }
    }
`