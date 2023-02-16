module.exports = {
    target: 'node',
    resolve: {
        fallback: { 
            "process": require.resolve("process/browser"),
            zlib: false,
            stream: false,
            path: false,
        }
    }
}