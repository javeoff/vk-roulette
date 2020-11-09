import React from 'react'
import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import { Avatar, Div, Cell, Group, PanelHeader, Header, Panel, CardGrid, Card, Gradient, CellButton } from '@vkontakte/vkui';
import './main.css'

const Case = ({name, price, img}) => (

    <div className="item-info">
        <Div className="item-about" style={{textAlign: 'center'}}>
            <span className="item-name" style={{minHeight: 34}}>{name}</span>
            <span ><b>{price} <span style={{color: "#d6b313"}}>руб</span></b></span>
        </Div>
        <CellButton size="l" style={{display:'flex',justifyContent:'center'}}>Открыть</CellButton>
    </div>
)

export default Case;