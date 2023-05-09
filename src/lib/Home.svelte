<script>
    import GameRules from "./Buttons/GameRules.svelte";
</script>

<div class="home-container">
    <p>Home</p>
    <GameRules />
</div>

<style>
    .home-container {
        height: 435px;
        width: 480px;
        border-radius: 40px;
        border: 3px solid black;
        box-shadow: 0px 10px 0px 0px #000000;
        display: flex;
        flex-direction: column;
    }
</style>
