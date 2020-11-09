import React from 'react'
import PropTypes from 'prop-types';
import { ModalRoot, ModalCard, platform, IOS, Button, Div, Input, CardGrid,Card } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import "./modal.css"
const osName = platform();

const Payment = (props) => (
  <div className="main-card">
    <CardGrid>
      <Card size="l">
        <Div>
          <p>🎁 АКЦИЯ!</p>
          <p>При пополнении 290₽ вы получаете 500₽ 📲!</p>
        </Div>
        <Div>
          <p>При пополнении 490₽ вы получаете 990₽ 📲! Только 24 часа!</p>
        </Div>
      </Card>
    </CardGrid>
  <Div style={{display: 'flex'}}>
    <a target="_blank" href={props.keyboard["149"]} style={{ marginRight: 10 }}><Button size="xl" mode="secondary">149 &#8381;</Button></a>
    <a target="_blank" href={props.keyboard["290"]}><Button size="xl" mode="commerce">290 &#8381;</Button></a>
  </Div>
  <Div style={{display: 'flex'}}>
    <a target="_blank" href={props.keyboard["490"]} style={{ marginRight: 10 }}><Button size="xl" mode="commerce">490 &#8381;</Button></a>
    <a target="_blank" href={props.keyboard["990"]}><Button size="xl" mode="secondary">990 &#8381;</Button></a>
  </Div>
  <Div>
    <a target="_blank" href={props.keyboard["1990"]} style={{ marginBottom: 20 }}><Button size="xl" mode="secondary">1990 &#8381;</Button></a>
    <a target="_blank" href={props.keyboard["3990"]}><Button size="xl" mode="secondary">3990 &#8381;</Button></a>
  </Div>
  <Div style={{display: 'flex'}}>
    <Input type="text" placeholder="Своя сумма" align="center" onChange={props.setcustompay} value={props.customval}/>
    <Button size="l" stretched mode="commerce" style={{ marginLeft: 10 }} href={props.payurl} disabled={props.payurl === null} target="_blank">Пополнить</Button>
  </Div>
</div>
)

export default Payment;