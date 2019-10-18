exports.handler = async (event) => {
    let {firstName, lastName} = JSON.parse(event.body);
    return {
        statusCode: 200,
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            result: "Name : " + firstName + " " +lastName
        })
    }
}