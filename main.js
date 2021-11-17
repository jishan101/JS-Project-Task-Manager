import "regenerator-runtime/runtime"



async function del() {
    const response = await fetch(`https://task-manager-server-app.herokuapp.com/users`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "id": 9,
            "first_name": "Rania",
            "last_name": "Dablin",
            "email": "rdablin8@state.gov",
            "gender": "Female"
        })
    });

    const data = await response.json();
    console.log(data);
}

del();