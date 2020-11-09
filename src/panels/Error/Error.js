import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Div, PanelHeader, Panel, CardGrid, Card, Gradient, Group, Banner, Button } from '@vkontakte/vkui';
import Test from "../../module/test";
import "./Error.css";


import Icon28BugOutline from '@vkontakte/icons/dist/28/bug_outline';

const Error = ({ id, go, fetchedUser, error,error2}) => {
	return (
	<Panel id={id}>
		{fetchedUser &&
		<PanelHeader
			separator={false}
			left={
				<Avatar size={33} src={fetchedUser.photo_200} />
			}>
			SuperCase
		</PanelHeader>
		}

		<Div separator={false} style={{textAlign: "center", marginTop: '10vh'}}>
			<Icon28BugOutline width={56} height={56} style={{margin: "0 auto"}} />

			<h1>Ошибка загрузки</h1>
			<h3>{error !== '' ? "Номер ошибки: #"+error : ''}</h3>
			<CardGrid>
				<Card size="l">
					<p style={{textAlign: "left",margin: 20}}>{error2}</p>
				</Card>
			</CardGrid>
			<Button size="l" onClick={()=>document.location.reload()} style={{marginTop: "20px"}}>Перезагрузить</Button>

		</Div>
	</Panel>
);
}

Error.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Error;
