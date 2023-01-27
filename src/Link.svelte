<script lang="ts">
	export let link: string;
	export let text: string;
	export let src: string;
</script>

<a href={link} target="_blank" rel="noreferrer">
	<img {src} alt="" />
	{text}
</a>

<style>
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.1rem 3.2rem;
		border-radius: 1rem;
		background: linear-gradient(90deg, #4040b1 0%, #40406c 100%);
		gap: 0.5rem;
		text-decoration: none;
		transition: 0.3s ease-in-out all;
	}
	a:hover {
		filter: brightness(1.2);
	}
	a img {
		width: 1.5rem;
		height: 1.5rem;
	}
</style>
