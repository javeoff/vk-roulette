import React from 'react'
import PropTypes from 'prop-types';
import { ModalRoot, ModalCard, platform, IOS, Button, Div, Input  } from '@vkontakte/vkui';
import { FormLayout, FormLayoutGroup } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import './modal.css'

const osName = platform();

const onChange = (e) => {
    const value = e.target.value
    if (value.length > 5) return false
    else return false
}

const validPromo = (e) => {
}

const Promo = ({promo,success}) => (
    <div className="promo">
        <Input
              type="text"
              top="E-mail"
              name="email"
              value={promo}
              onChange={onChange}
              status={onChange ? 'valid' : 'error'}
              bottom={onChange ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'}
        />
        <Button size="xl" mode="secondary" onClick={validPromo}>Ввести промокод</Button>
    </div>
)

export default Promo;