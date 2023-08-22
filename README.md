# Event Delegation for Button Clicks

When dealing with multiple buttons within a parent element, using event delegation can bring several advantages:

- **Memory Efficiency:** Attaching a single event listener to the parent element consumes less memory compared to attaching listeners to each individual button.

- **Performance:** Event delegation can enhance performance, especially in scenarios involving dynamically generated buttons or complex web pages.

- **Dynamic Elements:** Newly added buttons (dynamically created) automatically inherit the event handling logic of the parent's listener.

- **Code Simplicity:** Event delegation centralizes event handling, reducing code complexity and simplifying maintenance.
