const onClick = (event) => {
    const button = event.target.closest('BUTTON');  // for getting the nearest button

    if (button) {
        console.log('buttonid', button.getAttribute('id')); // logging the button that is clicked

        event.stopPropagation();
        event.preventDefault();

        return;
    }
    
    // else if(event?.target?.tagName === 'BODY') {  // we can do uding recursion as well
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