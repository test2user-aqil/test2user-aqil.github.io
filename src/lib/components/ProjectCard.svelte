<script lang="ts">
	export let title: string;
	export let descripton = '';
	export let link: string;
</script>

<a href={link} target="_blank" rel="noreferrer">
	<h3>{title}</h3>
	<p>{descripton}</p>
</a>

<style>
	a {
		display: flex;
		flex-direction: column;
		gap: 8px;
		background: var(--dark-1);
		border: 2px solid var(--accent-1-muted);
		border-radius: 16px;
		padding: 16px 48px;
		width: 100%;
		transition: 0.2s ease-in-out;
		text-decoration: none;
	}

	a:hover {
		transform: scale(1.01);
	}
</style>
