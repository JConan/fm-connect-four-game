<script>
    import BarButton from "./BarButton.svelte";
</script>

<BarButton color="yellow" action="back" >
    <div>
        <span>PLAY VS PLAYER</span>
        <img
            height="46px"
            src="/images/player-vs-player.svg"
            alt="play vs player"
        />
    </div>
</BarButton>

<style>
    div {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
</style>
