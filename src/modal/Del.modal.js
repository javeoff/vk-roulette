import React from 'react'
import PropTypes from 'prop-types';
import { ModalRoot, ModalCard, platform, IOS, Button, Div,RichCell,Avatar,Input,SimpleCell  } from '@vkontakte/vkui';

import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import "./modal.css"
const osName = platform();

const Balance = (props) => (
  <div className="main-card">

    <RichCell
      before={<Avatar size={72} mode="app" src={props.good.img ? props.good.img : props.good.photo_link} tyle={{margin: "25px 0",maxHeight: "30vh"}} />}
      after={<span ><b>{props.good.price} <span style={{color: "#d6b313"}}>руб</span></b></span>}
    >
      {props.good.name}
    </RichCell>
    <Div>
        <p>ФИО</p>
        <Input
            type="add"
            name="add"
            placeholder="Иванов Иван Иванович"
            value={props.addr[0].fio}
            onChange={(e)=> {
                let s = props.addr[0];
                s.fio = e.currentTarget.value;
                props.setAddr([s])
            }}
        />
        <div style={{display: 'flex'}} >
            <div style={{marginRight: 10}}>
                <p>Страна</p>
                <Input
                    type="add"
                    name="add"
                    placeholder="Россия"
                    value={props.addr[0].coun}
                    onChange={(e)=> {
                        let s = props.addr[0];
                        s.coun = e.currentTarget.value;
                        props.setAddr([s])
                    }}
                />
            </div>
            <div>
                <p>Индекс</p>
                <Input
                    type="add"
                    name="add"
                    placeholder="141000"
                    value={props.addr[0].inn}
                    onChange={(e)=> {
                        let s = props.addr[0];
                        s.inn = e.currentTarget.value;
                        props.setAddr([s])
                    }}
                />
            </div>
        </div>

        <div style={{display: 'flex'}} >
            <div style={{marginRight: 10}}>
                <p>Область/Край</p>
                <Input
                    type="add"
                    name="add"
                    placeholder="Московская"
                    value={props.addr[0].obl}
                    onChange={(e)=> {
                        let s = props.addr[0];
                        s.obl = e.currentTarget.value;
                        props.setAddr([s])
                    }}
                />
            </div>
            <div>
                <p>Город</p>
                <Input
                    type="add"
                    name="add"
                    placeholder="Москва"
                    value={props.addr[0].sity}
                    onChange={(e)=> {
                        let s = props.addr[0];
                        s.sity = e.currentTarget.value;
                        props.setAddr([s])
                    }}
                />
            </div>
        </div>
        <p>Улица, дом, квартира</p>
        <Input
            type="add"
            name="add"
            placeholder="ул. Пушкина, д.1, кв.1"
            value={props.addr[0].home}
            onChange={(e)=> {
                let s = props.addr[0];
                s.home = e.currentTarget.value;
                props.setAddr([s])
            }}
        />
          <span style={{color: "#c13131"}}>{props.errin}</span>
    </Div>
        <SimpleCell
            before={<Icon28InfoOutline />}
        >
            Стоимость доставки 100 руб
        </SimpleCell>
      <Div>
        <Button size="xl" mode="secondary" onClick={props.order} data-cid={props.good.id} style={{marginTop: 20}}>Заказать</Button>
    </Div>
</div>
)

export default Balance;