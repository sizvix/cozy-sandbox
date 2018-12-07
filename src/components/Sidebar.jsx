import React from 'react'
import Icon from 'cozy-ui/react/Icon'
import { translate } from 'cozy-ui/react/I18n'
import Nav, { NavItem, genNavLink } from 'cozy-ui/react/Nav'
import UISidebar from 'cozy-ui/react/Sidebar'
import { NavLink as RNavLink } from 'react-router-dom'
import NavIcon from '../assets/icons/icon-bullet-point.svg'

const NavLink = genNavLink(RNavLink)

export const Sidebar = ({ t }) => (
  <UISidebar>
    <Nav>
      <NavItem>
        <NavLink to="/intents" className="c-nav-link">
          <Icon className="c-nav-icon" icon={NavIcon} />
          {t('Nav.intents')}
        </NavLink>
        <NavLink to="/harvests" className="c-nav-link">
          <Icon className="c-nav-icon" icon={NavIcon} />
          {t('Nav.harvests')}
        </NavLink>
      </NavItem>
    </Nav>
  </UISidebar>
)

export default translate()(Sidebar)
