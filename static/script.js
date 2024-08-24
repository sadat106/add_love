document.addEventListener('DOMContentLoaded', (event) => {
    fetchLoveCount();
});

function addLove() {
    fetch('/add-love', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        updateCounter(data.count);
    })
    .catch(error => console.error('Error:', error));
}

function fetchLoveCount() {
    fetch('/get-love-count')
        .then(response => response.json())
        .then(data => {
            updateCounter(data.count);
        })
        .catch(error => console.error('Error:', error));
}

function updateCounter(count) {
    const counter = document.getElementById('counter');
    counter.textContent = `${count} Loves`;
}
