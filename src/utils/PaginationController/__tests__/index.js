import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import PaginationControl from '../index';
import renderer from 'react-test-renderer';

test('Checking Pagination Comp  with different inputs', () => {
    let checkingProps = {currentPage: 1, gotoPage:()=>{}, nbPages:12}
    let component = renderer.create(
        <BrowserRouter>
        <PaginationControl {...checkingProps}/>
        </BrowserRouter>
        
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    checkingProps = {currentPage:2,gotoPage:()=>{}, nbPages:null}
    component = renderer.create(
        <BrowserRouter>
        <PaginationControl {...checkingProps}/>
        </BrowserRouter>
        
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
});