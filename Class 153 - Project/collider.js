AFRAME.registerComponent("game-play", {
    schema: {
        elementId: {type: "string", default: "#coin1" }
    },

    update: function() {
        this.isCollided(this.data.elementId)
    },

    isCollided: function(elementId) {
        const element = document.querySelector(elementId)
        element.addEventListener("collide", (i)=>{
            if(elementId.includes("#coin")) {
                console.log(elementId + " collision")
            } 
        })
    }

})