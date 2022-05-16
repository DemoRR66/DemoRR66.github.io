$(document).ready(function () {

    urls  = [
        'https://www.surveycake.com/s/erNxa',
        'https://www.surveycake.com/s/o4YRV',
        'https://www.surveycake.com/s/Rx121',
        'https://www.surveycake.com/s/1pRXx',
    ]
    
    

    index = Math.floor(Math.random() * urls.length)

    $('#web').attr('src', urls[index])

})
