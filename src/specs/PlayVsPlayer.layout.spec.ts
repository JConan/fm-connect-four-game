import { fireEvent, render, screen } from '@testing-library/svelte'
import PlayVsPlayer from '../lib/PlayVsPlayer.svelte'

describe('Rules layout', () => {
    it("should have a button for continue the game", async () => {
        render(PlayVsPlayer)
        const button = screen.getByText(/continue game/i).parentElement as HTMLAnchorElement
        expect(button).not.toBeVisible()

        const menu = screen.getByText(/menu/)
        await fireEvent.click(menu)
        expect(button).toBeVisible()
    })

    it("should have a button for restarting the game", async () => {
        render(PlayVsPlayer)
        const button = screen.getByText(/restart game/i).parentElement as HTMLAnchorElement
        expect(button).not.toBeVisible()

        const menu = screen.getByText(/menu/)
        await fireEvent.click(menu)
        expect(button).toBeVisible()
    })

    it("should have a button to quit", async () => {
        render(PlayVsPlayer)
        const button = screen.getByText(/quit/i).parentElement as HTMLAnchorElement
        expect(button.href).toMatch(/\/#$/)
        expect(button).not.toBeVisible()

        const menu = screen.getByText(/menu/)
        await fireEvent.click(menu)
        expect(button).toBeVisible()
    })

})