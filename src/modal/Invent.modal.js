import React from 'react'
import PropTypes from 'prop-types';
import { ModalRoot, ModalCard, platform, IOS, Button, Div  } from '@vkontakte/vkui';
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
    <div style={{textAlign: "center"}}>
        <img src={props.good.img ? props.good.img : props.good.photo_link} style={{margin: "25px 0",maxHeight: "30vh"}} />
    </div>
    <h4>{props.good.name}</h4>

        <span ><b>{props.good.price} <span style={{color: "#d6b313"}}>руб</span></b></span>

    <div style={{display:"flex",marginTop: 25}} id="parent">
        <Button size="xl" mode="commerce" onClick={props.sell} data-cid={props.good.id} stretched style={{ marginRight: 8 }} >Продать</Button>
        <Button size="xl" mode="secondary" onClick={props.go} data-to="del" data-type="modal" good={props.good} stretched>Заказать</Button>
    </div>
  </Div>
</div>
)

export default Balance;