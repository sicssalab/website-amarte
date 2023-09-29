module.exports = {
    presets: [
        // "@babel/env",
        // "@babel/react"
        "@babel/preset-react",
        "@babel/preset-env"
    ],
    plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-async-to-generator",
        "@babel/transform-arrow-functions",
        "@babel/proposal-object-rest-spread",
        "@babel/proposal-class-properties",
        "@babel/plugin-syntax-jsx"
    ]
}