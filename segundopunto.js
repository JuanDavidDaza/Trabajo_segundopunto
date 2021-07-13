let departamento = prompt("Ingresa por favor un departamento");
departamento = departamento.toLowerCase();
let pantalla = document.getElementById("pantalla");
//alert(departamento);

if (departamento == "amazonas") {
  pantalla.innerHTML +=
    "la capital del Amazonas es  Leticia <a href='https://es.wikipedia.org/wiki/Leticia_(Colombia)#:~:text=Leticia%20es%20un%20municipio%20colombiano,capital%20del%20departamento%20del%20Amazonas.'>Clic aqui para mas información</a>";
} else if (departamento == "antioquia") {
  pantalla.innerHTML +=
    "la capital de Antioquia es Medellín <a href='https://es.wikipedia.org/wiki/Antioquia'>Clic aqui para mas información</a>";
} else if (departamento == "arauca") {
  pantalla.innerHTML +=
    "la capital de Arauca es Arauca <a href='https://es.wikipedia.org/wiki/Arauca_(Colombia)'>Clic aqui para mas información</a>";
} else if (departamento == "atlantico") {
  pantalla.innerHTML +=
    "la capital del Atlantico es Barranquilla <a href='https://es.wikipedia.org/wiki/Barranquilla'>Clic aqui para mas información</a>";
} else if (departamento == "bolivar") {
  pantalla.innerHTML +=
    "la capital del Bolivar es Cartagena <a href='https://es.wikipedia.org/wiki/Cartagena_de_Indias'>Clic aqui para mas información</a>";
} else if (departamento == "boyaca" || departamento == "boyacá") {
  pantalla.innerHTML +=
    "la capital de Boyacá es Tunja <a href='https://es.wikipedia.org/wiki/Tunja'>Clic aqui para mas información</a>";
} else if (departamento == "caldas") {
  pantalla.innerHTML +=
    "la capital de Caldas es Manizales <a href='https://es.wikipedia.org/wiki/Manizales'>Clic aqui para mas información</a>";
} else if (departamento == "caquetá" || departamento == "caqueta") {
  pantalla.innerHTML +=
    "la capital de Caquetá es Florencia <a href='https://es.wikipedia.org/wiki/Florencia_(Caquet%C3%A1)'>Clic aqui para mas información</a>";
} else if (departamento == "casanare") {
  pantalla.innerHTML +=
    "la capital de Casanare es Yopal <a href='https://es.wikipedia.org/wiki/Yopal'>Clic aqui para mas información</a>";
} else if (departamento == "cauca") {
  pantalla.innerHTML +=
    "la capital del Cauca es Popayán <a href='https://es.wikipedia.org/wiki/Popay%C3%A1n'>Clic aqui para mas información</a>";
} else if (departamento == "cesar") {
  pantalla.innerHTML +=
    "la capital del Cesar es Valledupar <a href='https://es.wikipedia.org/wiki/Valledupar'>Clic aqui para mas información</a>";
} else if (departamento == "choco" || departamento == "chocó") {
  pantalla.innerHTML +=
    "la capital del Chocó es Quibdo <a href='https://es.wikipedia.org/wiki/Quibd%C3%B3'>Clic aqui para mas información</a>";
} else if (departamento == "cordoba" || departamento == "córdoba") {
  pantalla.innerHTML +=
    "la capital de Córdoba es Montería <a href='https://es.wikipedia.org/wiki/Monter%C3%ADa'>Clic aqui para mas información</a>";
} else if (departamento == "cundinamarca") {
  pantalla.innerHTML +=
    "la capital de Cundinamarca es Bogotá <a href='https://es.wikipedia.org/wiki/Bogot%C3%A1'>Clic aqui para mas información</a>";
} else if (departamento == "guainia" || departamento == "guainía") {
  pantalla.innerHTML +=
    "la capital de Guainía es Puerto Inírida <a href='https://es.wikipedia.org/wiki/In%C3%ADrida'>Clic aqui para mas información</a>";
} else if (departamento == "guaviare") {
  pantalla.innerHTML +=
    "la capital de Guaviare es San José del Guaviare <a href='https://es.wikipedia.org/wiki/San_Jos%C3%A9_del_Guaviare'>Clic aqui para mas información</a>";
} else if (departamento == "huila") {
  pantalla.innerHTML +=
    "la capital del Huila es Neiva <a href='https://es.wikipedia.org/wiki/Neiva'>Clic aqui para mas información</a>";
} else if (departamento == "guajira" || departamento == "la guajira") {
  pantalla.innerHTML +=
    "la capital de la Guajira es Riohacha <a href='https://es.wikipedia.org/wiki/Riohacha'>Clic aqui para mas información</a>";
} else if (departamento == "magdalena") {
  pantalla.innerHTML +=
    "la capital de Magdalena es Santa Marta <a href='https://es.wikipedia.org/wiki/Santa_Marta_(Colombia)'>Clic aqui para mas información</a>";
} else if (departamento == "meta") {
  pantalla.innerHTML +=
    "la capital de Meta es Villavicencio <a href='https://es.wikipedia.org/wiki/Villavicencio'>Clic aqui para mas información</a>";
} else if (departamento == "nariño" || departamento == "narino") {
  pantalla.innerHTML +=
    "la capital del Narillo es Pasto <a href='https://es.wikipedia.org/wiki/Pasto_(Colombia)'>Clic aqui para mas información</a>";
} else if (
  departamento == "norte de santander" ||
  departamento == "nortedesantander" ||
  departamento == "santander"
) {
  pantalla.innerHTML +=
    "la capital del Norte de Santander es Cúcuta <a https://es.wikipedia.org/wiki/C%C3%BAcuta'>Clic aqui para mas información</a>";
} else if (departamento == "putumayo") {
  pantalla.innerHTML +=
    "la capital del Putumayo es Mocoa <a href='https://es.wikipedia.org/wiki/Mocoa'>Clic aqui para mas información</a>";
} else if (departamento == "quindio") {
  pantalla.innerHTML +=
    "la capital de Quindio es Armenia <a href='https://es.wikipedia.org/wiki/Armenia_(Quind%C3%ADo)'>Clic aqui para mas información</a>";
} else if (departamento == "risaralda") {
  pantalla.innerHTML +=
    "la capital de Risaralda es Pereira <a href='https://es.wikipedia.org/wiki/Pereira'>Clic aqui para mas información</a>";
} else if (
  departamento == "san andres" ||
  departamento == "san andres y providencia" ||
  departamento == "providencia"
) {
  pantalla.innerHTML +=
    "la capital de San Andres y Providencia es San Andres <a href='https://es.wikipedia.org/wiki/Isla_de_San_Andr%C3%A9s_(Colombia)'>Clic aqui para mas información</a>";
} else if (departamento == "santander") {
  pantalla.innerHTML +=
    "la capital de Santander es Bucaramanga <a href='https://es.wikipedia.org/wiki/Bucaramanga'>Clic aqui para mas información</a>";
} else if (departamento == "sucre") {
  pantalla.innerHTML +=
    "la capital de Sucre es  Sincelejo <a href='https://es.wikipedia.org/wiki/Sincelejo'>Clic aqui para mas información</a>";
} else if (departamento == "tolima") {
  pantalla.innerHTML +=
    "la capital de Tolima es  Ibagué <a href='https://es.wikipedia.org/wiki/Ibagu%C3%A9'>Clic aqui para mas información</a>";
} else if (departamento == "valle del cauca" || departamento == "valledelcauca" || departamento == "valle") {
  pantalla.innerHTML +=
    "la capital del Valle del Cauca es  Cali <a href='https://es.wikipedia.org/wiki/Cali'>Clic aqui para mas información</a>";
} else if (departamento == "vaupes" || departamento == "vaupés") {
  pantalla.innerHTML +=
    "la capital de Vaupés es  Mitú <a href='https://colombia.travel/en/mitu'>Clic aqui para mas información</a>";
} else if (departamento == "vichada") {
  pantalla.innerHTML +=
    "la capital del Vichada es  Puerto Carreño <a href=''>Clic aqui para mas información</a>";
} else {
  alert("Por favor ingrese un departamento valido");
}
