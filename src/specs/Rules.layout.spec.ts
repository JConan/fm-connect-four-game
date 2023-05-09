import { render, screen } from '@testing-library/svelte'
import Rules from '../lib/Rules.svelte'

describe('Rules layout', () => {

    it('shows rules details', () => {
        render(Rules)
        screen.getByText(/^rules$/i)
    })

    it("should have a button to go back home", async () => {
        render(Rules)
        const button = screen.getByLabelText(/go home/i) as HTMLAnchorElement
        expect(button.href).toMatch(/\/#$/)
    })

})