<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';

	import Hello from './Hello.svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="Hello" layout={{ type: 'grid', width: 500 }}>
	<Hst.Variant title="Default">
		<Hello />
	</Hst.Variant>
</Hst.Story>
