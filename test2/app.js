
function extractNumbers(str) {
    return str.match(/\d+/g).map(Number);
}

console.log(extractNumbers("a1fg5hj6")); // [1, 5, 6]

function fibonacciWithDelay(prev = 0, current = 1) {
    if (current > 144) return;
    console.log(current);
    setTimeout(() => fibonacciWithDelay(current, prev + current), 1000);
}

fibonacciWithDelay();

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        data.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

fetchProducts();

const colors =  document.getElementById('color-buttons').addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            document.body.style.backgroundColor = event.target.textContent;
        }
    });

const toogleButton = document.getElementById('toggleButton').addEventListener('click', function() {
        const block = document.getElementById('block');
        if (block.style.display === 'none') {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });

let count = 0;
    const interval = setInterval(() => {
        if (count >= 100) {
            clearInterval(interval);
        } else {
            count++;
            document.getElementById('counter').textContent = count;
        }
    }, 1);

async function fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

const fetchButton = document.getElementById('fetchButton').addEventListener('click', fetchData);

