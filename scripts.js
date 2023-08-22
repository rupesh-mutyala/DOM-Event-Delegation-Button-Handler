const onClick = (event) => {
    if(event.target?.tagName === 'BUTTON') {
        console.log('buttonid', event?.target?.id);

        event.stopPropagation();
        event.preventDefault();

        return;
    } 
    
    const button = event.target.closest('BUTTON'); 
    if (button) {
        console.log('buttonid', button.getAttribute('id'));

        event.stopPropagation();
        event.preventDefault();

        return;
    }
    
    // else if(event?.target?.tagName === 'BODY') {
    //     console.log('buttonid', 'No button Present');
    // } else {
    //     onClick({ target:event?.target?.parentNode})
    // }
}

/**
 * 
 * 
 * event: { target, a, b, c, .... } // child
 * => parent
 * { target, a, b, c, ... } 
 */