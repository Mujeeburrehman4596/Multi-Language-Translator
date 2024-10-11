
    const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY';  // Replace with your actual Google Cloud API key

    async function translateText() {
        const inputText = document.getElementById('inputText').value.trim();
        const targetLanguage = document.getElementById('languageSelect').value;

        if (!inputText) {
            document.getElementById('translatedText').textContent = "Please enter some text to translate.";
            return;
        }

        const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
        const data = {
            q: inputText,
            target: targetLanguage,
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            const translatedText = result.data.translations[0].translatedText;
            document.getElementById('translatedText').textContent = translatedText;
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('translatedText').textContent = "Error in translation.";
        }
    }
