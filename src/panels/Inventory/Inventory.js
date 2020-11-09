import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Button, Div, Group, Card, CardGrid } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
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


const Inventory = props => (
	<Panel id={props.id}>
		<PanelHeader
            separator={false}
			left={<PanelHeaderButton onClick={props.go} data-to="home" data-type="panel">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Инвентарь
		</PanelHeader>

        <Group style={{display:"block",margin:"0 auto",width:"100%"}} separator="hide">
        { props.user_inventary.length > 0 ? doubleArray(props.user_inventary).map((arr,k) => (
            <CardGrid key={k}>
            { arr.map(data => (
                <Card size="m"  className="card-tt" key={data.id} data-cc={data.id} onClick={props.go} data-to="invent" data-type="modal">
                    <div className="item-img" style={{
                    backgroundImage:`url(${data.photo_link})`
                }}>
                    </div>
                    <div
                    className="card-box"
                    >
                        <div className="item-info">
                            <Div className="item-about" style={{textAlign: 'center'}}>
                                <span className="item-name" style={{minHeight: 34}}>{data.name}</span>
                                <span ><b>{data.price} <span style={{color: "#d6b313"}}>руб</span></b></span>
                            </Div>
                        </div>
                    </div>
                </Card>
            )) }
            </CardGrid>
        ))
            :
            <p style={{textAlign: 'center'}}>Инвентарь пуст</p>
        }
        </Group>

	</Panel>
);

Inventory.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Inventory;
