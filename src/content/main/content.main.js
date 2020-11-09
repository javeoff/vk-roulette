import React from 'react'
import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import { Avatar, Div, Cell, Group, Button, PanelHeader, Header, Panel, CardGrid, Card, Gradient } from '@vkontakte/vkui';
import './main.css'

import Case from './case.main'
import cases_data from '../../api/db'

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

const Cases = ({go,cases}) => {
   return (
    <Group style={{display:"block",margin:"0 auto",width:"100%"}} separator="hide">
        { doubleArray(cases).map((arr,k) => (
            <CardGrid key={k}>
            { arr.map((data,k) => (
                <Card
                    size="m"
                    key={k}
                    // mode="outline"
                    className="card-item"
                    data-to="case"
                    data-type="panel"
                    data-cc={data.id}
                    onClick={go}
                >
                    <div className="item-img"
                         style={{
                             backgroundImage:`url(${data.photo_link})`
                         }}>
                    </div>
                    <div 
                    className="card-box"

                    >
                        <Case
                        name={data.name}
                        price={data.price}
                        img={data.img}
                        />
                    </div>
                </Card>
            )) }
            </CardGrid>
        )) }
    </Group>
);
}

export default Cases;