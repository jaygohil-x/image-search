# Image Search Engine

This is a web-based image search engine that allows users to search and download images quickly using the Unsplash API. The application is designed to be intuitive, responsive, and visually appealing.

## Features

- **Search Functionality**: Search for images by entering keywords.
- **Image Gallery**: Displays search results in a dynamic and visually appealing grid.
- **Download Images**: Directly download images with a single click.
- **Load More**: View additional results with a "Load More" button.
- **Responsive Design**: Optimized for various screen sizes.

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS**: Styling and layout design.
- **JavaScript**: Interactivity and API integration.
- **Unsplash API**: Fetches high-quality images for search results.

## How It Works

1. **Search Images**: Users enter a keyword in the search bar and press Enter or click the search button.
2. **Fetch Results**: The application fetches image collections from the Unsplash API based on the entered keyword.
3. **Display Results**: Results are displayed in a grid with options to download individual images.
4. **Load More**: Additional results can be fetched and displayed by clicking the "Load More" button.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jaygohil-x/image-search
   ```

2. Open the `index.html` file in a browser to view the application.

3. Replace the placeholder in the JavaScript file (`script.js`) with your Unsplash API access key:
   ```javascript
   const accessKey = "YOUR_ACCESS_KEY";
   ```

4. Ensure internet access to load resources from the Unsplash API.

## Files in the Project

- `index.html`: Contains the structure of the application.
- `style.css`: Defines the styles for the layout and responsiveness.
- `script.js`: Handles interactivity, API calls, and data display.

## License

This project is open-source and available under the [MIT License](LICENSE).
