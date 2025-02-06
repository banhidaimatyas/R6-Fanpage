function Navigation(event) {
  let target_site = event.currentTarget.id;
  switch (target_site) {
    case "nav1":
      window.location.href = "../game_show.html";
      break;
    case nav2:
      window.location.href = "../operator.html";
      break;
    case nav3:
      window.location.href = "../seasons.html";
      break;
    case nav4:
      window.location.href = "../esport.html";
      break;
    case nav5:
      window.location.href = "../quiz.html";
      break;
    case nav6:
      window.location.href = "../guesser.html";
      break;
    case nav7:
      window.location.href = "../about_us.html";
      break;

    default:
      break;
  }
  console.log(target_site);
}
