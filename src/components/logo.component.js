import React from 'react'
import { Media } from 'reactstrap';
import { useSelector } from 'react-redux'

const Logo = () => {
  const theme = useSelector(state => state.theme)
  return (
    <Media className="d-flex align-items-center logo-header text-uppercase">

      <Media left href="/" className="m-1">
        <Media className="logo" style={{ width: '55px' }} object src="/sg-logo.png" alt="Generic placeholder image" />
      </Media>

      <Media body>
        <Media heading className="mb-0 header-1-text" style={{ fontSize: '33px', color: theme.logoTextColor1 }}>
          Surface Group
        </Media>
        <div className="header-2-text" style={{ letterSpacing: '8.6px', color: theme.logoTextColor2 }}>
        International
        </div>
      </Media>
    </Media>
  )
}

export default Logo