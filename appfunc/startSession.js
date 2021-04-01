
import { URL_STARTSESSION } from "@env"

const buttonSession = async (varUser, varPass) => {

    try {
        console.log("antes de request");
        console.log(URL_STARTSESSION);
        let response = await fetch(
            `${URL_STARTSESSION}`
        ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },           
            body: JSON.stringify({
                username: varUser,
                pass: varPass
            })

        });
        console.log("antes de response");
        let json = await response.json();
        return json;


    } catch (err) {
        console.err(err);
        return err;
    }

}
export { buttonSession };


/*    let status;

    if (varUser == "anibal" && varPass=="anibal"){
        status=0;
        console.log("sessión iniciada correctamente");
    }else{
        status=1;
        console.log("sessión no iniciada");
    }


    return status
  */