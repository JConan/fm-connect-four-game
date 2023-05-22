<script lang="ts">
    import UserSelection from "./Components/UserSelection.svelte";
import GameMenu from "./Modals/GameMenu.svelte";

    let menu: GameMenu;
    let selectIdx = 0;
    let user;

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
        <!-- <img src="/images/board-layer-black-large.svg" alt="board layout black" /> -->
        <UserSelection index={selectIdx} {user}/>
        <div class="counters">
            <div class="counter-row">
                <ul on:mouseenter={() => { selectIdx=0; user="red" }}>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                </ul>
            </div>
            <div class="counter-row">
                <ul on:mouseenter={() => { selectIdx=1 }}>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                </ul>
            </div>
            <div class="counter-row">
                <ul>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                </ul>
            </div>
            <div class="counter-row">
                <ul>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                </ul>
            </div>
            <div class="counter-row">
                <ul>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                </ul>
            </div>
            <div class="counter-row">
                <ul>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                </ul>
            </div>
            <div class="counter-row">
                <ul>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-red-large.svg" alt="counter" /></li>
                    <li><img src="/images/counter-yellow-large.svg" alt="counter" /></li>
                </ul>
            </div>
        </div>
        <!-- <img src="/images/board-layer-white-large.svg" alt="board layout white" /> -->
    </div>
    <div class="player">
        <p>PLAYER 2</p>
        <p>23</p>
        <img src="/images/player-two.svg" alt="player two icon" />
    </div>
    <div class="turn">
        <p>PLAYER 2'S TURN</p>
        <p>14s</p>
        <img src="/images/turn-background-yellow.svg" alt="turn background" />
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
        z-index: -2;
        position: relative;
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
    p {
        margin: 0;
        line-height: 0;
    }
    .player p:nth-child(2) {
        font-size: 56px;
    }
    .player img {
        position: absolute;
        top: -30px;
        left: calc(50% - 27px);
    }
    .container {
        width: calc(187px + 60px + 632px + 60px + 187px);
        height: 584px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
    }
    .top {
        width: 632px;
        margin: 50px auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .turn {
        position: absolute;
        height: 160px;
        width: 200px;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        bottom: -120px;
    }
    .turn p:nth-child(2) {
        font-size: 56px;
    }
    .turn img {
        position: absolute;
        top: -0px;
        left: 0;
        z-index: -1;
    }

    .counters {
        --width: 600px;
        width: var(--width);
        height: 504px;
        position: absolute;
        margin-top: 16px;
        left: calc(50% - (var(--width) / 2));
        display: flex;
        justify-content: space-between;
    }

    .counter-row {
        height: 100%;
        width: 72px;
    }
    ul {
        height: calc(100% - 64px);
        list-style-type: none;
        margin-inline: unset;
        padding-inline: unset;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
    }
    .counters img, .selection img {
        width: 72px;
    }
    .selection{
        --width: 615px;
        width: var(--width);
        height: 72px;
        position: absolute;
        left: calc(50% - (var(--width) / 2));
        top: -40px;
    }
    .selection ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0;

    }
    .selection ul li {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .selection .marker{
        height: 30px;
        width: 26px;
        margin: auto;
    }

    .counter-row ul{
        background-color: lightblue;
    }
</style>
