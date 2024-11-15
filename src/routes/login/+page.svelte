<script lang="ts">
	import type { PageData } from './$types.js';
	import LoginForm from '../../lib/sections/account/login-form.svelte';
	export let data: PageData;
</script>

<LoginForm data={data.form} />
