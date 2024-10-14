const inp1 = prompt("Do you want to find the speed?");
const inp2 = prompt("Enter distance");
const inp3 = prompt("Enter time");

function speed() {
  const spid = Number(inp2) / Number(inp3);
  console.log(spid);
}

switch (inp1) {
  case "yes":
    speed();
    break;
  default:
    console.log("ERROR");
    break;
}
