let searchState = "state";
let currentStatePick = null;
let currentCountyPick = null;
let globalCurrentSearch = '';
let currentAutoPickerOptions = null;
let currentPickerItem = 0;

searchToggle = (button) => {
    if(button.id === 'showSearchButton'){
        document.querySelector('#' + searchState + 'InputArea').classList.remove('hidden');
        document.querySelector('#searchInputArea').classList.remove('hidden');
        document.querySelector('#' + searchState + 'Input').focus();
        document.querySelector('#showSearchButton').classList.add('hidden');
    }
    else{
        let currentInput = document.querySelector('#' + searchState + 'Input');
        currentInput.value = "";
        globalCurrentSearch = '';
        currentStatePick = null;
        createAutoComplete([]);
        document.querySelector('#showSearchButton').classList.remove('hidden');
        document.querySelector('#searchInputArea').classList.add('hidden');
    }
}

document.querySelector('#stateInput').addEventListener("keypress", (e)=>{
    let currentInput = document.querySelector('#' + searchState + 'Input');
    let currentValue = currentInput.value.toLowerCase();
    let key = e.key.toLowerCase();
    if(LETTERS.includes(key)){
        globalCurrentSearch = currentInput.value + e.key;
        let currentSearch = currentValue + key;
        let currentList = STATES.filter(s => s.startsWith(currentSearch));
        if(currentList.length > 0)
        {
            currentStatePick = currentList[0];
            createAutoComplete(currentList);
        }
        else{
            currentStatePick = null;
            createAutoComplete([]);
        }
    }else if(key === 'enter' && currentStatePick != null){
        document.querySelector('#searchButton').click();
    }else{
        currentStatePick = null;
        createAutoComplete([]);
    }
});

document.querySelector('#stateInput').addEventListener("keyup", (e)=>{
    let key = e.key.toLowerCase();
    let currentInput = document.querySelector('#' + searchState + 'Input');
    let currentValue = currentInput.value.toLowerCase();
    if(key === 'backspace'){
        globalCurrentSearch = currentInput.value;
        let currentList = STATES.filter(s => s.startsWith(currentValue));
        if(currentList.length > 0 && globalCurrentSearch != '')
        {
            currentStatePick = currentList[0];
            createAutoComplete(currentList);
        }
        else{
            currentStatePick = null;
            createAutoComplete([]);
        }
    }else if(key === 'arrowup' && currentPickerItem != 0)
    {
        currentAutoPickerOptions[currentPickerItem].style = "background-color: ghostwhite;";
        let currentSelection = currentAutoPickerOptions[--currentPickerItem]
        if(currentPickerItem != 0){
            currentStatePick = currentSelection.innerHTML;
            currentSelection.style = "background-color: gainsboro;";
        }
        currentSelection.click();
    }
    else if(key === 'arrowdown' && currentPickerItem < currentAutoPickerOptions.length - 1)
    {
        if(currentPickerItem != 0)
            currentAutoPickerOptions[currentPickerItem].style = "background-color: ghostwhite;";

        let currentSelection = currentAutoPickerOptions[++currentPickerItem];
        currentSelection.style = "background-color: gainsboro;";
        currentStatePick = currentSelection.innerHTML;
        currentSelection.click();
    }
});

document.querySelector('#countyInput').addEventListener("keypress", (e)=>{
    let currentInput = document.querySelector('#' + searchState + 'Input');
    let currentValue = currentInput.value.toLowerCase();
    let key = e.key.toLowerCase();
    if(LETTERS.includes(key)){
        globalCurrentSearch = currentInput.value + e.key;
        let currentSearch = currentValue + key;
        let currentList = currentCountyOptions.filter(county => county.startsWith(currentSearch));
        if(currentList.length > 0)
        {
            currentCountyPick = currentList[0];
            createAutoComplete(currentList);
        }
        else{
            currentCountyPick = null;
            createAutoComplete([]);
        }
    }else if(key === 'enter' && currentCountyPick != null){
        document.querySelector('#searchButton').click();
    }else{
        currentCountyPick = null;
        createAutoComplete([]);
    }
});

document.querySelector('#countyInput').addEventListener("keyup", (e)=>{
    let key = e.key.toLowerCase();
    let currentInput = document.querySelector('#' + searchState + 'Input');
    let currentValue = currentInput.value.toLowerCase();
    if(key === 'backspace'){
        globalCurrentSearch = currentInput.value;
        let currentList = currentCountyOptions.filter(county => county.startsWith(currentValue));
        if(currentList.length > 0 && globalCurrentSearch != '')
        {
            currentCountyPick = currentList[0];
            createAutoComplete(currentList);
        }
        else{
            currentCountyPick = null;
            createAutoComplete([]);
        }
    }else if(key === 'arrowup' && currentPickerItem != 0)
    {
        currentAutoPickerOptions[currentPickerItem].style = "background-color: ghostwhite;";
        let currentSelection = currentAutoPickerOptions[--currentPickerItem]
        if(currentPickerItem != 0){
            currentCountyPick = currentSelection.innerHTML;
            currentSelection.style = "background-color: gainsboro;";
        }
        currentSelection.click();
    }
    else if(key === 'arrowdown' && currentPickerItem < currentAutoPickerOptions.length - 1)
    {
        if(currentPickerItem != 0)
            currentAutoPickerOptions[currentPickerItem].style = "background-color: ghostwhite;";

        let currentSelection = currentAutoPickerOptions[++currentPickerItem];
        currentSelection.style = "background-color: gainsboro;";
        currentCountyPick = currentSelection.innerHTML;
        currentSelection.click();
    }
});

document.querySelector('#searchButton').addEventListener('click', (e) => {
    if(globalCurrentSearch != '') {
        let currentInput = document.querySelector('#' + searchState + 'Input');
        currentInput.value = '';
        globalCurrentSearch = '';
        createAutoComplete([]);
        if(currentCountyPick == null)
        {
            fireSearch(currentStatePick);
            document.querySelector('#countryStats').classList.add('hidden');
            document.querySelector('#stateInput').classList.add('hidden');
            document.querySelector('#countyInput').classList.remove('hidden');
            document.querySelector('#showStateSearch').classList.remove('hidden');
            document.querySelector('#stateStats').classList.remove('hidden');
            getOldCountyData(STATEABREVIATIONS[currentStatePick]);
            searchState = 'county';
        }
        else
        {
            fireSearch(currentCountyPick);
        }
    }
});

backToStateSearch = () => {
    let currentInput = document.querySelector('#' + searchState + 'Input');
    currentInput.value = '';
    currentCountyPick = null;
    currentStatePick = null;
    globalCurrentSearch = '';
    createAutoComplete([]);
    searchState = 'state';
    document.querySelector('#countryStats').classList.remove('hidden');
    document.querySelector('#stateInput').classList.remove('hidden');
    document.querySelector('#countyInput').classList.add('hidden');
    document.querySelector('#showStateSearch').classList.add('hidden');
    document.querySelector('#stateStats').classList.add('hidden');
    stateOldData = null;
    stateCurrentData = null;
    currentCountyOptions = null;
}

fireSearch = (searchValue) => {
    if(stateOldData == null && stateCurrentData == null)
        getOldDataState(STATEABREVIATIONS[searchValue.toLowerCase()]);
    else{
        currentSelectedCountyData = countyCurrentData.filter(County => County.county.toLowerCase() === searchValue);
        oldSelectedCountyData = countyOldData.filter(County => County.county.toLowerCase() === searchValue);
        state.changeState('infoScreen');
    }

}

createAutoComplete = (currentList) => {
    
    let currentInput = document.querySelector('#' + searchState + 'Input');
    let autocomplete = document.querySelector('#stateAutoComplete');
    currentPickerItem = 0;
    autocomplete.querySelectorAll('button').forEach(button => {
        autocomplete.removeChild(button);
    });

    let newcurrentSearchButton = document.createElement('button');
    newcurrentSearchButton.innerHTML = globalCurrentSearch;
    newcurrentSearchButton.style = "width: 0; height: 0; position:absolute;";
    autocomplete.appendChild(newcurrentSearchButton);
    
    newcurrentSearchButton.addEventListener('click', () =>{
        currentInput.value = globalCurrentSearch;
    });

    currentList.forEach(state => {
        let newButton = document.createElement('button');
        let stateUpperFirst = state.charAt(0).toUpperCase() + state.substring(1, state.length);
        newButton.classList.add('input-txt-default')
        newButton.innerHTML = stateUpperFirst;
        newButton.addEventListener('click', () =>{
            currentInput.value = stateUpperFirst;
            currentCountyPick = currentCountyPick;
        });
        autocomplete.appendChild(newButton);
    });

    currentAutoPickerOptions = document.querySelectorAll('#' + searchState + 'AutoComplete button');
}