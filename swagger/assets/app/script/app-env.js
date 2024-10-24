(function () {

    const domains = [];

    window.env = {

        addDevDomain(domain) {
            domains.push(domain);
        },

        isDev() {
            return true;
            return domains.includes(location.host);
        },

        getTimestamp() {
            let time = new Date();
            return time.getTime();
        },
    };

})();
