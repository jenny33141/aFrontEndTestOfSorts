function validateForm()  {
    console.log("Getting form...")
    const fname = document.forms["form"]["fname"].value;
    const lname = document.forms["form"]["lname"].value;
    if (fname == "") {
        alert("Please enter a name")
    }
    else {
        alert(`Thanks, ${fname} ${lname} for submitting the form.`)
    }
    
    console.log(name);
}