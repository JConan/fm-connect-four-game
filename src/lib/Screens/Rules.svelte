<script>
    import Checker from "$lib/Buttons/Checker.svelte";
</script>

<div class="rules-container">
    <h1>Rules</h1>
    <h2>OBJECTIVE</h2>
    <p>
        Be the first player to connect 4 of the same colored discs in a row
        (either vertically, horizontally, or diagonally).
    </p>
    <h2>HOW TO PLAY</h2>
    <ol>
        <li><p>Red goes first in the first game.</p></li>
        <li>
            <p>
                Players must alternate turns, and only one disc can be dropped
                in each turn.
            </p>
        </li>
        <li><p>The game ends when there is a 4-in-a-row or a stalemate.</p></li>
        <li>
            <p>
                The starter of the previous game goes second on the next game.
            </p>
        </li>
    </ol>
    <Checker />
</div>

<style>
    .rules-container {
        background-color: #ffffff;
        box-shadow: 0px 10px 0px 0px #000000;
        height: 537px;
        width: 480px;
        left: 0px;
        top: 0px;
        border-radius: 40px;
        border: 3px solid black;
        padding-left: 34px;
        padding-right: 30px;
    }

    .rules-container h1,
    .rules-container h2 {
        text-transform: uppercase;
    }
    .rules-container h1 {
        font-size: 56px;
        font-weight: 700;
        text-align: center;
    }
    .rules-container h2 {
        font-size: 20px;
        font-weight: 700;
        color: #7945ff;
    }
    .rules-container ol {
        font-size: 16px;
        font-weight: 700;
        padding-left: 34px;
    }
    .rules-container p {
        font-size: 16px;
        font-weight: 500;
        mix-blend-mode: normal;
        opacity: 0.66;
    }
</style>
