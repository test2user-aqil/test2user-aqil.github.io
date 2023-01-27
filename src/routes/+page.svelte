<script lang="ts">
	import Link from '../Link.svelte';
	import './style.css';

	import github from '../icons/github-mark-white.svg';
</script>

<svelte:head>
	<title>test2user-aqil</title>
</svelte:head>

<div class="container">
	<img src="/avatar1024.png" alt="Avatar" class="avatar" />

	<h1>test2user-aqil</h1>

	<Link link="https://github.com/test2user-aqil" src={github} text="GitHub" />
</div>

<style>
	.container {
		height: 85vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
	.avatar {
		height: 200px;
		width: 200px;
		border-radius: 100%;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	}
</style>
