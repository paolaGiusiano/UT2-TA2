function showUserProfiles(user){
    const profiles = [user.profile?.social?.twitter, user.profile?.social?.facebook, user.profile?.email].filter(Boolean);

    return profiles.join(",");
}

/*
function showUserProfiles(user) {
    const profile = user.profile;
    const keys = ['twitter', 'facebook', 'email'];

    const output = keys.map(key => 
            key === 'email' 
                ?profile.email 
                :profile.social?.[key]
        )
        .filter(value => value) 
        .join(', ');

    return output;
}
*/

const user1 = {
    id: 1,
    name: 'Carol Smith',
    profile: {
        social: {
            twitter: 'carol.smith',
            facebook: 'carol.smith77'
        }
    }
};
    
const user2 = {
    id: 2,
    name: 'Jane Smith',
    profile: {
        email: 'jane.smith@example.com'
    }
};


console.log(showUserProfiles(user1)); // Expected output: 'carol.smith, carol.smith77'
console.log(showUserProfiles(user2)); // Expected output: 'jane.smith@example.com'