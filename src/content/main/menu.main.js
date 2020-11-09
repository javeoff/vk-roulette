import React from 'react'
import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon28CubeBoxOutline from '@vkontakte/icons/dist/28/cube_box_outline';
import Icon28ArchiveOutline from '@vkontakte/icons/dist/28/archive_outline';
import { Div, Button,CardGrid,Card } from '@vkontakte/vkui';

const Menu = [
    [   
        "Пополнить",
        "payment",
        "modal",
        <Icon28MoneyCircleOutline className="icon" width={32} height={32} />
    ],
    [   
        "Инвентарь",
        "inventory",
        "panel",
        <Icon28ArchiveOutline className="icon" width={32} height={32} />
    ],
    [   
        "Посылки",
        "deliv",
        "panel",
        <Icon28CubeBoxOutline className="icon" width={32} height={32} />
    ],
]

const NavbarContent = ({go}) => {
    return (
            <CardGrid className="menu">
                { Menu.map((item,k) => (
                    <Card size="s" key={k}  mode="shadow" data-to={item[1]} data-type={item[2]} onClick={go}>
                        <Div>
                            {item[3]}
                            <p>{item[0]}</p>
                        </Div>

                    </Card>
                ))}
            </CardGrid>
    )
}

export default NavbarContent;