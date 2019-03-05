// Global variables ftw

let input1 = '';
let input2 = '';
let input3 = '';
let input4 = '';
let input5 = '';
let result = '';
let switched = false;
let heading = "What's the Best Branch for You?"; // What should the heading start out as?
let marineCorpsPotential = 'abcde';
let marineCorpsCount = 0;
let isMarineCorps = '';
let armyPotential = 'cdefg';
let armyCount = 0;
let isArmy = '';
let navyPotential = 'efghi';
let navyCount = 0;
let isNavy = '';
let airForcePotential = 'ghijk';
let airForceCount = 0;
let isAirForce = '';
let userInput = 'abcdefghijk';

// Set init to run when the window loads.
window.onload = init;

function init() {
    // Make sure we're dealing with a clean slate.
    reset();

    // Set event handlers.
    document.querySelector('#user-input1')
        .addEventListener('keyup', handleUserInput1);

    document.querySelector('#user-input2')
            .addEventListener('keyup', handleUserInput2);

    document.querySelector('#user-input3')
        .addEventListener('keyup', handleUserInput3);

    document.querySelector('#user-input4')
            .addEventListener('keyup', handleUserInput4);

    document.querySelector('#user-input5')
        .addEventListener('keyup', handleUserInput5);

    document.querySelector('#reset')
        .addEventListener('click', reset)

    document.querySelector('#switch')
        .addEventListener('click', switchGears)
}

function reset() {
     input1 = '';
     input2 = '';
     input3 = '';
     input4 = '';
     input5 = '';
     result = '';
     marineCorpsCount = 0;
     armyCount = 0;
     navyCount = 0;
     airForceCount = 0;

    document.querySelector('#user-input1').value = input1;
    document.querySelector('#user-input2').value = input2;
    document.querySelector('#user-input3').value = input3;
    document.querySelector('#user-input4').value = input4;
    document.querySelector('#user-input5').value = input5;

    
    // If you feel like it, you can comment out the five queries above and use the magical one below!
    // Feel free to ask how it works.

    // document.querySelectorAll('.input').forEach(function(node) { node.value = ''});

    document.querySelector('#result').innerText = result;
}

function switchGears() {
    // TODO: change the value:of 'switched' to the opposite of what it currently is

    if(switched) {
        heading = ''; // TODO: change the heading to whatever would be appropriate for YOUR app.
    } else {
        heading = ''; // TODO: change the heading to whatever would be appropriate for your OTHER app.
    }

    changeHeading();
}

function changeHeading() {
    document.querySelector('#heading').innerText = heading;
}

function handleUserInput1(event) {
    let userInput1 = event.target.value;
    let errorCode = 'Please Select Another Choice';
    input1 = userInput1;
    isMarineCorps = marineCorpsPotential.includes(input1) && input1 !== '';
    isNavy = navyPotential.includes(input1) && input1 !== '';
    isArmy = armyPotential.includes(input1) && input1 !== '';
    isAirForce = airForcePotential.includes(input1) && input1 !== '';
        console.log(`MarineCorps: ${isMarineCorps}`);
        console.log(`Army: ${isArmy}`);
        console.log(`Navy: ${isNavy}`);
        console.log(`AirForce: ${isAirForce}`);
        
        if(input2 !== '' && input3 !== '' && input4 !== '' && input5 !== ''){
            console.log(`userInput1: ${input1}`);
            console.log(`userInput2: ${input2}`);
            console.log(`userInput3: ${input3}`);
            console.log(`userInput4: ${input4}`);
            console.log(`userInput5: ${input5}`);
        } 

        


        // code to increase counter based on true or false statement
        // Marine Corps
        if (isMarineCorps === true && input1 !== ''){
            marineCorpsCount = marineCorpsCount + 1;
            console.log(`MarineCorpsCount: ${marineCorpsCount}`);
        } else if(isMarineCorps === false && marineCorpsCount === 0) {
            marineCorpsCount = marineCorpsCount;
            console.log(`MarineCorpsCount: ${marineCorpsCount}`);
        } else {
            marineCorpsCount = marineCorpsCount - 1;
            console.log(`MarineCorpsCount: ${marineCorpsCount}`)
        }
        // Airforce
        if (isAirForce === true && input1 !== '') {
            airForceCount = airForceCount + 1;
            console.log(`AirForceCount: ${airForceCount}`);
        } else if(isAirForce === false && airForceCount === 0) {
            airForceCount = airForceCount;
            console.log(`AirForceCount: ${airForceCount}`);
        } else {
            airForceCount = airForceCount - 1;
            console.log(`AirForceCount: ${airForceCount}`)
        }
        // Army
        if (isArmy === true && input1 !== '') {
            armyCount = armyCount + 1;
            console.log(`ArmyCount: ${armyCount}`);
        } else if(isArmy === false && armyCount === 0) {
            armyCount = armyCount;
            console.log(`ArmyCount: ${armyCount}`)
        } else {
            armyCount = armyCount - 1;
        }
        // Navy
        if (isNavy === true && input1 !== '') {
            navyCount = navyCount + 1;
            console.log(`NavyCount: ${navyCount}`);
        } else if(isNavy === false && navyCount === 0) {
            navyCount = navyCount;
            console.log(`NavyCount: ${navyCount}`)
        } else {
            navyCount = navyCount - 1;
            console.log(`NavyCount: ${navyCount}`)
        }

}

function handleUserInput2(event) {
    let userInput2 = event.target.value;
    input2 = userInput2;
    isMarineCorps = marineCorpsPotential.includes(input2) && input2 !== '';
    isNavy = navyPotential.includes(input2) && input2 !== '';
    isArmy = armyPotential.includes(input2) && input2 !== '';
    isAirForce = airForcePotential.includes(input2) && input2 !== '';
        console.log(`MarineCorps: ${isMarineCorps}`);
        console.log(`Army: ${isArmy}`);
        console.log(`Navy: ${isNavy}`);
        console.log(`AirForce: ${isAirForce}`);

        if(input1 !== '' && input3 !== '' && input4 !== '' && input5 !== ''){
            console.log(`userInput1: ${input1}`);
            console.log(`userInput2: ${input2}`);
            console.log(`userInput3: ${input3}`);
            console.log(`userInput4: ${input4}`);
            console.log(`userInput5: ${input5}`);
        }
       // code to increase counter based on true or false statement
        // Marine Corps
        // if (isMarineCorps === true && input1 !== ''){
        //     marineCorpsCount = marineCorpsCount + 1;
        //     console.log(`MarineCorpsCount: ${marineCorpsCount}`);
        // } else if(isMarineCorps === false && marineCorpsCount === 0) {
        //     marineCorpsCount = marineCorpsCount;
        //     console.log(`MarineCorpsCount: ${marineCorpsCount}`);
        // } else {
        //     marineCorpsCount = marineCorpsCount - 1;
        //     console.log(`MarineCorpsCount: ${marineCorpsCount}`)
        // }
        // // Airforce
        // if (isAirForce === true && input1 !== '') {
        //     airForceCount = airForceCount + 1;
        //     console.log(`AirForceCount: ${airForceCount}`);
        // } else if(isAirForce === false && airForceCount === 0) {
        //     airForceCount = airForceCount;
        //     console.log(`AirForceCount: ${airForceCount}`);
        // } else {
        //     airForceCount = airForceCount - 1;
        //     console.log(`AirForceCount: ${airForceCount}`)
        // }
        // // Army
        // if (isArmy === true && input1 !== '') {
        //     armyCount = armyCount + 1;
        //     console.log(`ArmyCount: ${armyCount}`);
        // } else if(isArmy === false && armyCount === 0) {
        //     armyCount = armyCount;
        //     console.log(`ArmyCount: ${armyCount}`)
        // } else {
        //     armyCount = armyCount - 1;
        // }
        // // Navy
        // if (isNavy === true && input1 !== '') {
        //     navyCount = navyCount + 1;
        //     console.log(`NavyCount: ${navyCount}`);
        // } else if(isNavy === false && navyCount === 0) {
        //     navyCount = navyCount;
        //     console.log(`NavyCount: ${navyCount}`)
        // } else {
        //     navyCount = navyCount - 1;
        //     console.log(`NavyCount: ${navyCount}`)
        // }
           
}

function handleUserInput3(event) {
    let userInput3 = event.target.value;
    input3 = userInput3;
    isMarineCorps = marineCorpsPotential.includes(input3) && input3 !== '';
    isNavy = navyPotential.includes(input3) && input3 !== '';
    isArmy = armyPotential.includes(input3) && input3 !== '';
    isAirForce = airForcePotential.includes(input3) && input3 !== '';
        console.log(`MarineCorps: ${isMarineCorps}`);
        console.log(`Army: ${isArmy}`);
        console.log(`Navy: ${isNavy}`);
        console.log(`AirForce: ${isAirForce}`);

        if(input2 !== '' && input1 !== '' && input4 !== '' && input5 !== ''){
            console.log(`userInput1: ${input1}`);
            console.log(`userInput2: ${input2}`);
            console.log(`userInput3: ${input3}`);
            console.log(`userInput4: ${input4}`);
            console.log(`userInput5: ${input5}`);
        }
        // code to increase counter based on true or false statement
        // Marine Corps
        // if (isMarineCorps === true && input1 !== ''){
        //     marineCorpsCount = marineCorpsCount + 1;
        //     console.log(`MarineCorpsCount: ${marineCorpsCount}`);
        // } else if(isMarineCorps === false && marineCorpsCount === 0) {
        //     marineCorpsCount = marineCorpsCount;
        //     console.log(`MarineCorpsCount: ${marineCorpsCount}`);
        // } else {
        //     marineCorpsCount = marineCorpsCount - 1;
        //     console.log(`MarineCorpsCount: ${marineCorpsCount}`)
        // }
        // // Airforce
        // if (isAirForce === true && input1 !== '') {
        //     airForceCount = airForceCount + 1;
        //     console.log(`AirForceCount: ${airForceCount}`);
        // } else if(isAirForce === false && airForceCount === 0) {
        //     airForceCount = airForceCount;
        //     console.log(`AirForceCount: ${airForceCount}`);
        // } else {
        //     airForceCount = airForceCount - 1;
        //     console.log(`AirForceCount: ${airForceCount}`)
        // }
        // // Army
        // if (isArmy === true && input1 !== '') {
        //     armyCount = armyCount + 1;
        //     console.log(`ArmyCount: ${armyCount}`);
        // } else if(isArmy === false && armyCount === 0) {
        //     armyCount = armyCount;
        //     console.log(`ArmyCount: ${armyCount}`)
        // } else {
        //     armyCount = armyCount - 1;
        // }
        // // Navy
        // if (isNavy === true && input1 !== '') {
        //     navyCount = navyCount + 1;
        //     console.log(`NavyCount: ${navyCount}`);
        // } else if(isNavy === false && navyCount === 0) {
        //     navyCount = navyCount;
        //     console.log(`NavyCount: ${navyCount}`)
        // } else {
        //     navyCount = navyCount - 1;
        //     console.log(`NavyCount: ${navyCount}`)
        // }
}

function handleUserInput4(event) {
    let userInput4 = event.target.value;
    input4 = userInput4;
    isMarineCorps = marineCorpsPotential.includes(input4) && input4 !== '';
    isNavy = navyPotential.includes(input4) && input4 !== '';
    isArmy = armyPotential.includes(input4) && input4 !== '';
    isAirForce = airForcePotential.includes(input4) && input4 !== '';
        console.log(`MarineCorps: ${isMarineCorps}`);
        console.log(`Army: ${isArmy}`);
        console.log(`Navy: ${isNavy}`);
        console.log(`AirForce: ${isAirForce}`);

        if(input2 !== '' && input3 !== '' && input1 !== '' && input5 !== ''){
            console.log(`userInput1: ${input1}`);
            console.log(`userInput2: ${input2}`);
            console.log(`userInput3: ${input3}`);
            console.log(`userInput4: ${input4}`);
            console.log(`userInput5: ${input5}`);
        }
        // code to increase counter based on true or false statement
        // Marine Corps
        // if (isMarineCorps === true && input1 !== ''){
        //     marineCorpsCount = marineCorpsCount + 1;
        //     console.log(`MarineCorpsCount: ${marineCorpsCount}`);
        // } else if(isMarineCorps === false && marineCorpsCount === 0) {
        //     marineCorpsCount = marineCorpsCount;
        //     console.log(`MarineCorpsCount: ${marineCorpsCount}`);
        // } else {
        //     marineCorpsCount = marineCorpsCount - 1;
        //     console.log(`MarineCorpsCount: ${marineCorpsCount}`)
        // }
        // // Airforce
        // if (isAirForce === true && input1 !== '') {
        //     airForceCount = airForceCount + 1;
        //     console.log(`AirForceCount: ${airForceCount}`);
        // } else if(isAirForce === false && airForceCount === 0) {
        //     airForceCount = airForceCount;
        //     console.log(`AirForceCount: ${airForceCount}`);
        // } else {
        //     airForceCount = airForceCount - 1;
        //     console.log(`AirForceCount: ${airForceCount}`)
        // }
        // // Army
        // if (isArmy === true && input1 !== '') {
        //     armyCount = armyCount + 1;
        //     console.log(`ArmyCount: ${armyCount}`);
        // } else if(isArmy === false && armyCount === 0) {
        //     armyCount = armyCount;
        //     console.log(`ArmyCount: ${armyCount}`)
        // } else {
        //     armyCount = armyCount - 1;
        // }
        // // Navy
        // if (isNavy === true && input1 !== '') {
        //     navyCount = navyCount + 1;
        //     console.log(`NavyCount: ${navyCount}`);
        // } else if(isNavy === false && navyCount === 0) {
        //     navyCount = navyCount;
        //     console.log(`NavyCount: ${navyCount}`)
        // } else {
        //     navyCount = navyCount - 1;
        //     console.log(`NavyCount: ${navyCount}`)
        // }
}
function handleUserInput5(event) {
    let userInput5 = event.target.value;
    input5 = userInput5;
    isMarineCorps = marineCorpsPotential.includes(input5) && input5 !== '';
    isNavy = navyPotential.includes(input5) && input5 !== '';
    isArmy = armyPotential.includes(input5) && input5 !== '';
    isAirForce = airForcePotential.includes(input5) && input5 !== '';
        console.log(`MarineCorps: ${isMarineCorps}`);
        console.log(`Army: ${isArmy}`);
        console.log(`Navy: ${isNavy}`);
        console.log(`AirForce: ${isAirForce}`);

        if(input2 !== '' && input3 !== '' && input4 !== '' && input1 !== ''){
            console.log(`userInput1: ${input1}`);
            console.log(`userInput2: ${input2}`);
            console.log(`userInput3: ${input3}`);
            console.log(`userInput4: ${input4}`);
            console.log(`userInput5: ${input5}`);
        }
        // code to increase counter based on true or false statement
        // Marine Corps
        // if (isMarineCorps === true && input1 !== ''){
        //     marineCorpsCount = marineCorpsCount + 1;
        //     console.log(`MarineCorpsCount: ${marineCorpsCount}`);
        // } else if(isMarineCorps === false && marineCorpsCount === 0) {
        //     marineCorpsCount = marineCorpsCount;
        //     console.log(`MarineCorpsCount: ${marineCorpsCount}`);
        // } else {
        //     marineCorpsCount = marineCorpsCount - 1;
        //     console.log(`MarineCorpsCount: ${marineCorpsCount}`)
        // }
        // // Airforce
        // if (isAirForce === true && input1 !== '') {
        //     airForceCount = airForceCount + 1;
        //     console.log(`AirForceCount: ${airForceCount}`);
        // } else if(isAirForce === false && airForceCount === 0) {
        //     airForceCount = airForceCount;
        //     console.log(`AirForceCount: ${airForceCount}`);
        // } else {
        //     airForceCount = airForceCount - 1;
        //     console.log(`AirForceCount: ${airForceCount}`)
        // }
        // // Army
        // if (isArmy === true && input1 !== '') {
        //     armyCount = armyCount + 1;
        //     console.log(`ArmyCount: ${armyCount}`);
        // } else if(isArmy === false && armyCount === 0) {
        //     armyCount = armyCount;
        //     console.log(`ArmyCount: ${armyCount}`)
        // } else {
        //     armyCount = armyCount - 1;
        // }
        // // Navy
        // if (isNavy === true && input1 !== '') {
        //     navyCount = navyCount + 1;
        //     console.log(`NavyCount: ${navyCount}`);
        // } else if(isNavy === false && navyCount === 0) {
        //     navyCount = navyCount;
        //     console.log(`NavyCount: ${navyCount}`)
        // } else {
        //     navyCount = navyCount - 1;
        //     console.log(`NavyCount: ${navyCount}`)
        // }
}

function compare(){
}

function printResult() {
    console.log()
    document.querySelector('#result').innerText = result;
}
