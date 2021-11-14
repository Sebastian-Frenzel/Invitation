function getClass(className){
  var style;
  switch (className) {
    case "timer":
      style = {
        fontFamily: "BebasNeue",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "250px",
        lineHeight: "300px",
        textAlign: "center",
        color: "#FFFFFF",

      }
      break;
    case "aCounter":
      style = {
        fontFamily: "Gin",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "275px",
        lineHeight: "330px",
        color: "#DAAF3F",
      }
      break;
    case "bCounter":
      style = {
        fontFamily: "Gin",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "275px",
        lineHeight: "330px",
        color: "#065A69",
      }
      break;
    default:
  }
return style;
}
