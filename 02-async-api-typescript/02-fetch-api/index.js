//fetch api - http method


const url = "https://jsonplaceholder.typicode.com/posts";

//GET
async function ambilData() {
    const response = await fetch(url, {
        method: "GET",
    });
    const data = await response.json();

    console.log("-- GET --");
    console.log(data[0]);
}

//POST
async function postData() {
   const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "Belajar Fetch API",
            body: "Aku sedang belajar post",
            userId: 1,
        })
    });
    const data = await response.json();
    console.log("-- POST --");
    console.log(data);
}
    

//PUT
async function putData() {
     const response = await fetch(`${url}/1`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: 1,
            title: "Rara Belajar Fetch API",
            body: "Aku sedang belajar put",
            userId: 1,
        })
    });
    const data = await response.json();
    console.log("-- PUT --");
    console.log(data);
}
    

//PATCH
async function patchData() {
     const response = await fetch(`${url}/1`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "Rara sedang Belajar Fetch API",
        })
    });
    const data = await response.json();
    console.log("-- PATCH --");
    console.log(data);
}


//DELETE
async function deleteData() {
     const response = await fetch(`${url}/1`, {
        method: "DELETE",
    });
    
    console.log("-- DELETE --");
    console.log("Status:", response.status);
}

//jalankan semua
async function jalankanSemua() {
    await ambilData();
    await postData();
    await putData();
    await patchData();
    await deleteData();
} 
jalankanSemua();