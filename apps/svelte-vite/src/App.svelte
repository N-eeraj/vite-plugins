<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'

console.log("")
const x = 4
console.log(x)


  console.log("hi log")
       console.warn("warning!!")   ;
  console.error(`ERROR`);
  console.info('i_n_f_o')
  const obj = {rowA: 1, rowB: 2}   ; console.table(obj);
</script>

<main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1 data-test={"DYNAMIC-DATA-TEST"} aria-label="ARIA-LABEL">Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out
    <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer" data-cy="STATIC-DATA-CY" aria-label="ARIA-LABEL">SvelteKit</a>,
    the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs" data-cy={"DYNAMIC-DATA-CY"} aria-label="ARIA-LABEL">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
