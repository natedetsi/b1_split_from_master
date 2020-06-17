




export const handleInputs = (e) => {
    if(e.keyCode === 9 || e.keyCode === 8){return}
    const cat = e.target.name;
    const label = e.target.value;
    document.querySelector(`.${cat}`).innerText = `${cat}: ${label}`;
    };
