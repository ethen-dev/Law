const hotClient =
    require('webpack-hot-middleware/client?noInfo=true&reload=true');

hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        console.log('Reloading')
        window.location.reload()
    }
});