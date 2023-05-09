import { render, screen } from '@testing-library/svelte'
import PlayVsPlayer from '../lib/PlayVsPlayer.svelte'
import { vi } from 'vitest';


describe('Rules layout', () => {
    beforeAll(() => {
        /* 
            workaround https://github.com/jsdom/jsdom/issues/3294 
            to add support of HTMLDialogElement functions in vitest
        */
        HTMLDialogElement.prototype.show = vi.fn();
        HTMLDialogElement.prototype.showModal = vi.fn();
        HTMLDialogElement.prototype.close = vi.fn();
    });

    it("should have a button for continue the game", () => {
        render(PlayVsPlayer)
        const button = screen.getByText(/continue game/i).parentElement as HTMLAnchorElement
    })

    it("should have a button for continue the game", () => {
        render(PlayVsPlayer)
        const button = screen.getByText(/restart game/i).parentElement as HTMLAnchorElement
    })

    it("should have a button to quit", async () => {
        render(PlayVsPlayer)
        const button = screen.getByText(/quit/i).parentElement as HTMLAnchorElement
        expect(button.href).toMatch(/\/#$/)
    })

})