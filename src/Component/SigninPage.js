import React from 'react';
import Page from '../Page';
import {FormControl,Tab,Tabs,Row,Col,FormGroup,Image,Button,} from 'react-bootstrap';
import '../Component/SigninPage.css';
class SigninPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <Row>
                <Col lg={4}></Col>
                <Col lg={4}>
                    <Row>
                        <div>
                            <div className="Login_Form" key={"09"}>
                            <br/>
                            <Image src="../Image/avata.jpg" className="Avata" rounded/>
                            <br/>
                            <h1><b>SIGN UP</b></h1> 
                            <div>
                                <form className="Form">
                                    <FormGroup controlId="formBasicText">
                                    <Row>
                                    <Col lg={6}>
                                        <FormControl type="text" placeholder="First Name..."/>
                                    </Col>
                                    <Col lg={6}>
                                        <FormControl type="text" placeholder="Last Name..."/>
                                    </Col>
                                    </Row>
                                    </FormGroup>
                                </form>
                                <form className="Form">
                                    <FormGroup controlId="formBasicText">
                                    <FormControl type="text" placeholder="Username..."/>
                                    </FormGroup>
                                </form>
                                <form className="Form">
                                    <FormGroup controlId="formBasicText">
                                    <FormControl type="email" placeholder="Email..."/>
                                    </FormGroup>
                                </form>
                                <form className="Form">
                                    <FormGroup controlId="formBasicText">
                                    <FormControl type="password" placeholder="Password"/>
                                    </FormGroup>
                                </form>
                                <form className="Form">
                                    <FormGroup controlId="formBasicText">
                                    <FormControl type="password" placeholder="Confirm Password..."/>
                                    </FormGroup>
                                </form>
                                <Button bsStyle="info">Sign in</Button>
                            </div>
                            </div> 
                        </div>
                        
                    </Row>
                </Col>
                <Col lg={4}></Col>
            </Row>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default SigninPage;