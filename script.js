// Function to switch from screen1 to screen2 with fade effect
function showScreen2() {
  var screen1 = document.getElementById('screen1');
  var screen2 = document.getElementById('screen2');

  // Add hidden class to screen1 to start fade-out
  screen1.classList.remove('visible');
  screen1.classList.add('hidden');

  // After the transition duration, hide screen1 and show screen2
  setTimeout(function() {
    screen1.style.display = 'none';
    screen2.style.display = 'block';

    // Add visible class to screen2 to start fade-in
    screen2.classList.remove('hidden');
    screen2.classList.add('visible');
  }, 500); // Match the timeout duration to the CSS transition duration
}

function getName() {
  var nameInput = document.getElementById('name');
  var username = nameInput.value.trim(); // trim to remove any extra spaces

  if (username === "") {
    // Avoid empty name
    alert("Please enter your name.");
  } else {
    console.log(username);

    var nameGreeting = document.getElementById('greeting');
    nameGreeting.innerHTML = 'Hello, ' + username + '!';

    // Switch to screen2 with fade effect
    showScreen2();
  }
}


// update every minute
setInterval(updateTime, 1000);

// create a function to update the date and time
function updateTime() {
  // create a new `Date` object
  const now = new Date();

  // get the current date and time as a string
  const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

  // update with the time
document.querySelector('#datetime').textContent = currentTime;
}

//get focus
var focusAsk = document.getElementById('focusAsk');
var focusInput = document.getElementById('focusInput');
var focusAns = document.getElementById('focusAnswered');
var focusDisplay = document.getElementById('focusDisplay');
var todoInput = document.getElementById('todo-input');

//gets value of input
function getFocus() {
  focus = focusInput.value;
  console.log(focus);

  // Update the text content of the focus display
  focusDisplay.innerHTML = focus;

  // Hide the original input and its prompt
  focusAsk.style.display = 'none';
  focusInput.style.display = 'none';

  // Show the new elements
  focusAns.style.display = 'block';
  focusDisplay.style.display = 'block';
  todoInput.style.display = 'block';
}

// Add a new task
function addTask() {
  const taskText = todoInput.value.trim();
  
  //if not empty
  if (taskText !== "") {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');

    //create to-do + set-up option to remove
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="todo-remove" onclick="removeTask(this)">✕</button>
    `;

    //add a function to listen for completion
    li.addEventListener('click', function() {
      this.classList.toggle('completed');
    });

    todoList.appendChild(li);
    todoInput.value = ""; //clear input
  } else {
    alert('Please enter a task.');
  }
}

// Function: to remove a task
function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}

// Add task on enter key press
document.getElementById('todo-input').addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    addTask();
  }
});

//calls getFocus function on enter
focusInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    getFocus();
  }
});

var quotes = [
  { quote: "What is infinite? The universe and the greed of men.", author: "Leigh Bardugo" },
  { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { quote: "I am not afraid of storms, for I am learning how to sail my ship.", author: "Louisa May Alcott" }
];

//floor to get a quote from quotes[]
function displayRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];

  document.getElementById('quoteText').innerText = `"${randomQuote.quote}"`;
  document.getElementById('quoteAuthor').innerText = randomQuote.author;
}
//call the function
displayRandomQuote();

//The toggle to overlay quote entry over the quotes
function showQuoteInputs() {
  document.getElementById('quoteText').style.display = 'none';
  document.getElementById('quoteAuthor').style.display = 'none';
  document.getElementById('quote-input').style.display = 'block';
  document.getElementById('author-input').style.display = 'block';
}

//Add a new quote
function addQuote() {
  var quoteInput = document.getElementById('quote-input');
  var authorInput = document.getElementById('author-input');

  var quoteText = quoteInput.value;
  var quoteAuthor = authorInput.value;
  //if not blank
  if (quoteText !== "" && quoteAuthor !== "") {
    quotes.push({ quote: quoteText, author: quoteAuthor });
    quoteInput.value = ""; // clear the input
    authorInput.value = ""; // clear the input

    document.getElementById('quoteText').innerText = `"${quoteText}"`;
    document.getElementById('quoteAuthor').innerText = quoteAuthor;

    // Hide input fields and show the new quote
    document.getElementById('quoteText').style.display = 'block';
    document.getElementById('quoteAuthor').style.display = 'block';
    document.getElementById('quote-input').style.display = 'none';
    document.getElementById('author-input').style.display = 'none';

  } else {
    alert('Please enter both a quote and an author.');
  }
}

//adds quote on enter key hit
document.getElementById('quote-input').addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addQuote();
  }
});
//adds quote on enter key hit (for author)
document.getElementById('author-input').addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addQuote();
  }
});

