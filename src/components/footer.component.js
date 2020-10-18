import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { darkMode, lightMode } from '../theme'
import { toggleTheme } from '../actions/theme.action'
import { faCartPlus,  faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faHouzz, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { setTheme } from '../helper_methods/index'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()

    return (
        <footer className="page-footer">


        {theme.status === 'light' ?
                  <div  className="d-flex align-items-center mt-4 ml-4" onClick={() => dispatch(toggleTheme(darkMode)).then(() => {
                 
                    setTheme(darkMode)
                  })}><FontAwesomeIcon  style={{ color: theme.text_color }} className="nav-icons" icon={faSun}/></div> :
                  <div  className="d-flex align-items-center mt-4 ml-4" onClick={() => dispatch(toggleTheme(lightMode)).then(() => {
                  
                    setTheme(lightMode)
                  })}><FontAwesomeIcon  style={{ color: theme.text_color }} className="nav-icons" icon={faMoon}/></div>
                } 
            


        <div className="skyline d-flex justify-content-end align-items-between">
        {theme.status === 'light' ?
                  <div  className="d-flex align-items-center mt-4 ml-4" onClick={() => dispatch(toggleTheme(darkMode)).then(() => {
                 
                    setTheme(darkMode)
                  })}><FontAwesomeIcon  style={{ color: theme.text_color }} className="nav-icons" icon={faSun}/></div> :
                  <div  className="d-flex align-items-center mt-4 ml-4" onClick={() => dispatch(toggleTheme(lightMode)).then(() => {
                  
                    setTheme(lightMode)
                  })}><FontAwesomeIcon  style={{ color: theme.text_color }} className="nav-icons" icon={faMoon}/></div>
                } 
              <svg className="position-absolute" version="1.0" xmlns="http://www.w3.org/2000/svg"
               width="100%" viewBox="0 0 2055.000000 470.000000"
               preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,470.000000) scale(0.100000,-0.100000)"
              fill={theme.text_color} style={{backgroundColor: theme.text_color}} stroke="none">
              <path d="M2630 4668 c0 -7 0 -145 0 -305 l1 -293 -31 0 -30 0 0 285 0 285 -45
              0 -45 0 0 -330 0 -330 -55 0 -55 0 0 -300 0 -300 -22 -1 c-13 -1 -32 -2 -43
              -3 -20 -1 -20 -9 -23 -428 l-2 -427 -53 -3 -52 -3 -3 -487 -2 -488 -180 0
              -180 0 0 280 0 280 -55 0 -55 0 0 349 0 348 -70 32 c-63 29 -70 35 -70 62 l0
              29 -113 0 c-111 0 -114 -1 -125 -24 -6 -14 -31 -37 -56 -51 l-46 -27 0 -339 0
              -339 -30 0 -30 0 0 -95 0 -95 -170 0 -170 0 -2 -192 -3 -192 -25 1 c-14 0
              -158 1 -321 2 -288 1 -297 2 -302 21 -5 18 -14 20 -76 20 l-71 0 0 -800 0
              -800 10260 0 10260 0 0 1151 0 1152 -87 -7 c-174 -13 -185 -16 -197 -48 -15
              -41 -40 -32 -44 16 -3 37 -4 38 -34 32 -17 -3 -97 -6 -179 -6 l-148 0 -11 -39
              c-9 -33 -16 -41 -43 -47 -17 -3 -37 -14 -43 -22 -10 -14 -13 -13 -23 6 -6 12
              -19 22 -29 22 -9 0 -26 7 -36 15 -26 20 -110 20 -126 0 -8 -10 -31 -15 -66
              -15 -49 0 -54 -2 -60 -26 -6 -22 -10 -24 -35 -19 l-29 7 0 -570 c0 -551 -1
              -570 -19 -565 -20 5 -31 -27 -31 -96 l0 -36 -28 50 c-25 47 -30 50 -69 53 -42
              3 -43 4 -43 40 0 20 -7 242 -15 492 -8 250 -15 465 -15 478 0 21 -4 22 -82 22
              -46 0 -89 4 -96 8 -9 6 -12 54 -13 183 0 96 -4 192 -7 214 -7 37 -10 41 -52
              51 l-45 11 -11 171 c-6 95 -14 175 -17 179 -17 16 -22 -19 -27 -170 l-5 -162
              -49 -8 c-27 -4 -50 -6 -52 -4 -3 2 -16 98 -29 212 -14 115 -28 211 -30 214
              -15 15 -21 -32 -25 -227 l-5 -217 -42 -9 -43 -9 0 -384 0 -385 -125 3 -125 4
              -5 -40 c-2 -22 -6 -51 -7 -65 -2 -14 -9 -25 -18 -25 -12 0 -16 21 -20 105 l-5
              105 -184 3 c-102 1 -188 -1 -192 -5 -7 -8 -12 -48 -25 -196 -5 -61 -10 -80
              -25 -88 -17 -8 -19 -22 -19 -112 0 -147 -1 -149 -64 -141 -40 5 -57 13 -81 39
              -16 18 -52 40 -78 50 -45 16 -49 16 -74 0 -14 -9 -38 -21 -53 -25 l-27 -8 -7
              136 c-3 74 -6 168 -6 208 0 40 -3 75 -7 77 -5 3 -30 1 -56 -3 -48 -7 -49 -7
              -65 26 -15 33 -17 34 -76 34 -103 0 -129 -8 -154 -46 -12 -18 -33 -36 -47 -39
              -14 -3 -37 -7 -51 -10 -17 -4 -30 -17 -40 -41 -10 -24 -25 -39 -45 -46 -21 -7
              -32 -19 -36 -39 -4 -23 -10 -28 -27 -24 -24 5 -147 25 -158 25 -5 0 -8 -16 -8
              -35 l0 -35 -154 0 -153 0 -6 65 c-8 80 -10 85 -48 85 -22 0 -32 7 -41 25 -11
              24 -15 25 -93 25 -45 0 -109 -3 -143 -6 l-61 -7 6 -29 c7 -34 -7 -48 -49 -48
              -24 0 -28 -4 -28 -29 0 -45 -23 -61 -88 -61 -31 0 -73 -3 -92 -6 -33 -5 -36
              -3 -52 36 -9 22 -20 40 -25 39 -41 -7 -74 3 -85 26 -6 14 -26 35 -44 46 -43
              26 -74 10 -74 -38 l0 -33 -92 0 c-51 0 -102 -3 -114 -6 -29 -8 -63 -83 -71
              -155 -5 -47 -9 -59 -22 -57 -15 3 -16 104 -21 1112 l-5 1109 -148 63 -149 64
              -105 0 c-105 0 -106 0 -175 -40 -56 -32 -80 -40 -119 -40 l-49 0 0 -1029 0
              -1029 -22 -6 c-13 -3 -33 -6 -45 -6 l-23 0 0 417 0 417 -42 111 c-52 140 -163
              300 -215 311 -60 12 -63 8 -163 -191 l-95 -190 -3 -287 -3 -288 -94 0 -94 0
              -3 83 -3 82 -97 3 -98 3 0 -41 0 -40 -165 0 -165 0 0 -25 0 -25 -109 0 -110 0
              -3 28 c-3 27 -4 27 -78 27 -74 0 -75 0 -78 -27 -3 -27 -6 -28 -58 -28 l-54 0
              0 -420 0 -420 -25 0 -25 0 0 252 0 252 -57 75 c-32 42 -87 113 -122 159 l-64
              82 -58 0 -57 0 -83 -141 -82 -142 -199 7 -198 6 0 -378 0 -378 -38 -37 -38
              -37 -32 33 -32 33 -2 264 -3 265 -87 3 -88 3 0 234 0 235 -308 0 -307 0 -60
              -79 c-68 -90 -62 -91 -110 21 l-29 68 -144 0 -143 0 -74 -41 -75 -41 0 -304 0
              -304 -135 0 -135 0 0 105 0 105 -105 0 -105 0 -2 237 -3 237 -37 0 c-34 0 -38
              3 -40 26 -1 14 -2 32 -4 40 -1 8 -2 38 -3 65 -1 41 -7 57 -34 88 -33 37 -35
              38 -118 42 -46 3 -116 7 -155 10 l-71 5 -17 -43 -16 -43 -163 19 c-89 10 -168
              20 -174 22 -7 2 -13 17 -13 32 0 15 -4 33 -8 39 -6 10 -401 37 -411 28 -2 -2
              -7 -21 -10 -41 l-6 -38 -160 -3 -160 -2 -40 37 c-22 21 -60 56 -85 77 -25 22
              -67 59 -93 84 l-48 44 -16 134 -16 135 -121 -6 c-67 -3 -161 -7 -211 -10 -49
              -3 -130 -5 -180 -6 -149 -1 -146 1 -194 -89 l-41 -77 0 -367 0 -366 -245 0
              -245 0 -2 357 -3 358 -200 27 c-110 15 -216 25 -235 23 -19 -2 -71 -7 -115
              -10 -146 -12 -367 -33 -370 -37 -2 -2 -7 -164 -11 -361 -7 -332 -8 -357 -25
              -357 -9 0 -24 -3 -32 -6 -11 -4 -20 8 -32 40 -10 25 -18 46 -19 47 0 0 -54 4
              -119 9 -65 5 -121 10 -123 13 -3 2 -8 40 -12 83 l-7 79 -95 0 c-92 0 -94 1
              -100 25 -6 25 -7 25 -123 28 -112 3 -117 4 -121 25 -3 12 -12 103 -21 202 -22
              250 -18 235 -70 235 -50 0 -40 -20 -91 183 -15 60 -30 105 -34 100 -5 -4 -21
              -57 -37 -118 l-29 -110 -49 0 -50 0 -30 57 c-16 32 -34 56 -40 55 -5 -2 -16
              -36 -24 -75 -13 -68 -16 -74 -67 -118 l-54 -46 0 -409 0 -409 -280 0 -280 0 0
              -70 0 -70 -170 0 -170 0 0 545 0 545 -70 0 -70 0 0 375 0 374 -76 58 -75 58
              -2 275 -2 275 -42 3 -43 3 0 355 0 354 -30 0 c-17 0 -30 -5 -30 -12z"/>
              </g>
              </svg>
            </div>

           <Container>
           <Row  className=" d-flex justify-content-end align-items-between" >
  
  <Col sm="4" className=" h-100 d-flex justify-content-center align-items-center flex-column"></Col>
  <Col sm="4" className=" h-100 d-flex justify-content-end align-items-end p-5"></Col>
  <Col sm="4" className=" d-flex justify-content-center align-items-end">
    <FontAwesomeIcon className="m-3" style={{fontSize: '1.8em', color: theme.button_color}} icon={faInstagram} />
    <FontAwesomeIcon className="m-3" style={{fontSize: '1.8em', color: theme.button_color}} icon={faHouzz} />
    <FontAwesomeIcon className="m-3" style={{fontSize: '1.8em', color: theme.button_color}} icon={faPinterest} />
    <FontAwesomeIcon className="m-3" style={{fontSize: '1.8em', color: theme.button_color}} icon={faFacebook} />
  </Col>

</Row>
           </Container>
            </footer>
    )
}

export default Footer