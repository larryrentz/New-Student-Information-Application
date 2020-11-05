import React, {Component} from 'react';
import axios from 'axios';
import config from './src/config/config.js'

export default class CreateLink extends Component {

    constructor(props) {
        super(props)
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            link: '',
            description: ''
        }
    }

    onChangeLink(e) {
        this.setState({name: e.target.value})
    }

    onChangeDescription(e) {
        this.setState({description: e.target.value})
    }

    onSubmit(e) {

        e.preventDefault()

        const linkObject = {

            link: this.state.link,
            decription: this.state.description
        };

        axios.post(`http://localhost:${config.port}`, linkObject)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        });

        this.setState({ link: '', description: ''})

    }

    render() {
        return (
            <div className="wrapper">
                <form>
                    <div className="form-group">
                        <label>Enter Link</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter Description</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Link" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}