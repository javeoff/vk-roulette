import React from 'react';
import API from '../api/api'

export default class Test extends React.Component {
    props = []

    constructor(props) {
        super(props)
        this.props = props
        this.state = {data:[]}
        this.api = new API();
    }

    componentWillMount() {
        this.api.Get('api.users.get_pay_keyboard')
        .then((data) => {
            console.log(data)
        })
    }

    render() {
        const { data } = this.state;
        console.log(data)
        return <h1>ff</h1>
    }
}