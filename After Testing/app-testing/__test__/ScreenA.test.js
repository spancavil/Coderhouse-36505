import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-test-renderer';

import ScreenA from '../Screens/ScreenA';
let component

//Mockeamos la navigation
const navigation = {
    navigate: jest.fn()
}

describe('<Screen A/>', () => {
    beforeEach(()=> {
        component = renderer.create(<ScreenA navigation={navigation}/>);
    })
    
    it('The component is defined', () => {
        const tree = component
        expect(tree).toBeDefined();
    });

    it('Renders correctly (by snapshot)', () => {
        const tree = component
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('The main view has 4 childs', () => {
        const tree = component.toJSON();
        expect(tree.children.length).toBe(4);
    });

    it ("Button pressed and changed status", ()=> {
        const button = component.root.findByProps({testID: "myButton"}).props;
        //Simulamos que se presionó el button. Utilizamos act porque se triggerea un re-render
        act(()=> button.onPress())
        const text = component.root.findByProps({testID: "myText"}).props;
        expect(text.children).toEqual('true')
    })

    it("Testing de navigation", ()=> {
        const button = component.root.findByProps({testID: "navButton"}).props;
        //No usamos act porque no triggerea un rerender.
        button.onPress();
        expect(navigation.navigate).toBeCalledWith('Screen B')
    })
});