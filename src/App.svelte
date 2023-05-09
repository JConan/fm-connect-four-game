<script>
  import "./index.css";
  import Router, { push } from "svelte-spa-router";
  import Rules from "./lib/Rules.svelte";
  import Home from "./lib/Home.svelte";
  import PlayVsPlayer from "./lib/PlayVsPlayer.svelte";
</script>

<Router
  routes={{
    "/": Home,
    "/rules": Rules,
    "/play/vsplayer": PlayVsPlayer,
  }}
/>
