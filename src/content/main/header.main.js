import React from 'react'
import { Avatar, Div, Cell, Group, Button, PanelHeader, Header, Panel, CardGrid, Card, Gradient } from '@vkontakte/vkui';
import './main.css'

const NavbarMenu = ({balance, count}) => (
    <div style={{  display:"flex", justifyContent:"space-between" }} >
        <Div>
        <span className="balance">{balance} Р</span>
        <small className="for-balance">баланс</small>
        </Div>
        <Div style={{textAlign:"right"}}>
        <span className="balance">{count}</span>
        <small className="for-balance">онлайн</small>
        </Div>
    </div>
)

export default NavbarMenu;