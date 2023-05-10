<script lang="ts">
    import BarButton from "../Buttons/BarButton.svelte";
    export let dialog: HTMLDialogElement;

    // close dialog box when clicking on backdrop
    $: dialog && dialog.addEventListener("click", () => dialog.close());
</script>

<dialog bind:this={dialog}>
    <div class="dialog-container">
        <h1>PAUSE</h1>
        <BarButton backgroundColor="white" onClick={() => alert("continue")}>
            <span>CONTINUE GAME</span>
        </BarButton>
        <BarButton backgroundColor="white" onClick={() => alert("restart")}>
            <span>RESTART GAME</span>
        </BarButton>
        <BarButton backgroundColor="red" href="/#">
            <span class="white">QUIT</span>
        </BarButton>
    </div>
</dialog>

<style>
    .dialog-container {
        height: 491px;
        width: 480px;
        border-radius: 40px;
        background-color: #7945ff;
        border: 3px solid #000000;
        box-shadow: 0px 10px 0px 0px #000000;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 50px;
    }
    dialog[open] {
        border: none;
        background-color: inherit;
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
    }
    span {
        margin: auto;
    }

    h1 {
        font-size: 56px;
    }

    h1,
    .white {
        color: white;
    }
</style>
