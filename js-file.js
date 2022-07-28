const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p')
paragraph.textContent = "Hey I'm red!"

container.appendChild(paragraph)
paragraph.style.cssText = "color: red;"

const h3 = document.createElement('h3')
h3.textContent = "I'm a blue h3!"
container.appendChild(h3)
h3.style.cssText = "color: blue;"

const div = document.createElement('div')
const h1 = document.createElement('h1')
const p = document.createElement('p')

div.appendChild(h1)
div.appendChild(p)

container.appendChild(div)

div.style.cssText = "background-color: pink; border-style: solid;"


h1.textContent = "I'm in a div"
p.textContent = "ME TOO"

const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert("Hello World");

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

/*btn3.addEventListener('click', () => {
  alert("Hello World");
}); */