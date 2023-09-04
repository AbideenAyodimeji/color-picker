const colors = ['gray', 'blue', 'green', '#333']
const button = document.getElementById('button')
const color = document.querySelector('.color')

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}

button.addEventListener('click', function () {
  const randomNumber = getRandomNumber()

  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})
