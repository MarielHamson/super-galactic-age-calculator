import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { User } from "../src/birthday";

$(document).ready(function() {
  let user = new User();
  $("form#birthday").submit(function(event) {
    event.preventDefault();
    const dobYear = parseInt($("input#birthday-year").val());
    const dobMonth = parseInt($("input#birthday-month").val());
    const dobDay = parseInt($("input#birthday-day").val());
    user.getAgeInDays(dobYear, dobMonth, dobDay);
    $("#result").show();
  });
});