const onClick = (event) => {
    const button = event.target.closest('BUTTON');  // for getting the nearest button

    if (button) {
        const alertFunction = () =>  window.alert(`You clicked on button with id ${button.getAttribute('id')}. we are using a property called "Event Delegation" which improves Memory Efficiency, Performance and will make the code simpler`);

        const onClickButton1 = () => {
            // write your code here
            alertFunction()
        }

        const onClickButton2 = () => {
            // write your code here
            alertFunction()
        }

        const funcMapping = {
			button1  : onClickButton1,
			button2 : onClickButton2,
		};

        funcMapping[button.getAttribute('id')]();

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