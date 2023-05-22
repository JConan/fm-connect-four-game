<script context="module" lang="ts">
    export type GameMenuHandlers = {
        show: () => void;
        hide: () => void;
    }
</script>

<script lang="ts">
    import BarButton from "../Buttons/BarButton.svelte";
    let _dialog: HTMLDialogElement;

    // somehow without this attribut in dialog I could not test out visibility
    let open=false;

    // create external handlers
    $: _show = () => { if(_dialog){
        _dialog.showModal()
        open=true
    } }
    $: _hide = () => { if(_dialog){
        _dialog.close()
        open=false
    } }
    
    // close dialog box when clicking on backdrop
    $: _dialog && _dialog.addEventListener("click", () => _hide());

    export function show() { _show() }
    export function hide() { _hide() }
</script>

<dialog bind:this={_dialog} {open}>
    <div class="dialog-container">
        <h1>PAUSE</h1>
        <BarButton color="white" action="back">
            <span>CONTINUE GAME</span>
        </BarButton>
        <BarButton color="white" action="back">
            <span>RESTART GAME</span>
        </BarButton>
        <BarButton color="red" action="back">
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
