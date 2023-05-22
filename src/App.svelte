<script>
  import "./app.css";
  import { state } from "./lib/Stores/Navigation";
  import Main from "$lib/Screens/Main.svelte";
  import Rules from "$lib/Screens/Rules.svelte";

  const screens = {
    menu: Main,
    rules: Rules,
  };
  $: screen = screens[$state.value];
</script>

<svelte:component this={screen} />
