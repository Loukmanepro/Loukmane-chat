<div class="container">
    <h1>AI Question Answering</h1>
    <input type="text" id="question" placeholder="Type your question here...">
    <button onclick="getAnswer()">Get Answer</button>
    <div class="response" id="response"></div>
</div>

<script>
    async function getAnswer() {
        const question = document.getElementById('question').value;
        const responseDiv = document.getElementById('response');

        if (!question) {
            responseDiv.innerHTML = "Please enter a question.";
            return;
        }

        const apiKey = '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'; // Replace with your actual API key
        const apiUrl = 'https://api.open ai.com/answer'; // Replace with your actual API endpoint

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({ question })
            });

            const data = await response.json();
            responseDiv.innerHTML = data.answer || "No answer found.";
        } catch (error) {
            responseDiv.innerHTML = "Error fetching answer. Please try again.";
            console.error('Error:', error);
        }
    }
</script>

</body>
</html>
                
