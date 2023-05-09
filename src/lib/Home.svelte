<script>
    import GameRulesBtn from "./Buttons/GameRules.svelte";
    import PlayVsPlayerBtn from "./Buttons/PlayVsPlayer.svelte";
</script>

<div class="home-container">
    <img width="52px" src="/images/logo.svg" alt="logo">
    <div>
        <PlayVsPlayerBtn />
        <GameRulesBtn />
    </div>
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
        text-align: center;
    }
    img{
        margin: auto;
        margin-top: 70px;
        margin-bottom: 79px;
    }
    .home-container div {
        height: 200px;
        display: flex;
        flex-direction: column;
    }
</style>
