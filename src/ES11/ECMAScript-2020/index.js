const button = document.getElementById('btn');

button.addEventListener
(
    'click', 
    async function () {
        const module = await import('./file.mjs');
        module.hello();
    }
);