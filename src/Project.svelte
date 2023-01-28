<script lang="ts">
	export let title: string;
	export let descripton = '';
	export let link: string;
</script>

<a href={link} target="_blank" rel="noreferrer">
	<h2>{title}</h2>
	<p>{descripton}</p>
</a>

<style>
	a {
		background: #16171f;
		border: 2px solid rgb(34, 37, 48);
		border-radius: 1rem;
		padding: 2rem 5rem;
		width: 20rem;
		transition: 0.2s ease-in-out;
		text-decoration: none;
	}
	a:hover {
		border: 2px solid rgb(51, 54, 68);
	}

	p,
	h2 {
		font-family: 'Roboto Mono', monospace;
	}
	h2 {
		text-decoration: underline;
	}
	a p {
		margin: 1rem 0 0 0;
	}
</style>
