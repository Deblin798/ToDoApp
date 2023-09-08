const getUserData = (req, res)=>{
    let user={
        name: "Deblin",
        surname: "Chaudhuri",
        roll: 1
    }
    res.send(user);
}

module.exports = getUserData;