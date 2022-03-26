var prev_id = null
function change_color(){
    if (prev_id){
        prev_id.style.backgroundColor = 'hsl(210deg 19% 21%)';
        prev_id.style.color = 'hsl(217, 12%, 63%)';
    }
    new_id = event.currentTarget;
    new_id.style.backgroundColor = "hsl(217, 12%, 63%)";
    new_id.style.color = 'white';
    selected = true
    prev_id = new_id;

    var rating = new_id.innerHTML
    document.getElementById("result").innerHTML = "You selected " + rating + " out of 5";
}
function display_thanks(){
    if(document.getElementById('result').innerHTML == ''){
        alert("You haven't picked given any rating! ")
        return false;
    }
    document.getElementById("show_Thanks").style.display = "flex";
    document.getElementById("ratings_form").style.display = "none";
}
