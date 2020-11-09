import React from 'react'
import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import { Avatar, Div, Cell, Group, CellButton, PanelHeader, Header, Panel, CardGrid, Card, Gradient } from '@vkontakte/vkui';
import Icon28MoneyHistoryBackwardOutline from '@vkontakte/icons/dist/28/money_history_backward_outline';
import './main.css'

const deleteItem = (e) => {
    e.target.closest('.card-item').remove()
}

const Item = ({name, img, price, itid}) => (
    <Div className="item-info">
        <div className="item-about">
            <span className="item-name">{name}</span>
        </div>
        <Div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        </Div>
        <CellButton size="l" style={{display:'flex',justifyContent:'center'}}>Открыть</CellButton>
    </Div>
)

export default Item;