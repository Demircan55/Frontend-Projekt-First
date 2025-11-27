console.log("Das Skript wurde geladen!");

// Eine kleine Interaktion: Wenn man auf die Überschrift klickt, ändert sich der Text.
document.querySelector('h1').addEventListener('click', () => {
    alert('Du hast auf die Überschrift geklickt!');
});
