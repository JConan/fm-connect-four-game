<script>
  import "./index.css";
  import Router, { push } from "svelte-spa-router";
  import Rules from "./lib/Rules.svelte";
  import Home from "./lib/Home.svelte";
</script>

<div class="routes">
  <Router
  routes={{
    "/": Home,
    "/rules": Rules,
  }}
/>
</div>
