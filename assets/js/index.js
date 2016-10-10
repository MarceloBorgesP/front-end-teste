var loadMasks = function() {
    setTimeout(function() {
        $('.money-mask').priceFormat({
            prefix: '',
            thousandsSeparator: ''
        });
    }, 10);
}

$(document).ready(loadMasks);