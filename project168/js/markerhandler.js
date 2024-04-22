AFRAME.registerComponent("markerhandler", {
    init: async function () {
  
      this.el.addEventListener("markerFound", () => {
        console.log("marker is found")
        this.handleMarkerFound();
      });
  
      this.el.addEventListener("markerLost", () => {
        console.log("marker is lost")
        this.handleMarkerLost();
      });
    },
    handleMarkerFound: function () {
      
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "flex";
  
      var orderButtton = document.getElementById("order-button");
      var orderSummmaryButtton = document.getElementById("order-summary-button");
  
      // Handling Click Events
      orderButttonButton.addEventListener("click", function () {
        swal({
          icon: "https://i.imgur.com/4NZ6uLY.jpg",
          title: "Thanks for order",
          text: " ",
          timer: 2000,
          button:false
        });
      });
  
      orderSummaryButtton.addEventListener("click", () => {
        swal({
          icon: "warning",
          title: "order summary",
          text: "work in progress"
        });
      });
    },
  
    handleMarkerLost: function () {
   
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "none";
    }
  });
  