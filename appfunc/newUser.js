import {URL_CREATEUSERS} from "@env"

const newUser = async (
    newName,
    newLastname,
    newUsername,
    newPass,
    newEmail,
    newDirection,
    newId,
    newAge
) => {
    try {
        console.log("antes de request");
        console.log(URL_CREATEUSERS);
        let response = await fetch(
            `${URL_CREATEUSERS}`
            , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: newName,
                    lastname: newLastname,
                    username: newUsername,
                    pass: newPass,
                    email: newEmail,
                    direccion: newDirection,
                    id: newId,
                    age: newAge
                  
                })
            });
        console.log("antes de response");
        let json = await response.json();
        return json;
    } catch (err) {
        return err;
    }
};

module.exports = { newUser };