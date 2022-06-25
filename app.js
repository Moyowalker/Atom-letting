const search = () => {
    const searchbox = document.getElementById("search-property").value.toUpperCase();
    const storeitems = document.getElementById("property-list");
    const properties = document.querySelectorAll(".properties");
    const pname = storeitems.getElementsByTagName("h3");

    for(var i=0; i < pname.length; i++){
        let match = properties[i].getElementsByTagName("h3")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                properties[i].style.display = "";
            } else {
                properties[i].style.display = "none";
            }
        }
    }
}

console.log("I am working perfectly");