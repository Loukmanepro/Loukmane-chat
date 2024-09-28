const apiKey = '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'; // ضع مفتاح OpenAI API هنا

async function sendMessage() {
    const message = document.getElementById('userMessage').value;
    if (message === '') return;

    addMessageToChat('User', message);
    document.getElementById('userMessage').value = '';

    const response = await getAIResponse(message);
    addMessageToChat('AI', response);
}

function addMessageToChat(sender, message) {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}

async function getAIResponse(message) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-4', // يمكنك استخدام gpt-3.5-turbo أو gpt-4
            messages: [{role: 'user', content: message}],
            max_tokens: 100
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}
