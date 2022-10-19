import React from 'react'
import { HtmlDecorationContainer, HtmlTagDecoration } from './HtmlTagContainerStyles'

function HtmlTagContainer({ children, tag, size, direction }) {
    tag ??='' 
    return (
        <HtmlDecorationContainer direction={direction}>
            <HtmlTagDecoration size={size}>
                {'<'+tag+'>'}
            </HtmlTagDecoration>
            <div>
                {children}
            </div>
            <HtmlTagDecoration size={size}>
                {'</'+tag+'>'}
            </HtmlTagDecoration>
        </HtmlDecorationContainer>

    )
}

export default HtmlTagContainer