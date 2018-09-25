import React from 'react'
import { Input, Label } from 'antd';
class FlexiComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
            }
        }
    }


    renderForm = () => {
        let model = this.props.config.items;
        let input;

        let formUI = model.map((item, index) => {
            let key = index;
            let type = item.type;
            let name = item.name;
            let value = item.value;
            let label = item.label
            input =
                <div
                    key={index}
                    style={{ marginTop: 20 }}>
                    <span> {label} </span>
                    <Input
                        key={"in" + key}
                        placeholder={name}
                        onChange={(e) => this.props.handleChange(e, name)}
                    />
                </div>

            if (type === "DropDown") {
                input = item.values.map((ele) => {
                    return (
                        <option
                            key={ele + key}
                            value={ele}
                        >{ele}</option>
                    );
                });

                input =
                    <div style={{ marginTop: 10, display: 'grid' }}>
                        <label> {name} </label>
                        <select
                            value={value} onChange={(e) => { this.props.handleChange(e, `optVal${index}`) }}>{input}</select>
                    </div>
            }
            return (
                <div key={'ui' + key}>
                    {input}
                </div>
            );
        });

        return formUI;
    }


    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        )
    }

}

export default FlexiComponent;