import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Card from '../index';
import renderer from 'react-test-renderer';

test('Checking Card Component with different inputs', () => {
    let checkingProps = { title:'Card title', objectID: 121, created_at: '2020', url:'d', num_comments:2, points:22, author:'ds' }
    let component = renderer.create(
        <BrowserRouter>
        <Card {...checkingProps}/>
        </BrowserRouter>
        
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    checkingProps = { title:null, objectID: null, created_at: undefined, url: null, num_comments:null, points:null, author:null }
    component = renderer.create(
        <BrowserRouter>
        <Card {...checkingProps}/>
        </BrowserRouter>
        
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
});