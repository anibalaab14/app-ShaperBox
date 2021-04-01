import { URL_GETCLOTHES } from "@env"

var getStart = async (quantity,screen) => {
  
    try {
        console.log("antes de request");
        console.log(URL_GETCLOTHES);
        let response = await fetch(
            `${URL_GETCLOTHES}`
        ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },           
            body: JSON.stringify({
                quantity,
                screen
            })

        });
        console.log("antes de response URL_GETCLOTHES");
        let json = await response.json();
        return json;


    } catch (err) {
        console.err(err);
        throw err;
    }
}

export {getStart};