<script lang="ts">
    import { onMount } from "svelte";
    import UserSelection from "./Components/UserSelection.svelte";

    let index: number;
    let user = "red";

    let uList: HTMLUListElement;

    onMount(() => {
        Array.from(uList.children).forEach((child, idx) => {
            child.addEventListener("mouseenter", () => {
                if (index !== idx) {
                    index = idx;
                    user = user === "red" ? "yellow" : "red";
                }
            });
        });
    });

    import { flip } from "svelte/animate";

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const shuffle = () => {
        numbers = numbers.sort(() => 0.5 - Math.random());
    };
</script>

<div>
    <UserSelection {index} {user} />

    <div>
        <ul bind:this={uList}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
        </ul>
    </div>

    <main>
        <button on:click={shuffle}>shuffle numbers</button>
        <div>
            {#each numbers as number (number)}
                <p animate:flip>{number}</p>
            {/each}
        </div>
    </main>
</div>

<style>
    div {
        width: 632px;
        margin: auto;
        position: relative;
        background-color: lightblue;
        height: 30px;
    }
    ul {
        margin-inline: unset;
        padding-inline: unset;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        width: 632px;
        height: 100%;
    }
    li {
        width: 62px;
        text-align: center;
        background-color: lightcoral;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
