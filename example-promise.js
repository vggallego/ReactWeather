function getTempCallback (location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback('Philadephia', function (err, temp) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});

function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
        resolve (79);
        reject('City not found')
    });
}

getTempPromise('Philadephia').then(function (temp) {
    console.log('Promise success', temp);
}, function (error) {
    console.log('Promise error', err);
});
