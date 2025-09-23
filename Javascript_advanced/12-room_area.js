const roomDimensions = {
    width: 50,
    lenght: 100,
    getArea: function() {
        return this.width * this.lenght;
    }
}

let boundGetArea = roomDimensions.getArea.bind(roomDimensions);