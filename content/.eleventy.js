module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img")
    eleventyConfig.addPassthroughCopy("css/fonts")
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");

    return{

    dir:{

    input: "src",
    output: "public",
    },
};
};
   