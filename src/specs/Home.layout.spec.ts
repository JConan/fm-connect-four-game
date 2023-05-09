import { render, screen, } from '@testing-library/svelte'
import Home from '../lib/Home.svelte'

describe('Home layout', () => {
    it('should have a logo', () => {
        render(Home)
        screen.getByAltText(/logo/i)
    })

    it('should have a button "Play vs Player"', () => {
        render(Home)
        const button = screen.getByRole('link', { name: /play vs player/i }) as HTMLAnchorElement
        expect(button.href).toMatch(/\/#\/play\/vsplayer$/)
    })

    it('should have a button "Game Rules"', () => {
        render(Home)
        const button = screen.getByRole('link', { name: /game rules/i }) as HTMLAnchorElement
        expect(button.href).toMatch(/\/#\/rules$/)
    })
})