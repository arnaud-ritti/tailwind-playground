import postcss from 'rollup-plugin-postcss'

export default {
    plugins: [
        postcss({
            minimize: true,
            modules: true,
            use: {
                sass: null,
                stylus: null,
            },
            extract: true
        }),
    ]
}
