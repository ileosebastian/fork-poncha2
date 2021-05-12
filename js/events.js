

window.onload = function () { 


    // clicks

    const tools = document.querySelectorAll('button');
   
    
    console.log(tools);
    
    /*
     * For each li, add an event that modify the corresponding
     * image to send feedback'user
     */
    tools.forEach( item => {
	item.addEventListener('mouseenter', () => {
	    console.log("Haz clickado en una tool");
	    console.log(item.firstElementChild);

	    item.firstElementChild.classList.add('reduceImage');
	})

	item.addEventListener('mouseleave', () => {
	    console.log("haz dejado de clickar el elemento");
	    console.log(item.firstElementChild);

	    item.firstElementChild.classList.remove('reduceImage');
	})
    });
}; 
    
