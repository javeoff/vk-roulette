import React from 'react';
import {Div, Button, Card, CellButton,CardGrid} from '@vkontakte/vkui';
import './case.css';
import Case from "../main/case.main";

const Fortune = (props) => {
	React.useEffect(() => {
        console.log('SETTING DATA',props.caseData)
        console.log('CASE ID',props.cid)
        props.renderImages(props.cid)
    }, []) 
 
    const changeCase = (e) => {
        props.renderImages(props.cid).then(() => {
            props.fetchWin(props.cid).then(()=>{
                props.updateCase(changeStyle(props.caseStyle))
                // let ii = props.Images
                // ii[69] = props.WinItem
                // props.setImages(ii)
                console.log("red",props.WinItem)
                console.log('fort Images',props.Images)
                setTimeout(() => {
                    props.setActiveModal('win')
                    props.updateCase("first")
                },8000)
            })
            .catch(error => {
                props.setActiveModal('balance')
            })
        })
        e.target.setAttribute("disabled","true")
    }

    const changeCaseDemo = (e) => {
        props.renderImages(props.cid,false,80,69).then(() => {
            props.updateCase(changeStyle(props.caseStyle))
            //props.setWinItem()
            console.log('fort Images',props.Images)
            setTimeout(() => {
                props.setActiveModal('wind')
                 props.updateCase("first")
            },8000)

        })
        e.target.setAttribute("disabled","true")
    }

    const changeStyle = (caseStyle) => {
        return caseStyle === "first" ? "second" : "first"
    }

    return (
        <div>
            <Div>
                <h3 style={{margin: "0 0 20px",textAlign: "center"}}> {props.caseData.name}</h3>
            </Div>
            <Div className='case-window'>
                <div className={props.caseStyle}>
                    { props.Images.map((img,k) => (
                    <div className='case-cover'
                         key={k}
                         data-id={img.id}
                         style={{
                        backgroundImage:`url(${img.photo_link})`
                    }}>

                    </div>
                    ))}
                </div>
            </Div>
            <Div>
                <Button size="xl" mode="commerce" onClick={changeCase} stretched>Открыть за {props.caseData.price} руб.</Button>
                <br />
                {props.caseData.price === 0 ? "" : <Button size="xl" mode="secondary" onClick={changeCaseDemo} stretched>Демо прокрут</Button>}

                <h4 style={{marginTop:40,marginBottom:0,textAlign: "center"}}>Содержимое кейса</h4>
            </Div>
                <CardGrid>
                { props.cases.find(item => Number(item.id) === Number(props.cid)).items.map(data => (
                    <Card size="m"  className="card-tt" key={data.id}>
                        <div className="item-img" style={{
                            backgroundImage:`url(${data.photo_link})`
                        }}>
                        </div>
                        <div
                            className="card-box"
                            style={{ minHeight:80, height:"inherit",width:"100%"}}
                            data-to="case"
                            data-type="panel"
                            data-cc={data.id}
                        >
                            <div className="item-info">
                                <Div className="item-about" style={{textAlign: 'center', minHeight: 74}}>
                                    <span className="item-name" style={{minHeight: 34}}>{data.name}</span>
                                    <span ><b>{data.price} <span style={{color: "#d6b313"}}>руб</span></b></span>
                                </Div>
                            </div>
                        </div>
                    </Card>
                ))}
                </CardGrid>

        </div>
    ) 
}

export default Fortune