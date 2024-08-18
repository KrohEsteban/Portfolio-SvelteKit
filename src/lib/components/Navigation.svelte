<script>
    import { onMount } from 'svelte';
    import contact from '$lib/data/contact.json';

    let menu = false;
    let entro = false;

    onMount(() => {
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
        if (menu) {
            menu = false;
        }
        });
    }
    });

    const toggleMenu = () => {
    entro = true;
    menu = !menu;
    };
</script>

<div class="py-2 bg-gris-intermedio">
    <nav class="md:flex md:justify-around relative">
    <div class="flex items-center justify-around">
        <a class="text-4xl text-inherit" href="/">
        <span class="font-dancing_script">Esteban Kroh</span>
        </a>
        <button
            class="flex justify-center h-10 w-10 md:hidden aria-expanded:toggle-btn"
            aria-label="Menu"
            type="button"
            aria-controls="menu"
            aria-expanded={menu}
            on:click={toggleMenu}
        >
        <div
            class="absolute top-6 -mt-0.5 h-0.5 w-6 rounded bg-white transition-all duration-500 before:absolute before:h-0.5 before:w-6 before:-translate-x-3 before:-translate-y-2 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-6 after:-translate-x-3 after:translate-y-2 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"
        ></div>
        </button>
    </div>

    <div
        class={entro
        ? menu
            ? "z-50 w-full md:h-auto bg-gris-intermedio bg-opacity-60 absolute top-14 md:w-auto md:static flex flex-col justify-center items-center animate-open-menu origin-top"
            : "z-50 w-full md:h-auto bg-gris-intermedio bg-opacity-60 absolute top-14 md:w-auto md:static flex flex-col justify-center items-center animate-close-menu origin-top md:animate-open-menu"
        : "hidden md:flex"
        }
        id="menu"
    >
        <ul class="w-3/4 md:w-auto bg-gris-intermedio bg-opacity-80 md:bg-inherit md:flex text-base md:text-gray-400 space-y-2 space-x-0 md:space-y-0 md:space-x-2">
        <li>
            <a
            href="/"
            class="flex justify-end md:w-auto border-b md:border border-gris-oscuro shadow-md shadow-amarillo md:border-y-transparent md:hover:bg-gris-oscuro md:hover:border-y-gray-500 p-6 md:py-4 text-inherit"
            on:click={toggleMenu}
            >
            Inicio
            </a>
        </li>
        <li>
            <a
            href="/blog"
            class="flex justify-end md:w-auto border-b md:border border-gris-oscuro shadow-md shadow-amarillo md:border-y-transparent md:hover:bg-gris-oscuro md:hover:border-y-gray-500 p-6 md:py-4 text-inherit"
            on:click={toggleMenu}
            >
            Blog
            </a>
        </li>
        <li>
            <a
            href="/aptitudes"
            class="flex justify-end md:w-auto border-b md:border border-gris-oscuro shadow-md shadow-amarillo md:border-y-transparent md:hover:bg-gris-oscuro md:hover:border-y-gray-500 p-6 md:py-4 text-inherit"
            on:click={toggleMenu}
            >
            Aptitudes
            </a>
        </li>
        <li>
            <a
            href="/proyectos"
            class="flex justify-end md:w-auto border-b md:border border-gris-oscuro shadow-md shadow-amarillo md:border-y-transparent md:hover:bg-gris-oscuro md:hover:border-y-gray-500 p-6 md:py-4 text-inherit"
            on:click={toggleMenu}
            >
            Proyectos
            </a>
        </li>
        <li>
                <a
                href="/hobby"
                class="flex justify-end md:w-auto border-b md:border border-gris-oscuro
                    shadow-md shadow-amarillo md:border-y-transparent md:hover:bg-gris-oscuro
                    md:hover:border-y-gray-500 p-6 md:py-4 text-inherit"
                on:click={toggleMenu}
                >
            Hobby
            </a>
        </li>
        </ul>
        <ul class="flex justify-center space-x-6 md:hidden py-10">
            {#each contact.docs as item}
                <li class="w-10 sm:w-11 md:w-12" key={item.Nombre}>
                <a
                    class="stroke-none text-amarillo p-4 m-auto"
                    href={item.Url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.Nombre}
                >
                {@html item.Svg}
                </a>
                </li>
            {/each}
        </ul>
    </div>
    </nav>
</div>
