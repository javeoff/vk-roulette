import React from 'react'
import PropTypes from 'prop-types';
import {ModalRoot, ModalCard, platform, IOS, Button, Div, Card} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import "./modal.css"
const osName = platform();

const Balance = (props) => (
  <div className="main-card">
  <Div>
    <p>Чтобы заказать доставку, нужно пополнить баланс не менее чем на 100 рублей.</p>

    <Button size="xl" mode="commerce" data-to="payment" data-type="modal" onClick={props.go}>Пополнить</Button>
  </Div>
</div>
)

export default Balance;