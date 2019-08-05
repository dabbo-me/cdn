if ('serviceWorker' in navigator) {

    var subscriptionId;
    navigator.serviceWorker.register('service-worker.js').then(function(reg) {
        navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
            // Demande d'inscription au Push Server (1)
            return serviceWorkerRegistration.pushManager.subscribe({
                userVisibleOnly: true
            });
        }).then(function(subscription) {

            subscriptionId = subscription.endpoint.split('/');
            subscriptionId = subscriptionId[subscriptionId.length - 1];
            $.post('app/actions/update_registration_ids.php', {
                registration_ids: subscriptionId
            }, function(data) {}, 'json');

        }).catch(function(subscriptionErr) {
            // Check for a permission prompt issue
            // console.log('Subscription failed ' + subscriptionErr);
        });

    }).catch(function(error) {
        // registration failed
        // console.log('Registration failed with ' + error);
    });
}