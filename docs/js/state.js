class PageState{

    constructor(startingState){
        this.currentState = startingState;
        this.hidePages(startingState);
    }

    changeState = (newState)=>{
        this.currentState = newState;
        this.hidePages(newState);
    }

    hidePages = (newState)=>{
        document.querySelectorAll('.page').forEach(page => {
            if(page.id != newState)
                page.classList.add('hidden');
            else
                page.classList.remove('hidden');
        });
    }
}

