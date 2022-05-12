$(document).ready(function () {

    urls  = [
        'https://www.surveycake.com/s/o4mz2',
        'https://www.surveycake.com/s/ryb13',
        'https://www.surveycake.com/s/3pPPN',
        'https://www.surveycake.com/s/8zDaP',
    ]
    
    

    index = Math.floor(Math.random() * urls.length)

    $('#web').attr('src', urls[index])

})
