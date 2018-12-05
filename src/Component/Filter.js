import React from 'react';
import {SplitButton,MenuItem,Row} from 'react-bootstrap';
class Filter extends React.Component{
    render (){
        return (
            <div>
                <Row>
                <SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                </SplitButton>
                </Row>
            </div>
        );
    }
}
export default Filter;