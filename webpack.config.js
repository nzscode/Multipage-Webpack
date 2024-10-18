const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const pages = ["index", "page1", "page2"];

module.exports = {
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.js`;
        return config;
    }, {}),

    plugins: [].concat(
        pages.map(
            (page) =>
                new HtmlWebpackPlugin({
                    inject: true,
                    scriptLoading: "blocking",
                    template: `/src/${page}.html`,
                    filename: `${page}.html`,
                    chunks: [page],
                })
        )
    ),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
