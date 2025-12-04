module.exports = function (eleventyConfig) {
  // Passthrough for typical asset directory (optional)
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Create devlog collection
  eleventyConfig.addCollection("devlog", function(collection) {
    return collection
      .getFilteredByGlob("src/devlog/posts/*.md")
      .sort((a, b) => b.data.date.localeCompare(a.data.date));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    passthroughFileCopy: true,
    templateFormats: ["html", "md", "njk", "11ty.js"],
    // Disable processing of raw HTML files by a template engine so
    // files like `index.html` containing inline JSX/JS aren't parsed
    // by Nunjucks. Eleventy will still process `.njk` and other
    // specified template formats.
    htmlTemplateEngine: false
  };
};
