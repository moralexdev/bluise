module.exports = function(eleventyConfig) {
    // Copy the `img/` directory
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("main.css");

    return {
        passthroughFileCopy: true
    };
};
