<script>
    import GameRulesBtn from "$lib/Buttons/GameRules.svelte";
    import PlayVsPlayerBtn from "$lib/Buttons/PlayVsPlayer.svelte";
</script>

<div class="menu">
    <img width="52px" src="/images/logo.svg" alt="logo" />
    <div>
        <PlayVsPlayerBtn />
        <GameRulesBtn />
    </div>
</div>

<style>
    .menu {
        height: 435px;
        border-radius: 40px;
        border: 3px solid #000000;
        box-shadow: 0px 10px 0px 0px #000000;
        background-color: var(--purple);
        padding: 30px;
        padding-bottom: 20px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .menu div {
        height: 174px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media only screen and (max-width: 768px) {
        .menu {
            border: none;
            box-shadow: none;
            padding: 0;
        }
    }
</style>
