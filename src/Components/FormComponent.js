import React from 'react'
import Flexi from './FlexiComponent'
import Button from 'antd/lib/button';



const flexiConfig = {
    items: [
        {
            "name": "personname",
            "label": "Person's Name",
            "type": "TextField",
        },
        {
            "name": "states",
            "label": "Person's state",
            "type": "DropDown",
            "values": [
                "Maharashtra",
                "Kerala",
                "Tamil Nadu"
            ]
        },
        {
            "name": "City",
            "label": "Person's state",
            "type": "DropDown",
            "values": [
                "Maharashtra",
                "Kerala",
                "Tamil Nadu"
            ]
        },
        {
            "name": "personadd",
            "label": "Person's Address",
            "type": "TextField",
        },
        

    ]
};

class FormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {

            }

        }
    }
    handleChange = (event, inputPropName) => {
        const newState = Object.assign({}, this.state);
        newState.userInfo[inputPropName] = event.target.value;
        this.setState(newState);
    }

    onFlexiSubmit = () => {
        console.log(this.state.userInfo)
        alert(JSON.stringify(this.state.userInfo))

    }

    render() {
        return (
            <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Flexi config={flexiConfig} onSubmit={this.onFlexiSubmit} handleChange={this.handleChange} />
                <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <Button
                        type="primary"
                        size={20}
                        onClick={this.onFlexiSubmit}>Click</Button>
                </div>
            </div>
        )
    }

}

export default FormComponent;