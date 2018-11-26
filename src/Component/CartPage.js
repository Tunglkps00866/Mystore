import React from 'react';
import Page from '../Page';
import {Breadcrumb} from 'react-bootstrap';
class CartPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="04">
            <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>MyCart</Breadcrumb.Item>
            </Breadcrumb>;
            </div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default CartPage;