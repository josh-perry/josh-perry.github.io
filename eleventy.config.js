import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import Prism from "prismjs";
import loadLanguages from 'prismjs/components/index.js';
import markdownIt from "markdown-it";

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('bundle.css')
    eleventyConfig.addPassthroughCopy("assets/")

    // add rel="external" to external links for the svg icon
    eleventyConfig.addTransform("external-links", (content, outputPath) => {
        if (!outputPath || !outputPath.endsWith(".html")) {
            return content;
        }

        const relRegex = /\brel=(['"])(.*?)\1/i;

        return content.replace(
            /<a\b([^>]*?)\bhref=(['"])(https?:\/\/[^'">\s]+)\2([^>]*)>/gi,
            (match) => {
                if (relRegex.test(match)) {
                    return match.replace(relRegex, (relMatch, quote, relValue) => {
                        const parts = relValue.split(/\s+/).filter(Boolean);

                        if (parts.includes("external")) {
                            return relMatch;
                        }

                        parts.push("external");
                        return `rel=${quote}${parts.join(" ")}${quote}`;
                    });
                }

                return match.replace(/>$/, ' rel="external">');
            }
        );
    });

    eleventyConfig.addFilter("dateDisplay", (dateObj) => {
        return `${dateObj.getDate()} ${dateObj.toLocaleString('en', { month: 'long' })} ${dateObj.getFullYear()}`
    })

    const markdownLibrary = markdownIt({
        html: true,
        highlight: (code, lang) => {
            if (!lang) {
                return code;
            }

            if (!Object.hasOwn(Prism.languages, lang)) {
                loadLanguages([lang]);
            }

            return Prism.highlight(code, Prism.languages[lang], lang);
        },
    });

    eleventyConfig.setLibrary("md", markdownLibrary);
}