import React from 'react';
import { render, cleanup, fireEvent} from '@testing-library/react'
import Navbar from './Navbar';

afterEach(cleanup);

describe('Navbar Component', () => {
    test('Does not error given no props', () => {
        expect(() => render(<Navbar />)).not.toThrowError();
    });

    // const renderResult = render(<Navbar />)
    // test('It should display links appropriately', () => {
    // fireEvent.click(renderResult.getByText("/dashboard"));
    // expect(getByText(/This is the Dashboard page/)).not.toBeNull();
    // })
})