<script lang="ts">
	import '$lib/styles/style.css';
	import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
	<title>test2user-aqil</title>
	<meta property="og:title" content="test2user-aqil" />
	<meta property="og:description" content="test2user's home page" />
	<meta property="og:url" content="https://test2user-aqil.github.io/" />
	<meta property="og:image" content="https://test2user-aqil.github.io/avatar1024.png" />
	<meta name="description" content="test2user's home page" />
</svelte:head>

<Hero />

<div class="container">
	<h2>Projects:</h2>
</div>

<style>
	.container {
		margin-top: 16px;
	}
</style>
