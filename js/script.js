$(document).on({
    "contextmenu": function(e) {
        console.log("ctx menu button:", e.which); 

        // Stop the context menu
        e.preventDefault();
    },
    "mousedown": function(e) { 
        console.log("normal mouse down:", e.which); 
    },
    "mouseup": function(e) { 
        console.log("normal mouse up:", e.which); 
    }
});

$(document).ready(
    function(){
      $("a.contact").click(function(){
        $("div.modal").toggleClass("is-active");
      });
    }
  )

  $(document).ready(
    function(){
        $("button.modal-close").click(function(){
          $("div.modal").toggleClass("is-active");
        });
      }
  )
  