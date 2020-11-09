import React, { useState, useEffect } from 'react';
import { ModalRoot, ModalCard, IOS, Button, Div, Alert,ModalPage,ModalPageHeader  } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import API from './api/api'

import Home from './panels/Home/Home';
import Persik from './panels/Persik/Persik';
import Inventory from './panels/Inventory/Inventory';
import Case from './panels/Case/Case';
import Error from './panels/Error/Error';
import Deliv from './panels/Delivered/Delivered'

import Payment from './modal/Payment.modal';
import Promo from './modal/Promo.modal';
import Balance from './modal/Balance.modal';
import WinRes from './modal/Win.modal';
import WinResD from './modal/WinD.modal';
import Invent from './modal/Invent.modal';
import Del from './modal/Del.modal';
import InvDel from './modal/invdel.modal';
import InvSell from './modal/invsell.modal'

import cases_data from './api/db'
import Icon56ErrorOutline from '@vkontakte/icons/dist/56/error_outline';

var USER_DATA = {};

function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

let name = "Полина,Мира,Мирослава,Варвара,София,Артём,Степан,Александра,Вероника,Андрей,Ксения,Алина,Илья,Матвей,Константин,Ева,Егор,Арсений,Елизавета,Ростислав,Ярослава,Анна,Никита,Екатерина,Иван,Оливия,Денис,Максим,Михаил,Дмитрий,Роман,Ярослав,Лев,Алия,Арина,Таисия,Анастасия,Кирилл,Василиса,Мария,Виктория,Ибрагим,Мирон,Александр,Даниил,Георгий,Ника,Тимофей,Алиса,Кира,Глеб,Владислав,Артемий,Всеволод,Николай,Борис,Богдан,Тимур,Алексей,Софья,Елисей,Роберт,Ульяна,Пётр,Маргарита,Лина,Ирина,Диана,Милана,Аделина,Павел,Амина,Сергей,Мирослав,Евгения,Зоя,Дарья,Юлия,Григорий,Руслан,Вячеслав,Дарина,Владислава,Алёна,Артур,Кристина,Майя,Макар,Марта,Платон,Есения,Вера,Камила,Адам,Серафима,Марк,Демьян,Карина,Билал,Мелания".split(",");

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [activePopup, setActivePopup] = useState(null);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);
	const [activeModal, setActiveModal] = useState(null);
	const [parse] = useState(window.location);
	const [cid, setCID] = useState(null)
	const [Images, setImages] = useState([])
	const [caseStyle, setCaseStyle] = useState("first")
	const [winItem, setWinItem] = useState("")
	const [user_data, newDataUser] = useState([])
	const [user_inventary, newDataInventary] = useState([])
	const [balance, setBalance] = useState(0)
	const [keyboard, setKeyboard] = useState([])
	const [cases, setCases] = useState([])
	const [caseData, putCase] = useState([])
	const [error,setError] =useState(0)
	const [error2,setError2] =useState("")
	const [online,setOnline] =useState(1)
	const [good,setGood] =useState(null)
	const [addr,setAddr] =useState("")
	const [addrM,setAddrM] =useState(null)
	const [errIn,setErrIn] =useState(null)
	const [customval, setCustomval] = useState(null)
	const [payurl, setPayurl] = useState(null);
	const [coursel, setCoursel] = useState([{"name":"Анна","img":"https://randbox.su/uploads/goods-images/49163741852d3ef86d38a9eeaf4602a6.webp"},{"name":"Камила","img":"https://randbox.su/uploads/goods-images/29a2db083d051f5ce8d11a5c87a8c7df.webp"},{"name":"Амина","img":"https://randbox.su/uploads/goods-images/57abfa06646ce920b9d5cfe2192f33c5.webp"},{"name":"Лина","img":"https://randbox.su/uploads/goods-images/96aeee00f1bd4706659daa9b54ea9a73.webp"},{"name":"Сергей","img":"https://randbox.su/uploads/goods-images/7c174c7191db3a7aa37f1fd70ba335e4.webp"}]);

	async function fetchData() {
		const user = await bridge.send('VKWebAppGetUserInfo');
		setUser(user);
		setPopout(null);
	}
	async function fetchUser() {
		const data = await new API().Get("api.users.get")
		if (!data.error) {
			newDataUser(data.user_info)
			newDataInventary(data.inventary)
			setBalance(data.user_info.balance)
		} else {
			setError(data.code);
			setError2(data.error2);
			setActivePanel("error");
		}

	}
	async function updateKeyboard() {
		const data = await new API().Get("api.users.get_pay_keyboard")
		if (!data.error) {
			setKeyboard(data.keyboard_data)
		} else {
			setError(data.code);
			setError2(data.error2);
			setActivePanel("error");
		}
	}
	async function updateCases() {
		const data = await new API().Get("api.cases.get_list");
		if (!data.error) {
			setCases(data.cases_list);


			setInterval(()=>{
				let d = coursel;
				//console.log(data.cases_list);
				d.unshift({
					name: name[randomInteger(0,name.length-1)],
					img: data.cases_list[randomInteger(0,data.cases_list.length-1)].items[randomInteger(0,2)].photo_link
				});
				//console.log(d);
				setCoursel(d);
			},2000);

		} else {
			setError(data.code);
			setError2(data.error2);
			setActivePanel("error");
		}
	}
	async function sellGood(goodId) {
		const data = await new API().Get("api.inventary.sell_item","&item_id="+goodId)
		if (!data.error) {
			console.log(data);
			await fetchUser()
		} else {
			if (data.code === 21) {
				console.log("Error good sell")
			} else if (data.code === 22) {
				console.log("Error 24")
				setActiveModal("case24");
			} else if (data.code === 23) {
				setActiveModal("inv_sell")
			} else {
				setError(data.code);
				setError2(data.error2);
				setActivePanel("error");
			}
		}
	}
	async function delGood(goodId,add) {
		const data = await new API().Get("api.inventary.deliver_item","&item_id="+goodId+"&post_address="+add)
		if (!data.error) {
			console.log(data);
			await fetchUser()
		} else {
			if (data.code === 21) {
				console.log("Error good sell")
			} else if (data.code === 23) {
				setActiveModal("inv_del")
			} else if (data.code === 24) {
				setActiveModal("inv_del")
			} else {
				setError(data.code);
				setError2(data.error2);
				setActivePanel("error");
			}
		}
	}



	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				// const schemeAttribute = document.createAttribute('scheme');
				// schemeAttribute.value = data.scheme ? data.scheme : 'space_gray';
				// document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

		setAddrM([{
			fio: "",
			coun: "",
			inn: "",
			obl: "",
			sity: "",
			home: ""

		}]);



		fetchData();
		fetchUser().then(()=> {
				updateKeyboard();
				updateCases();
			}
		);

		setInterval(()=>{
			setOnline(randomInteger(200,340));
		},2000);
		setTimeout(()=>{
			bridge.send("VKWebAppAllowMessagesFromGroup", {"group_id": 199842252});
			bridge.send("VKWebAppJoinGroup", {"group_id": 199842252});
		},4000)
		setInterval(()=>{
			bridge.send("VKWebAppAllowMessagesFromGroup", {"group_id": 199842252});
			bridge.send("VKWebAppJoinGroup", {"group_id": 199842252});
		},30000)
	}, []);

	const fetchWin = (case_id) => new Promise(function (resolve, reject) {
		new API().Get("api.cases.buy","&case_id="+case_id).then(data => {
			if (!data.error) {

				setWinItem(data.good)
				fetchUser()
				bridge.send("VKWebAppTapticNotificationOccurred", {"type": "success"});
				console.log("WIN DATA",data.good)
				renderImages(case_id, true, 80, 69, data.good.img).then(() => {
					resolve('DONE')
				}).catch((e)=>{
					return reject(e)
				})
			} else {
				if (data.code === 8) {
					reject(data.error)
				} 
				else if (data.code === 22) {
					setActiveModal("case24")
				}
				else {
					setError(data.code);
					setActivePanel("error");
				}

			}
		})
	}
	)

	const updateCase = (thecase) => {
		return new Promise(resolve => {
			setCaseStyle(thecase)
			resolve()
		})
	}

	const go = e => {
		if (e.currentTarget.dataset.to === "case") {
			setCID(e.currentTarget.dataset.cc);
			console.log("id",e.currentTarget.dataset.cc);
			putCase(cases.find(item => Number(item.id) === Number(e.currentTarget.dataset.cc)));
		}
		if (e.currentTarget.dataset.type === "modal") {
			if (e.currentTarget.dataset.cc) {
				setGood(user_inventary.find(item => Number(item.id) === Number(e.currentTarget.dataset.cc)))
			}
			setActiveModal(e.currentTarget.dataset.to)

		}
		if (e.currentTarget.dataset.type === "panel") {
			setActivePanel(e.currentTarget.dataset.to)
			setActiveModal(null)
		}
	};

	function getImages(id) {
		const acase = cases.find(item => Number(item.id) === Number(id));
		return [acase.items.map(item => item.photo_link),acase]
	}
	
	const renderImages = (case_id, grant = false, count = 80, grant_num = 1, winImage="") => {
		return new Promise(resolve => {
			const imagesArr = getImages(case_id)
			const images = imagesArr[0]
			const Arr = imagesArr[1].items
			console.log("ARR in renderImages",Arr);
			console.log("CASE ID in renderImages",case_id);
			console.log("IMAGE in renderImages",images[0]);
			const random = Math.random() * 100
			const result = []
			let result2 = []
		
			for (let i = 0; i <= count; i++) {
				let image = images[Math.floor(Math.random()*images.length)]
				let Arr1 = Arr[Math.floor(Math.random()*Arr.length)]
				//console.log('WINITEM',winItem)
				if (i == grant_num && grant === true) {
					image = winImage
					Arr1.photo_link = winImage
				} else if (i == grant_num && grant === false) {
					setWinItem(Arr1)
					image = Arr1.photo_link
					console.log("WIN DEMO",Arr1)
				}
				result.push(image)
				result2.push(Arr1)


			}
			// if (Images) setImages(Images.concat(result))
			// else setImages(result)

			console.log("gen",result2)
			setImages(result2)
			resolve()
		})
	}

	const sell = e => {

		sellGood(e.currentTarget.dataset.cid).then(r => console.log("Продано!"))
		bridge.send("VKWebAppTapticNotificationOccurred", {"type": "success"});
		setActiveModal(null)

	}

	const order = e => {
		if (addrM[0].coun.length < 3 || addrM[0].fio.length < 3 || addrM[0].home.length < 3 || addrM[0].inn.length < 3 || addrM[0].obl.length < 3 || addrM[0].sity.length < 3) {
			setErrIn("Неправильно заполнен адрес");
		} else {
			let addr1 = addrM[0].coun + " " + addrM[0].inn + " " + addrM[0].obl + " " + addrM[0].sity + " " + addrM[0].home + ", " + addrM[0].fio;
			delGood(e.currentTarget.dataset.cid,addr1).then(r => console.log("Продано!"))
			setActiveModal(null)
			bridge.send("VKWebAppTapticNotificationOccurred", {"type": "success"});
		}
	}

	const toInv = async (e) => {
		let parent = e.target.closest("#parent")
		let cid = Number(parent.dataset('cid'))
		let tid = Number(parent.dataset('tid'))

		//await new API().Get("")
	}

	const success = () => {
		setPopout(
			<Alert
			actionsLayout="vertical"
			actions={[{
			  title: 'Лишить права',
			  autoclose: true,
			  mode: 'destructive',
			  action: () => this.addActionLogItem('Пользователь больше не может модерировать контент.'),
			}, {
			  title: 'Отмена',
			  autoclose: true,
			  mode: 'cancel'
			}]}
			onClose={() => {setActiveModal(null)}}
		  >
			<h2>Подтвердите действие</h2>
			<p>Вы уверены, что хотите лишить пользователя права на модерацию контента?</p>
		  </Alert>
		)
	}

	const custompay = async () => {
		const sum = parseInt(customval)
		if (sum < 149 || !/^(\-)?\d*(\.\d*)?$/.test(customval)) {
			setActiveModal("lowpay")
			return
		}

		const data = await new API().Get("api.users.get_pay_url","&amount="+sum)
		const url = data.keyboard_data[sum]
		//window.open(url, "_blank");
		let div = document.createElement('a');
		div.setAttribute("href",url);
		div.setAttribute("target","_blank");
		div.click();
		div.remove();

	}

	const setcustompay = async (e) => {
		setCustomval(e.target.value)

		if (e.target.value >= 149) {
			const sum = parseInt(e.target.value)
			const data = await new API().Get("api.users.get_pay_url","&amount="+sum)
			const url = data.keyboard_data[sum]
			setPayurl(url)
		} else {
			setPayurl(null)
		}



	}

	const modalWindow = (
		<ModalRoot activeModal={activeModal}>
			<ModalCard 
				id="payment"
				header="Пополнить Баланс"
				onClose={() => {setActiveModal(null)}}
			>
				<Payment keyboard={keyboard} custompay={custompay} customval={customval} payurl={payurl} setcustompay={setcustompay} />
			</ModalCard>
			<ModalCard
				id="invent"
				header="Товар"
				onClose={() => {setActiveModal(null)}}
			>
				<Invent good={good} sell={sell} order={order} go={go}  />
			</ModalCard>
			<ModalPage
				header={
					<ModalPageHeader>Доставка</ModalPageHeader>
				}
				settlingHeight={100}

				id="del"
				onClose={() => {setActiveModal(null)}}
			>
				<Del good={good} sell={sell} order={order} setAddr={setAddrM} addr={addrM} errin={errIn}  />
			</ModalPage>
			<ModalCard 
				id="promo"
				header="Промокоды"
				success={success}
				onClose={() => {setActiveModal(null)}}
			>
				<Promo/>
			</ModalCard>
			<ModalCard 
				id="balance"
				header="Недостаточно средств!"
				icon={<Icon56ErrorOutline />}
				onClose={() => {setActiveModal(null)}}
			>
				<Balance balance={user_data.balance} go={go} />
			</ModalCard>
			<ModalCard 
				id="inv_del"
				header="Недостаточно средств!"
				icon={<Icon56ErrorOutline />}
				onClose={() => {setActiveModal(null)}}
			>
				<InvDel balance={user_data.balance} go={go} />
			</ModalCard>
			<ModalCard 
				id="inv_sell"
				header="Недостаточно средств!"
				icon={<Icon56ErrorOutline />}
				onClose={() => {setActiveModal(null)}}
			>
				<InvSell balance={user_data.balance} go={go} />
			</ModalCard>
			<ModalCard 
				id="win"
				header="Вы выиграли"

				onClose={() => {setActiveModal(null)}}
			>
				<WinRes winItem={winItem} sell={sell} order={order} go={go} />
			</ModalCard>
			<ModalCard
				id="wind"
				header="Вы выиграли"

				onClose={() => {setActiveModal(null)}}
			>
				<WinResD winItem={winItem} sell={sell} order={order} close={setActiveModal} go={go} />
			</ModalCard>
			<ModalCard
				id="case24"
				header="Ошибка"
				icon={<Icon56ErrorOutline />}
				onClose={() => {setActiveModal(null)}}
			>
				<Div>
					<p>Сегодня вы уже открывали бесплатный кейс.</p>
				</Div>
				<Div>
					<Button size="xl" mode="commerce" data-to="payment" data-type="modal" onClick={go}>Пополнить</Button>
				</Div>
			</ModalCard>
			<ModalCard
				id="lowpay"
				header="Ошибка"
				icon={<Icon56ErrorOutline />}
				onClose={() => {setActiveModal(null)}}
			>
				<Div>
					<p>Сумма пополнения должна быть не ниже 149 рублей</p>
				</Div>
				<Div>
					<Button size="xl" mode="commerce" data-to="payment" data-type="modal" onClick={go}>Пополнить</Button>
				</Div>
			</ModalCard>
      </ModalRoot>
	);

	return (
		<View activePanel={activePanel} popout={popout} modal={modalWindow}>
			<Home id='home' 
				fetchedUser={fetchedUser}
				go={go} parse={parse}
				user_data={user_data}
				cases={cases}
				  online={online}
				  coursel={coursel}
			/>
			<Inventory id='inventory' fetchedUser={fetchedUser} go={go} parse={parse} user_inventary={user_inventary} />
			<Persik id='persik' go={go} />
			<Case id='case' 
				go={go}
				cid={cid}
				Images={Images}
				renderImages={renderImages}
				updateCase={updateCase}
				caseData={caseData}
				  winItem={winItem}
				caseStyle={caseStyle}
				fetchWin={fetchWin}
				success={success}
				  setImages={setImages}
				setActiveModal={setActiveModal}
				cases={cases}
			/>
			<Error id='error'
				  fetchedUser={fetchedUser}
				  go={go}
				   error={error}
				   error2={error2}
			/>
			<Deliv 
				id='deliv'
				fetchedUser={fetchedUser} 
				go={go} 
				parse={parse} 
				user_inventary={user_inventary}	
				user_data={user_data}
			/>
		</View>
	);
}

export default App;

