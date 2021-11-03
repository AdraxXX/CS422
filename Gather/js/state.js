class PageState{

    constructor(startingState){
        this.currentState = startingState;
    }

    changeState(newState){
        this.currentState = newState;
        document.querySelectorAll('.page').forEach(page => {
            if(page.id != newState)
                page.classList.add('hidden');
            else
                page.classList.remove('hidden');
        });
    }
}

