import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import FeaturedMovie from "./FeaturedMovie"

describe('Featured Movie Component', () => {
    test('renders lorem text', () => {
        render(<FeaturedMovie />)

        const output = screen.queryByText(/lorem ipsum dolor/i)

        expect(output).toBeInTheDocument()
    })
})