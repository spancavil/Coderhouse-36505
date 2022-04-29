import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('Testing <App/>', ()=> {

    let tree

    beforeEach(()=> {
        tree = renderer.create(<App />).toJSON();
    })

    it('Renderiza según el snapshot', () => {
        expect(tree).toMatchSnapshot();
    });

    it('Tiene un child', ()=> {
        expect(tree.children.length).toBe(2);
    })

})

