module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img")
    eleventyConfig.addPassthroughCopy("css/fonts")
    eleventyConfig.addPassthroughCopy("./content/src/css/style.css");
    eleventyConfig.addWatchTarget("./content/src/css/style.css");

    return{

    dir:{

    input: "src",
    output: "public",
    },
};
};
   