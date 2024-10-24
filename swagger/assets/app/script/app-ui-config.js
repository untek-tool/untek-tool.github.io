(function () {

    window.uiConfig = {
        dom_id: '#swagger-ui',
        url: "source/index.yaml",
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
        ],
        requestInterceptor: function (request) {
            if (request.loadSpec) {
                return request;
            }
            request.headers['Language'] = 'ru';
            return window.client.prepareRequest(request);
        },
        plugins: [
            SwaggerUIBundle.plugins['DownloadUrl']
        ],
        layout: "StandaloneLayout",
        docExpansion: "none",
        deepLinking: true,
        filter: true,
        persistAuthorization: "false",
    };

    // это для Docker-контейнера
    env.addDevDomain('127.0.0.1:8080');

    // if (env.isDev()) {
        window.uiConfig.url = window.uiConfig.url + '?hash=' + env.getTimestamp();
    // }

})();
