# NewsToday

## API Documentation

- **API Provider:** News API
- **API Documentation:** [News API Documentation](https://newsapi.org/docs/endpoints/top-headlines)

## Features

1. **Scrolling News Line**: Implemented a breaking news scroll line below the navbar, displaying the titles of news from the News API in a scrolling manner using CSS animation and transformation properties.

2. **Logo Integration**: Included a logo for the website: **NewsToday** to enhance branding and visual appeal.

3. **Latest News on Homepage**: Integrated functionality to reflect the latest news on the homepage of the website, providing users with up-to-date information.

4. **Category-based Navigation**: Added a navbar with menu items like Technology, Business, Health, Sports, and Entertainment. Clicking on these menu items dynamically loads and displays the latest news for the selected category.

5. **News Card Layout**: Designed a card layout for each news item, featuring:
   - **Image**: Displayed an image related to the news article.
   - **Date**: Positioned the date of the news at the top right corner of the image.
   - **Source**: Provided the source of the news article.
   - **Title**: Presented the title of the news article.
   - **Description**: Included a brief description of the news.
   - **Read More Button**: Included a button to redirect users to the original website for further reading.

6. **Footer Component**
The Footer component (`Footer.js`) is responsible for displaying the footer section of the NewsToday website. It consists of three sections:

  - **About Us**: Provides a brief description of NewsToday and its commitment to delivering timely and accurate news updates.
  - **Follow Us**: Displays social media icons for Facebook, Twitter, Instagram, and LinkedIn, allowing users to follow NewsToday's social media profiles.
  - **Copyright**: Displays the copyright information for NewsToday, indicating that all rights are reserved for the year 2023.

      The Footer component enhances the user experience by providing additional information about NewsToday and offering links to its social media profiles for further engagement.


## Technical Details

- **Frontend Framework**: Utilized a modern frontend framework or library (React, Angular, Vue, etc.) for building the news website.
- **Data Fetching**: Fetched data from the News API using asynchronous requests, such as `fetch` or Axios.
- **Styling**: Leveraged CSS animation and transformation properties to create the scrolling news line and achieve an appealing layout for the news cards.
- **API Integration**: Integrated the News API to dynamically fetch and display news articles based on selected categories.

## Error Handling

To ensure a smooth user experience, error handling has been implemented for cases where the API request fails. If there are any issues fetching the headlines, a user-friendly message will be displayed to alert the user. This message will provide guidance on what might have gone wrong and encourage the user to try again later.

The error handling mechanism is designed to catch network errors or any unexpected responses from the API. In case of an error, the application will gracefully handle the situation and prevent it from affecting the overall functionality of the news board.

The implementation of error handling ensures that users are informed about the issue without disrupting their browsing experience. This feature contributes to the usability and reliability of the NewsToday website.

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/newswebsite.git
   cd newswebsite

2. Install dependencies (for frontend and backend, if applicable):
   ```sh
   npm install
   # or
   yarn install
   ```

3. Obtain an API key from News API and create a `.env` file in the root directory with the following content:
   ```env
   REACT_APP_NEWS_API_KEY=your_api_key_here
   ```

4. Run the application:
   ```sh
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Dependencies

- React 
- Axios 
- Node.js
- Bootstrap
- font-awesome-icons from cdnjs



