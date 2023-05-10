<script lang="ts">
    import GameMenu from "./Modals/GameMenu.svelte";

    let gameMenuDialog: HTMLDialogElement;
</script>

<button
    on:click={() => {
        gameMenuDialog.showModal();
    }}>
    show
</button>

<GameMenu bind:dialog={gameMenuDialog} />
