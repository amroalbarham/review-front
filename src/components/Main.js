import axios from 'axios';
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Digimon from './Digimon';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverLink: process.env.REACT_APP_SERVER,
            searh: '',
            digimons: '',
            showModel: false,
            showForm:true,
        }
    }

    searhSubmit = async (e) => {
        e.preventDefault();
        const getData = await axios.get(`${this.state.serverLink}/getData?q=${this.state.searh}`);
        this.setState({
            digimons: getData.data,
            showModel: true,
            showForm:false,
        })
        
    }
    changeFunc = e => this.setState({ searh: e.target.value })
    
    
    render() {
        return (
            <>
            {this.state.showForm && 
            <Form onSubmit={e => this.searhSubmit(e)} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="text" placeholder="Enter " onChange={this.changeFunc} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            }

            {this.state.showModel && this.state.digimons.map((digimon,idx)=>{
                    return <Digimon
                    digimon={digimon}
                    idx={idx}
                    />
            })}
            </>
        )
    }
}

export default Main;
