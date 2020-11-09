import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Div, PanelHeader, Panel, CardGrid, Card, Gradient, Group, Banner, Button, Spinner, CardScroll } from '@vkontakte/vkui';
import Test from "../../module/test";
 import "./Home.css";

import NavbarContent from "../../content/main/header.main"
import NavbarMenu from "../../content/main/menu.main"
import Cases from "../../content/main/content.main"

const Home = ({ id, go, fetchedUser, user_data, cases,online,coursel}) => {
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

		{user_data ?
			<div style={{marginTop: 10}}>

				<CardScroll>
					{coursel.map((t,key)=>
						<Card size="s" mode="outline" key={key}>

							<div className="item-img" style={{
								backgroundImage:`url(${t.img})`,
								width: 144,
								height: 60
							}}>

							</div>
							<p style={{textAlign: "center"}}>{t.name}</p>

						</Card>
					)}

				</CardScroll>

				<CardGrid>
					<Card size="l" mode="outline">
						<NavbarContent balance={user_data.balance} count={online} />
					</Card>
				</CardGrid>
				<NavbarMenu go={go} />
				<Group separator="hide">
				<Banner
					mode="image"
					header="Бесплатный Кейс"
					subheader="Раз в 24 часа"
					background={
					<div
						style={{
						backgroundColor: '#65c063',
						backgroundImage: 'url(https://randbox.su/uploads/case-images/39d22b7eb5828dac981ad24e5381971c.webp)',
						backgroundPosition: 'right bottom',
						backgroundSize: "contain",
						backgroundRepeat: 'no-repeat',
						}}
					/>
					}
					actions={<Button mode="overlay_primary" data-to="case" data-type="panel" data-cc="5" onClick={go}>Открыть</Button>}
				/>
				</Group>


			<Cases go={go} cases={cases} />
			</div>
			:
			<Spinner size="large" style={{ marginTop: "45vh" }} />
		}
	</Panel>
);
}

Home.propTypes = {
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

export default Home;
