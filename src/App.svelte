<script>
  import "./app.css";
  import { state } from "./lib/Stores/Navigation";
  import { fly } from "svelte/transition";
  import Main from "$lib/Screens/Main.svelte";
  import Rules from "$lib/Screens/Rules.svelte";


  const screens = {
    menu: Main,
    rules: Rules,
  };
  const speed= 300;
  $: screen = screens[$state.value];
</script>

{#key screen}
  <div in:fly={{ y: -500, duration: speed, delay: speed }} out:fly={{ y: -500, duration: speed }} >
    <svelte:component this={screen} />
  </div>
{/key}
