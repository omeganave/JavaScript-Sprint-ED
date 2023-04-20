fetch('./jsonsprint.json')
    .then(response => response.json())
    .then(member => {
        member.forEach(member => {
            console.log(fullName(member));
            console.log(calculateAge(member, new Date(member.birthday)));
            console.log(whatDidHeDo(member));
            console.log(kids(member));
            document.write(` ${fullName(member)}, `);
            document.write(` ${calculateAge(member, new Date(member.birthday))}, `);
            document.write(` ${whatDidHeDo(member)}, `);
            document.write(` ${kids(member)} <br><br>`);
        });
    })
    .catch(error => {
        console.error(error);
    });

function fullName(member) {
    return `${member.firstName} ${member.midName} ${member.lastName}`;
}

function calculateAge(member, dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    
    if (member.alive == true) {
        return `${member.firstName} is ${Math.abs(age_dt.getUTCFullYear() - 1970)} years old`;
    }
    else {
        return `${member.firstName} would be ${Math.abs(age_dt.getUTCFullYear() - 1970)} years old today`;
    }
}

function whatDidHeDo(member) {
    return `${member.firstName} was the band's ${member.role}`
}

function kids(member) {
    if (member.alive == true) {
        return `${member.firstName} has ${member.children} children`
    }
    else {
        return `${member.firstName} had ${member.children} children`
    }
}