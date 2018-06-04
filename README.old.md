# React Photo Search

## Directions

Build a single-page application that will display images in a gallery-style format like Instagram. Users will be able to search for and view images. Use an image API (two options are suggested in the Resources section) for your images and data. In order to secure your API credentials, [use the built-in support for environment variables](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables) and make sure you do not commit your `.env` file.

Your application should have the following features:

- Users can search for images by categories or keywords
- Search results are displayed by thumbnail images
- Clicking on an image expands it to a larger-sized image (if available) and shows more detail about that image.

You'll need to read the API documentation to understand what data you will be able to request. You should be able to get all the data you need with a single API request.

### Things to consider

- Wireframe your design before you start building and plan the components you will have. You may want to start with one big component that you then break down into more modular ones.
- Your design should be visually pleasing -- it doesn't have to be award-winning but it should look like you intentionally styled it.
- How will you handle the situation when no data is returned (for instance, a search term returns no results)?
- How will you handle server errors (i.e., 4xx or 5xx responses)?

### Bonus steps

- If using the Unsplash API, allow users to log in and like/unlike photos. This will likely be 2+ hours of work.

## Resources

- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- [Unsplash API](https://unsplash.com/developers)
- [Pixabay API](https://pixabay.com/api/docs/)
