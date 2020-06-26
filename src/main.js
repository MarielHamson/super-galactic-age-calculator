import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { User } from "../src/birthday";
import { Planet } from "../src/planet-name";

$(document).ready(function() {
  let planet = new Planet(planet)
  let user = new User();
  $("form#birthday").submit(function(event) {
    event.preventDefault();
    const dobYear = parseInt($("input#birthday-year").val());
    const dobMonth = parseInt($("input#birthday-month").val());
    const dobDay = parseInt($("input#birthday-day").val());
    const planet = parseInt($("#planet").val());
    user.getAgeInDays(dobYear, dobMonth, dobDay);
    $("#result").show();
  });
});