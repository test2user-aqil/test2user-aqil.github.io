<script lang="ts">
	export let title: string;
	export let descripton = '';
	export let link: string;
</script>

<div>
	<h2>
		<a href={link} target="_blank" rel="noreferrer">
			{title}
		</a>
	</h2>
	<p>{descripton}</p>
</div>

<style>
	div {
		background: #16171f;
		border: 2px solid rgb(34, 37, 48);
		border-radius: 1rem;
		padding: 2rem 5rem;
		width: 20rem;
	}
	h2,
	p {
		font-family: 'Roboto Mono', monospace;
	}
	p {
		margin: 1rem 0 0 0;
	}
</style>
