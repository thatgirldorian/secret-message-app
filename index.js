//handle message submission
document.querySelector('form').addEventListener('submit', event => {
    //run a function every time the form is submitted
    event.preventDefault()

    //hide existing form whenever a user creates a message
    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#link-form').classList.remove('hide')

    //get the message submitted
    const input = document.querySelector('#message-input')
    //do some encoding conversion from normal text to base64 string
    const encrypted = btoa(input.value)

    //throw the encrypted value into the link to generate our URL & allow them quickly copy it
    const linkInput = document.querySelector('#link-input')
    linkInput.value = `${window.location}#${encrypted}`
    linkInput.select()
})

