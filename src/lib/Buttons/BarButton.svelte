<script lang="ts">
    const colors = {
        white: "#FFFFFF",
        yellow: "#FFCE67",
        red: "#FD6687",
    };
    import { send, type events } from '$lib/Stores/Navigation'


    export let color: keyof typeof colors;
    export let action : events;
</script>

<button style:--container-color={color} on:click={() => { send(action)  }}
    ><slot /></button
>

<style>
    button {
        background-color: var(--container-color);
        height: 72px;
        width: 400px;
        border-radius: 20px;
        color: #000000;
        border: 3px solid #000000;
        box-shadow: 0px 10px 0px 0px #000000;
        text-decoration: none;
        font-size: 24px;
        font-weight: 700;
        line-height: 31px;
        margin: 0;
        display: flex;
        flex-direction: column;
    }
    button:hover {
        border-color: #5c2dd5;
        box-shadow: 0px 10px 0px 0px #5c2dd5;
    }
    @media only screen and (max-width: 768px) {
        button {
            width: 335px;
        }
    }
</style>
