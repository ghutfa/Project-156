

AFRAME.registerComponent("terrain-moving", {
    schema:{
        speedOfPosition:{type: "number", default: 0},
        speedOfRotation:{type: "number", default: 0}
    },

    init: function(){
        window.addEventListener("keydown", (e)=>{
            this.data.speedOfPosition = this.el.getAttribute("position")
            this.data.speedOfRotation = this.el.getAttribute("rotation")
            terrainPosition = this.data.speedOfPosition
            terrainRotation = this.data.speedOfRotation
            if (e.key === "ArrowLeft") {
                if (terrainPosition.x > -5){
                    terrainPosition.x = terrainPosition.x - 0.1
                    this.el.setAttribute("position", terrainPosition)
                }
            }

            if (e.key === "ArrowRight") {
                if (terrainPosition.x < 5){
                    terrainPosition.x = terrainPosition.x + 0.1
                    this.el.setAttribute("position", terrainPosition)
                }
            }

            if (e.key === "ArrowDown") {
                if (terrainPosition.y > -2.5){
                    terrainPosition.y = terrainPosition.y - 0.1
                    this.el.setAttribute("position", terrainPosition)
                }
            }

            if (e.key === "ArrowUp") {
                if (terrainPosition.y < 2.5) {
                    terrainPosition.y = terrainPosition.y + 0.1
                    this.el.setAttribute("position", terrainPosition)
                }
            }

            if (e.key === "s") {
                if (terrainPosition.z > -2.5) {
                    terrainPosition.z = terrainPosition.z - 0.1
                    this.el.setAttribute("position", terrainPosition)
                }
            }

            if (e.key === "w") {
                if (terrainPosition.z < 2.5) {
                    terrainPosition.z = terrainPosition.z + 0.1
                    this.el.setAttribute("position", terrainPosition)
                }
            }

            if (e.key === "e")  {
                    terrainRotation.y = terrainRotation.y + 5
                    this.el.setAttribute("rotation", terrainRotation)
                
            }

            if (e.key === "q") {
                terrainRotation.y = terrainRotation.y - 5
                this.el.setAttribute("rotation", terrainRotation)
                
            }
        })
    }
})