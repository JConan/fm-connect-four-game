import { fireEvent, render, screen } from '@testing-library/svelte'
import PlayVsPlayer from '../lib/PlayVsPlayer.svelte'

describe('Rules layout', () => {
    beforeEach(()=>{
        render(PlayVsPlayer)
    })

    it("should have a logo", () => {
        screen.getByAltText(/logo/i)
    })

    it('should have a restart button', () => {
        screen.getByText(/^restart$/i)
    })

    it("should have a board", () => {
        screen.getByLabelText("board")
    })

    it("should have players score panel", () => {
        expect(screen.getAllByAltText(/^player .* icon$/).length).toBe(2)
    })

    it("should have a button for continue the game", async () => {
        const button = screen.getByText(/continue game/i).parentElement as HTMLAnchorElement
        expect(button).not.toBeVisible()

        const menu = screen.getByText(/menu/i)
        await fireEvent.click(menu)
        expect(button).toBeVisible()
    })

    it("should have a button for restarting the game", async () => {
        const button = screen.getByText(/restart game/i).parentElement as HTMLAnchorElement
        expect(button).not.toBeVisible()

        const menu = screen.getByText(/menu/i)
        await fireEvent.click(menu)
        expect(button).toBeVisible()
    })

    it("should have a button to quit", async () => {
        const button = screen.getByText(/quit/i).parentElement as HTMLAnchorElement
        expect(button.href).toMatch(/\/#$/)
        expect(button).not.toBeVisible()

        const menu = screen.getByText(/menu/i)
        await fireEvent.click(menu)
        expect(button).toBeVisible()
    })

})