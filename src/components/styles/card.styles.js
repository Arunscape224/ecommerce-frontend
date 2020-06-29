import styled from 'styled-components'

export const SingleCard = styled.div`
    border: 3px #f3f3f3 solid;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s linear;
    cursor: pointer;
    background-color: #f3f3f3;
    padding: 10px;
    text-align: left;
    margin: 0 auto;
    &:hover {
      background-color: #f3f3f3;
      border-color: #f3f3f3;
    }
    img {
      max-width: calc(100%);
      margin: 0 auto;
      display: block;
    }
    .price {
      margin: 0;
      padding: 10px 0;
      font-weight: bold;
    }
    .details {
      position: relative;
    }
    .features {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        padding-left: 24px;
        margin-right: 10px;
        display: inline-block;
        span {
          display: none;
        }
        &.icon-bed {
          background: url(./assets/bed-left-side.svg) left center;
          background-size: auto 100%;
          background-repeat: no-repeat;
        }
        &.icon-bath {
          // background: url(./assets/bathtub.svg);
          background: url(./assets/bathtub.svg);
          background-size: auto 100%;
          background-repeat: no-repeat;
        }
        &.icon-car {
          background: url(./assets/car-compact.svg);
          background-size: auto 100%;
          background-repeat: no-repeat;
        }
      }
    }
`