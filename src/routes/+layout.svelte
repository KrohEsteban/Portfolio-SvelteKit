<script>
	import '../app.css';
	import layout from '$lib/data/layout.json';
	import { onMount } from 'svelte';

	const currentYear = new Date().getFullYear();
	let { children } = $props();
	let menu = $state(false);

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => {
				if (menu) {
					menu = false;
				}
			});
		}
	});

	const toggleMenu = () => {
		menu = !menu;
		if (menu) {
			openMenu();
			closeMenu();
		}
	};

	const openMenu = () => {
		document.querySelectorAll('.link').forEach((link) => link.classList.add('animate'));
	};

	const closeMenu = () => {
		setTimeout(() => {
			document.querySelectorAll('.link').forEach((link) => link.classList.remove('animate'));
		}, 1000);
	};
</script>

<svelte:head>
	<title>{layout.title}</title>
	<meta name="theme-color" content="#ffd700" />
	<meta name="referrer" content="origin-when-cross-origin" />
	<link rel="icon" href="/favicon.svg" />
	<link rel="apple-touch-icon" href="/favicon.svg" />
	<link rel="manifest" href="/manifest.json" />
</svelte:head>

<div class="py-2 bg-gris-intermedio">
	<nav class="relative flex justify-around items-center px-4 md:px-8">
		<a class="text-4xl text-inherit" href="/">
			<span class="font-DancingScript">{layout.name}</span>
		</a>
		<button
			class="h-10 w-10 focus:outline-none z-50"
			aria-label="Menu"
			aria-controls="menu"
			aria-expanded={menu}
			onclick={toggleMenu}
		>
			<div class="relative h-full w-full flex items-center justify-center">
				<div
					class="h-0.5 w-6 bg-white transition-transform duration-300"
					class:transform={menu}
					class:rotate-45={menu}
					class:translate-y-1.5={menu}
				></div>
				<div
					class="h-0.5 w-6 bg-white transition-transform duration-300"
					class:transform={menu}
					class:-rotate-45={menu}
					class:-translate-y-1.5={menu}
				></div>
			</div>
		</button>
	</nav>

	<div
		class={`fixed inset-0 bg-black bg-opacity-70 z-40 transform transition-transform duration-300
            ${menu ? 'translate-x-0' : '-translate-x-full'}
        `}
		id="menu"
	>
		<ul class="flex flex-col items-center justify-center min-h-screen space-y-6 text-white">
			<li><a href="/" onclick={toggleMenu} class="link">{layout.navigation.home}</a></li>
			<li><a href="/blog" onclick={toggleMenu} class="link">{layout.navigation.blog}</a></li>
			<li><a href="/curriculum" onclick={toggleMenu} class="link">{layout.navigation.curriculum}</a></li>
			<li><a href="/hobby" onclick={toggleMenu} class="link">{layout.navigation.hobby}</a></li>
		</ul>
	</div>
</div>

<main class="w-11/12 sm:w-5/6 max-w-4xl m-auto flex-row min-h-[85vh] text-justify">
	{@render children()}
</main>
<footer class="mt-auto">
	<nav class="flex-row sm:flex space-x-2 justify-center tracking-widest font-serif text-center p-4">
		<p class="pt-2">© {currentYear} · {layout.footer}</p>
		<a class="font-DancingScript text-2xl text-inherit" href="https://www.estebankroh.com"
			>{layout.name}</a
		>
	</nav>
</footer>

<style>
	.link {
		position: relative;
		color: white;
		text-decoration: none;
		padding: 0.5rem 1rem;
		font-size: 1.25rem;
	}

	.link::before,
	.link::after {
		content: '';
		position: absolute;
		background-color: #fbbf24;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.link::before {
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		transform: scaleX(0);
		transform-origin: left;
		box-shadow: 0px 4px 5px #fbbf24;
	}

	.link::after {
		left: 0;
		bottom: 0;
		width: 1px;
		height: 100%;
		transform: scaleY(0);
		transform-origin: bottom;
		box-shadow: -4px 0px 5px #fbbf24;
	}

	.link.animate::before,
	.link.animate::after {
		transform: scaleX(1);
		transform: scaleY(1);
	}

	.link:hover::before,
	.link:hover::after {
		transform: scaleX(1);
		transform: scaleY(1);
	}
</style>
