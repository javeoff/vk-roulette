import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Button, Div, Group } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Fortune from '../../content/case/fortune'

//import persik from '../../img/persik.png';
import './Case.css';

const osName = platform();

const Case = ({id,go,cid,Images,renderImages,caseStyle,updateCase,fetchWin,success,caseData,setActiveModal,cases,setImages,winItem}) => {
	return (
	<Panel id={id}>
		<PanelHeader
			separator={false}
			left={<PanelHeaderButton onClick={go} data-to="home" data-type="panel">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Кейс
		</PanelHeader>
		<Group style={{display:"block",margin:"0 auto",width:"100%"}} separator="hide">

				<Fortune cid={cid}
				renderImages={renderImages}
				updateCase={updateCase}
				Images={Images}
				caseData={caseData}
				caseStyle={caseStyle}
				fetchWin={fetchWin}
				success={success}
				 winItem={winItem}
				 setImages={setImages}
				setActiveModal={setActiveModal}
				cases={cases}
				/>

		</Group>
	</Panel>
	)

};

Case.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Case;
