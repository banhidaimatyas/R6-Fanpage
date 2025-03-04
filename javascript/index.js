function navigation(event) {
  let target_site = event.currentTarget.id;
  switch (target_site) {
    case "nav1":
      window.location.href = "../game_show.html";
      break;
    case "nav2":
      window.location.href = "../operator.html";
      break;
    case "nav5":
      window.location.href = "../quiz.html";
      break;
    case "nav6":
      window.location.href = "../guesser.html";
      break;
    case "nav7":
      window.location.href = "../about_us.html";
      break;

    default:
      break;
  }
  console.log(target_site);
}

function highlight(event){
  let target_obj = event.currentTarget
  
  
  target_obj.firstElementChild.firstElementChild.style.border = "solid aqua 1px"
  target_obj.style.color = "aqua"
  target_obj.firstElementChild.firstElementChild.style.fontWeight = "600"
  target_obj.firstElementChild.firstElementChild.style.fontSize = "45px"
  
  target_obj.style.cursor = "pointer"
}

function styleremove(event) {
  let target_obj = event.currentTarget
  
  target_obj.firstElementChild.firstElementChild.style.border = ""
  target_obj.style.color = ""
  target_obj.firstElementChild.firstElementChild.style.fontWeight = "500"
  target_obj.firstElementChild.firstElementChild.style.fontSize = "35px"
}