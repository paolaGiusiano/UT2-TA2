function getGetUniqueGuestList(guestList){
    // return noRepeatNumbers = new Set(guestList);
    return noRepeatNumbers = [...new Set(guestList)];
}


const guestList = ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️'];
console.log(getGetUniqueGuestList(guestList));