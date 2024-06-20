AFRAME.registerComponent("coin", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables
        var posX = Math.random() * 100 + -50;
        var posY = Math.random() * 60 + -10;
        var posZ = Math.random() * 1 ;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createRings(id, position);
      }
    },
  
    createRings: function (id, position) {
      var terrainEl = document.querySelector("#terrain");
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id", id);
      ringEl.setAttribute("material", "color", "#ff9100");
      ringEl.setAttribute("position", position);
      ringEl.setAttribute("geometry", { primitive: "torus", radius: 4

        
       });
      //set the static body attribute of physics system
      ringEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 2,
      });
  
      ringEl.setAttribute("game-play", {
        elementId: `#${id}`,
      });
  
      terrainEl.appendChild(ringEl);
    },
  });