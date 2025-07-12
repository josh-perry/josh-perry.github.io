import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('bundle.css')
    eleventyConfig.addPassthroughCopy("assets/")

    eleventyConfig.addFilter("dateDisplay", (dateObj) => {
        return `${dateObj.getDate()} ${dateObj.toLocaleString('en', { month: 'long' })} ${dateObj.getFullYear()}`
    })
}