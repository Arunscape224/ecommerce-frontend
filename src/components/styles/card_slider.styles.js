import styled from 'styled-components'

export const CardsSlider = styled.div`
    position: relative;
    max-width: 226px;
    margin: 0 auto;
    &:after {
        border: 5px solid ${props => props.borderColor};
        content: '';
        display: block;
        width: 100%;
        height: 327px;
        position: absolute;
        top: 0;
        left: 0;
    }
`

export const GradientWrapper = styled.div`
    height: 264px;
    position: static;
    &:before,
    &:after {
        content: '';
        display: block;
        width: 50%;
        height: 123%;
        background: linear-gradient(to right, rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255, 0) 100%);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }
    &:after {
        left: auto;
        right: 0;
        background: linear-gradient(to left, rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255, 0) 100%);
    }
`

export const CardSliderWrapper = styled.div`
    display: flex;
    position: absolute;
    transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    .single-card {
      flex: 1;
      min-width: 226px;
      opacity: 0.5;
      transform: scale(0.7);
      transition: opacity 300ms linear, transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
      .details {
        opacity: 0;
        transition: opacity 150ms linear;
      }
    }
`