// Task 15.1 — JS দিয়ে element তৈরি
// 👉 JavaScript দিয়ে করো:
// •	একটি <div id="app"></div>
// •	এর ভেতরে:
// o	<h2> → text: "My Task List"
// o	<ul> (empty)
// Rules
// •	innerHTML ব্যবহার করবে না
// •	createElement, appendChild ব্যবহার করবে
// 💡 Hint:
// document.createElement()
// element.textContent =
// parent.appendChild()

// Task 15.2 — Input থেকে Dynamic List Add
// HTML এ যোগ করো:
// •	একটি input
// •	একটি button → Add Task
// 👉 Button click করলে:
// •	input এর value নিয়ে
// •	<li> তৈরি হবে
// •	<ul> এর ভেতরে add হবে
// •	input clear হবে
// ⚠️ Empty input হলে add হবে না

// Task 15.3 — Delete Button (per item)
// প্রতিটা <li> এর ভেতরে থাকবে:
// •	task text
// •	❌ delete button
// 👉 Delete button click করলে:
// •	শুধু ওই <li> remove হবে
// 💡 Hint:
// li.remove()

// Task 15.4 — Empty State Message
// যদি list empty থাকে:
// 👉 দেখাবে:
// "No tasks yet"
// যখন task add হবে:
// 👉 message hide হবে
// 🧠 Concept:
// •	condition check
// •	dynamic content update

// Task 15.5 — LocalStorage দিয়ে task save
// বা
// Enter key press এ task add
// দুটোর যেকোনো একটা দিতে পারি




// seclect body:
const body = document.body;

// create mainDiv:
const mainDiv = document.createElement("div");
mainDiv.id = "app";

// create h2:
const heading = document.createElement("h2");
heading.textContent = "My Task List";

// create ul:
const list = document.createElement("ul");

// create input:
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Add your list here...";

// create button:
const button = document.createElement("button");
button.textContent = "Add task";

// create message:
const emptyMessage = document.createElement("p");
emptyMessage.textContent = "No tasks yet";

// appendchild:
mainDiv.appendChild(heading);
mainDiv.appendChild(input);
mainDiv.appendChild(button);
mainDiv.appendChild(emptyMessage);
mainDiv.appendChild(list);
body.appendChild(mainDiv);

// text message show/hide:
function messageHideShow() {
    if (list.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

// button event:
button.addEventListener("click", function() {
    const inputValue = input.value.trim();

    // empty check:
    if (inputValue === "") {
        return;
    }

    // li create:
    const li = document.createElement("li");

    // create span:
    const span = document.createElement("span");
    span.textContent = inputValue;

    // create button:
    const deletBtn = document.createElement("button");
    deletBtn.textContent = "X";

    // appentchild:
    li.appendChild(span);
    li.appendChild(deletBtn);
    list.appendChild(li);
    messageHideShow();

    // li remove:
    deletBtn.addEventListener("click", function() {
        li.remove();
        messageHideShow();
    });

    // input clear:
    input.value = "";

});

