<div class="hero">
	<img src="/hero.jpg" alt="Hero img" />
	<h1>test2user-aqil</h1>
</div>

<style>
	/**
	 * Hero
	 */

	.hero {
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.hero h1 {
		display: flex;
		align-items: center;
		justify-content: center;

		filter: drop-shadow(var(--drop-shadow-1));
	}
	.hero img {
		position: fixed;
		background: url('/hero.jpg');
		width: 100%;
		height: 300px;
		object-fit: cover;

		filter: brightness(0.6);
	}
</style>
