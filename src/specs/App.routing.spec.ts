import { render, fireEvent, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/svelte'
import App from '../App.svelte'

it('should able to go to Rules Page and go back', async () => {
    render(App)

    // go to Rules page
    const gameRulesBtn = await waitFor(() => screen.getByText(/Game Rules/i) as HTMLLinkElement)
    await fireEvent.click(gameRulesBtn)
    
    // find checker button
    const checkerBtn = await waitFor(() => screen.getByRole('link', { name: /go home/i }) as HTMLLinkElement)
    expect(window.location.hash).toBe('#/rules')

    await fireEvent.click(checkerBtn)
    await waitForElementToBeRemoved(checkerBtn)
    expect(window.location.hash).toBe('')
})


