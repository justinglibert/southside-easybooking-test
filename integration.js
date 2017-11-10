var EasyBooking = function(config){
    if(!config.organisationId){
        throw new Error("EasyBooking: You need to supply an organisation ID");
    }

    if(!config.flatId){
        throw new Error("EasyBooking: You need to supply a flat ID");
    }

    var iframe = document.createElement('iframe');
    iframe.id = 'easybooking-widget';
    iframe.setAttribute('src', 'http://localhost:5000/platform.html');
    iframe.setAttribute('data-organisation-id', config.organisationId );
    iframe.setAttribute('data-flat-id', config.flatId );
    iframe.style.border = 'none';
    iframe.style.display = 'block';
    iframe.style.position = 'fixed';
    iframe.style.top = 0;
    iframe.style.left = 0;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.visibility = 'visible';
    iframe.style.zIndex = -1;
    iframe.style.maxHeight = '100vh';
    iframe.style.maxWidth = '100vw';
    iframe.style.transition = 'all .4s ease-in-out';
    iframe.style.background = 'none transparent';
    iframe.style.opacity = 0;
    document.body.appendChild(iframe);
    config.buttonShow.addEventListener('click', function(e){
        console.log('clicked');
        event.preventDefault();
        var iframe = document.getElementById("easybooking-widget");
        iframe.style.opacity = 1;
        iframe.style.zIndex = 2147483647;
    });
}