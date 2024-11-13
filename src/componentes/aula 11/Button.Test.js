import React from "react";
import {render, screen} from '@testing-library/react'
import TesteButton from "./TesteButton";

test("renders button with the correct label", () =>{
    render(<TesteButton label="Clique aqui!"/>);
    const buttonElement = screen.getAllByText(/clique aqui/i);
    expect(buttonElement).toBeInTheDocument();
});