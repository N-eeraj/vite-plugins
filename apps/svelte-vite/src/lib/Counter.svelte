<script lang="ts">
  let count: number = $state(0)
  const increment = () => {
    count += 1
  }
</script>

<button data-test="STATIC-DATA-TEST" data-cy={"DYNAMIC-DATA-CY"} aria-label="ARIA-LABEL" onclick={increment}>
  count is {count}
</button>
