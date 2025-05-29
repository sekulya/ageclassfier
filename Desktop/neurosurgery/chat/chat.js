// Get the necessary elements
const chatBody = document.getElementById('chat-body');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Function to create and append a new message to the chat body
function appendMessage(sender, content) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');

  const senderElement = document.createElement('div');
  senderElement.classList.add('message-sender');
  senderElement.textContent = sender;

  const contentElement = document.createElement('div');
  contentElement.classList.add('message-content');
  contentElement.textContent = content;

  messageElement.appendChild(senderElement);
  messageElement.appendChild(contentElement);

  chatBody.appendChild(messageElement);
}

// Event listener for the send button
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message.trim() !== '') {
    appendMessage('You', message);
    messageInput.value = '';
  }
});

// Event listener for pressing Enter in the input field
messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent line break
    sendButton.click(); // Simulate a click on the send button
  }
});

// Example: Add a few initial messages
appendMessage('John', 'Hello!');
appendMessage('Jane', 'Hi there!');
