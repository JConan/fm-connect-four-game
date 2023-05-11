<script lang="ts">
    import GameMenu from "./Modals/GameMenu.svelte";

    let menu:GameMenu;
    $: showMenu = ()=>{ menu && menu.show() }
</script>

<button on:click={showMenu}>
    menu
</button>

<GameMenu bind:this={menu} />
