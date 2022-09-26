function superbowlWin(record) {
    let foundObject = record.find((object) => {
        if (object.result === "W") return object.year
    })
    if (foundObject === undefined) {
        return foundObject
    } else {
        return foundObject.year

    }

}