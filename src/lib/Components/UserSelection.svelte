<script lang="ts">
    import { flip } from 'svelte/animate';
    let uList: HTMLUListElement;
    export let index = 0;
    export let user: "red" | "yellow" = "red"

    const cursor = { idx:6, data: '' }
    $: cursor.data = `<img class="marker" src="/images/marker-${user}.svg" alt="counter" />`
    
    let listData = [cursor, ...Array.from(Array(6).keys()).map((_, idx)=>({ idx, data:''}))]
    $: { 
        if( listData.indexOf(cursor) !== index) {
            listData = listData.filter((el) => el !== cursor)
            listData.splice(index, 0, cursor)
        }
    }
</script>

<div class="selection">
    <ul bind:this={uList}>
        {#each listData as obj (obj.idx) }
            <li animate:flip={{duration:300}}>{@html obj.data}</li>
        {/each}
    </ul>
</div>

<style>
    .selection {
        --width: 615px;
        width: var(--width);
        height: 72px;
        position: absolute;
        left: calc(50% - (var(--width) / 2));
        top: -60px;
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
    .selection .marker {
        height: 30px;
        width: 26px;
        margin: auto;
    }
</style>
