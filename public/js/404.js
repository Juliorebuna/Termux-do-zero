document.addEventListener('DOMContentLoaded', () => {
    const backgrounds = [
        'https://telegra.ph/file/8e304d2aa7c987d13b495.jpg',
        'https://telegra.ph/file/796268469d1b0f841b71e.jpg',
        'https://telegra.ph/file/9377c2eca72ce695ee689.jpg'
    ];

    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.backgroundImage = `url(${randomBackground})`;

    // Exibir o popup automaticamente
    const popup = document.getElementById('popup');
    popup.classList.add('show');

    // Fechar o popup ao clicar no botão "Fechar"
    document.getElementById('closeButton').addEventListener('click', () => {
        popup.classList.remove('show');
    });
});
