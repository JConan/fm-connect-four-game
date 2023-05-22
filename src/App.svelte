<script>
  import "./app.css";
  import Main from "$lib/Screens/Main.svelte";

  import { send, state } from './lib/Stores/Navigation'
</script>

<p>current navigation state: {$state.value}</p>

<Main />
