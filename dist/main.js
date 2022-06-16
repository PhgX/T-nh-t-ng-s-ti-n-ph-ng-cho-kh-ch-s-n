let matrix = [
    [0, 0, 1, 1, 8],
    [2, 0, 0, 0, 6],
    [0, 0, 0, 0, 9],
];
function checkCurseRoomIndex(index, curseRoomsIndex) {
    for (let roomPos of curseRoomsIndex) {
        if (roomPos === index) {
            return true;
        }
    }
    return false;
}
function getRoomPostion(building) {
    let totalPayment = 0;
    let curseRoomsIndex = [];
    for (let floor of building) {
        for (let room of floor) {
            if (room === 0) {
                let index = floor.indexOf(room);
                curseRoomsIndex.push(index);
            }
            if (room != 0 &&
                (checkCurseRoomIndex(floor.indexOf(room), curseRoomsIndex) === false)) {
                totalPayment += room;
            }
        }
    }
    return totalPayment;
}
let totalPrice = getRoomPostion(matrix);
console.log(totalPrice);
//# sourceMappingURL=main.js.map