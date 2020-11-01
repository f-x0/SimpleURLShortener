formElem.onsubmit = async (e) => {
    e.preventDefault();
    var form = document.querySelector("#formElem");

    data = {
      url : form.querySelector('input[name="url"]').value,
    }

    if(data.url < 10){ return; }

    let response = await fetch('/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    let text = await response.json();

    let textResponse = text.slug ? document.URL + text.slug : text.error;

    document.querySelector("#response").innerHTML = textResponse;
};