<script lang="ts">
    import GameMenu from "./Modals/GameMenu.svelte";

    let menu: GameMenu;
    $: showMenu = () => {
        menu && menu.show();
    };
</script>

<div class="top">
    <button on:click={showMenu}>MENU</button>
    <img width="52px" src="/images/logo.svg" alt="logo" />
    <button>RESTART</button>
</div>

<div class="container">
    <div class="player">
        <p>PLAYER 1</p>
        <p>12</p>
        <img src="/images/player-one.svg" alt="player one icon" />
    </div>
    <div class="board" aria-label="board">
        <img
            src="/images/board-layer-black-large.svg"
            alt="board layout black"
        />
        <img
            src="/images/board-layer-white-large.svg"
            alt="board layout white"
        />
    </div>
    <div class="player">
        <p>PLAYER 2</p>
        <p>23</p>
        <img src="/images/player-two.svg" alt="player two icon" />
    </div>
</div>

<GameMenu bind:this={menu} />

<style>
    button {
        background: #5c2dd5;
        color: white;
        height: 39px;
        width: 86px;
        border-radius: 20px;
        border: none;
    }
    button:hover {
        background: #fd6687;
    }
    .board {
        height: 584px;
        width: 632px;
        border-radius: 40px;
    }
    .board img {
        position: absolute;
        width: 632px;
    }
    .player {
        height: 160px;
        width: 141px;
        border-radius: 20px;
        border: 3px solid #000000;
        box-shadow: 0px 10px 0px 0px #000000;
        background-color: white;
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .player p{
        margin: 0;
        line-height: 0;
    }
    .player p:nth-child(2) {
        font-size: 56px;
    }
    .player img {
        position: absolute;
        top: -30px;
        left: calc( 50% - 27px );
    }
    .container{
        width: calc( 187px + 60px + 584px + 60px + 187px );
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .top{
        width: 632px;
        margin: 50px auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
