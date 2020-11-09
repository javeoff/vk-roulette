import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Group, RichCell, Panel, PanelHeader, PanelHeaderButton, Avatar } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Item from '../../content/main/item.main'

//import persik from '../../img/persik.png';
import '../../content/main/main.css';

const osName = platform();

const doubleArray = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+1]) {
            newArr.push([arr[i],arr[i+1]])
            i++
        }
        else newArr.push([arr[i]])
    }
    return newArr
}


const Delivered = props => (
	<Panel id={props.id}>
		<PanelHeader
            separator={false}
			left={<PanelHeaderButton onClick={props.go} data-to="home" data-type="panel">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Посылки ({props.user_data.in_delivery.length} шт.)
		</PanelHeader>

        <Group style={{display:"block",margin:"0 auto",width:"100%"}} separator="hide">
        { props.user_data.in_delivery.length > 0 ? props.user_data.in_delivery.map((arr,k) => (
            <RichCell
            before={<Avatar size={72} mode="app" src={arr.img ? arr.img : arr.photo_link} style={{margin: "25px 0",maxHeight: "30vh"}} />}
        after={<span ><b><span style={{color: "green"}}>{arr.status === "in_pocess" ? "В процессе" : arr.status === "in_delivery" ? "Отправлено" : "Доставлено"}</span></b></span>}
            >   
                {arr.name}
            </RichCell>
        ))
            :
            <p style={{textAlign: 'center'}}>У Вас нет посылок</p>
        }
        </Group>

	</Panel>
);

Delivered.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Delivered;
