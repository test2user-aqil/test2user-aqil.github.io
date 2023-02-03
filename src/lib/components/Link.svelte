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
		padding: 0.8rem 2rem;
		border-radius: 0.5rem;
		background: linear-gradient(90deg, #4040b1 0%, #40406c 100%);
		gap: 0.5rem;
		text-decoration: none;
		transition: 0.3s ease-in-out;
	}
	a:hover {
		filter: brightness(1.2);
	}
	a img {
		width: 1.2rem;
		height: 1.2rem;
	}
</style>
