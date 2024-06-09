module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img")
    eleventyConfig.addPassthroughCopy("css/fonts")
    eleventyConfig.addPassthroughCopy("/content/bundle.css");
};
