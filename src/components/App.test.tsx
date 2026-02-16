import Navbar from "./ui/Navbar.tsx";
import {cvData} from "../data/CVdata.ts";
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
test('renders app', () => {
    render(<MemoryRouter>
        <Navbar />
    </MemoryRouter>);
    expect(screen.getByText(`CV ${cvData.name}`)).toBeInTheDocument();
})
