import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Button, Div } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

//import persik from '../../img/persik.png';
import './Payment.css';

const osName = platform();

const Payment = props => {
	return (
		<Panel id={props.id}>
			<PanelHeader
				left={<PanelHeaderButton onClick={props.go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</PanelHeaderButton>}
			>
				Пополнить
			</PanelHeader>
			{Object.keys(props.keyboard).map(key => (
				<Div><a href={props.keyboard[key]}><Button size="xl" mode="secondary">{key} &#8381;</Button></a></Div>
			))}
		</Panel>
	);
}

Payment.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Payment;
