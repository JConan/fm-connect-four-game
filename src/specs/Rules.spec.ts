import { render, fireEvent, screen, act } from '@testing-library/svelte'
import Rules from '../lib/Rules.svelte'

it('shows rules details', () => {
    render(Rules)
    const heading = screen.getByText('Rules')
    expect(heading).toBeInTheDocument()
})

it("should have a link to go back home", async () => {
    render(Rules)
    const link = screen.getByRole('link', { name: "go home" }) as HTMLAnchorElement
    expect(link.href).toMatch(/\/#$/)
})
