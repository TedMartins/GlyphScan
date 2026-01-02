# GLYPH SCAN

## Diacritic Character Analysis Tool

The **GLYPH SCAN** tool is a minimalist, single-page web application designed for the precise analysis and counting of accented characters (diacritics) within any given text. Built with a clean, dark-mode aesthetic inspired by professional development and security tools, it offers a distraction-free environment for linguistic and technical text inspection.

### Features

The application provides three distinct outputs upon analysis:

1.  **Detailed Analysis:** A breakdown for each unique accented character found, showing its total count and a list of all words in which it appears, along with the word's specific occurrence count (e.g., `á (13): word (5x), other (8x)`).
2.  **Quick Metrics:** A statistics panel displaying the total number of accents, the count of unique accented characters, and the total number of words analyzed.
3.  **Character List:** A clean, space-separated list of all unique accented characters identified, positioned prominently below the action buttons for quick reference.

### Usage

The tool can be used online, requiring no external dependencies or server-side processing.

1.  **Access the Deployed Page:** Navigate to the live application at: [DEPLOY URL]
2.  **Input Text:** Paste the text you wish to analyze into the **Input** text area.
3.  **Analyze:** Click the **Analyze** button or use the keyboard shortcut `Ctrl + Enter` to process the text.


The results will be displayed immediately in the **Analysis** panel and the **Characters Identified** section will become visible.

### Technical Notes

The core logic is implemented in JavaScript, utilizing regular expressions to accurately identify a broad range of diacritical marks common in Latin-based languages (e.g., Portuguese, French, Spanish). The word separation logic is robust, handling various punctuation marks and line breaks to ensure accurate word-level counting.

| Component | Technology | Style |
| :--- | :--- | :--- |
| Interface | HTML5, CSS3 | Minimalist, Dark Mode |
| Logic | Vanilla JavaScript | Client-Side Processing |
| Naming Convention | Technical, Minimalist | GLYPH SCAN |


### License

This project is licensed under the MIT License.

Copyright (c) 2026 - Ted Martins

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
