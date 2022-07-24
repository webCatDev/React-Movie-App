import { render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from './Navbar'
import { Provider } from "react-redux";
import store from '../../../store/store'
import {BrowserRouter} from 'react-router-dom'

describe('Navbar Component', () => {
    test('toggles dark mode', () => {
        render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </BrowserRouter>
        );

        const darkModeToggler = screen.queryByTitle('toggle dark mode')
        fireEvent.click(darkModeToggler)

        const navbar = screen.queryByRole('navigation')
        expect(navbar).toHaveClass('light')
    })
})
