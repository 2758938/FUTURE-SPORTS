// Required; Date (closest wed or fri), Time (constant), Location, Map (of location), Conditions (from Swellnet), Surf links (to other sites)



const h1Element = document.createElement('h1')
h1Element.innerText = 'Next Meet';
const container = document.getElementById('container');
container.appendChild(h1Element);


function getNextWednesdayOrFriday() {
    const australiaTimezoneOffset = 10; // AEST is UTC+10
    const today = new Date();
    const currentDay = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    const localTime = today.getTime();
    const localOffset = today.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const localTimezoneOffset = australiaTimezoneOffset;
    const daysToAdd = currentDay <= 3 ? 3 - currentDay : 7 - currentDay + 3;
    const Next ={ correctly}
}