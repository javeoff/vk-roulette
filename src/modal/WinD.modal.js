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
          <img src={props.winItem.img ? props.winItem.img : props.winItem.photo_link} style={{margin: "25px 0",maxHeight: "30vh"}} />
      </div>
    <h4>{props.winItem.name}</h4>

      <span ><b>{props.winItem.price} <span style={{color: "#d6b313"}}>руб</span></b></span>

    <div style={{display:"flex",marginTop: 25}} id="parent" data-cid={props.winItem.id} data-tid={props.winItem.id}>
       <span>Это демо-режим. Чтобы выиграть реальный приз нужно пополнить баланс.</span>
    </div>
      <br />
    <Button size="xl" mode="commerce" data-type="modal" data-to="payment" onClick={props.go}>Пополнить</Button>
  </Div>
</div>
)

export default Balance;