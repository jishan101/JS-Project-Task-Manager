// import "regenerator-runtime/runtime"



async function del() {
    const response = await fetch(`https://task-manager-server-app.herokuapp.com/`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(
            ongoing = [],
            completed = []
        )
    });

    const data = await response.json();
    console.log(data);
}

del();