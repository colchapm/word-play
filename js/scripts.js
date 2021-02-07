$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const str = $("input#sentence").val();


    const words = str.split(" ")

    // let bigWords = [];
    
    const bigWords = words.filter(function(element) {
      if (element.length >= 3) {
        return element
      } else {}
    });

    // words.forEach(function(element) {
    //   if (element.length >= 3) {
    //     bigWords.push(element);
    //   } else {}
    // });

    let bigWordsReverse = bigWords.reverse();

    $("#output").text(bigWordsReverse.join(" "));

  });
});