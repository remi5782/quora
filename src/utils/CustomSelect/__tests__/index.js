import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Select from '../index';
import renderer from 'react-test-renderer';

test('Checking Select Comp with different inputs', () => {
    let checkingProps = { label: 'TagSelect', options:[{label: 'summary', value:'summary'},{label:'comment', value:'comment'}], handleSelect:()=>{} }
    let component = renderer.create(
        <BrowserRouter>
        <Select {...checkingProps}/>
        </BrowserRouter>
        
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    checkingProps = { label: 'TagSelect', options:[], handleSelect:()=>{} }
    component = renderer.create(
        <BrowserRouter>
        <Select {...checkingProps}/>
        </BrowserRouter>
        
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
});