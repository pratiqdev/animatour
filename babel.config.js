module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "entry",
                corejs: { version: 3, proposals: true }
            }
        ], 
        "@babel/preset-react"],
    plugins: [
        "@babel/plugin-syntax-jsx", 
        '@babel/plugin-syntax-dynamic-import'
    ]
}
