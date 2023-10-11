<template>
    <div class="content">
        <i>Round navigation infinite</i>
        <div class="choices-container">
            <div class="choice" v-bind:class="getRanked(choice.position)" v-for="choice in choices" v-bind:key="choice.id" v-bind:style="{ 'background-color': choice.color }" @click="makeItSelected(choice.position)"></div>
            <p v-bind:style="{ 'color': getSelectedElementColor() }">{{ getSelectedElementColor() }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name : "Menu-2",
    data() {
        return {
            selectedId : 5,
            choices : [
                {"id" : 0, "color" : "red", "position" : 1},
                {"id" : 1, "color" : "blue", "position" : 2},
                {"id" : 2, "color" : "yellow", "position" : 3},
                {"id" : 3, "color" : "purple", "position" : 4},
                {"id" : 4, "color" : "orange", "position" : 5},
                {"id" : 5, "color" : "pink", "position" : 6},
                {"id" : 6, "color" : "#cc99ff", "position" : 7},
                {"id" : 7, "color" : "brown", "position" : 8},
                {"id" : 8, "color" : "white", "position" : 9},
            ]
        };
    },
    methods:{
        makeItSelected(id){
            let diff = id - this.selectedId
            for(let i = 0; i < this.choices.length; i++){
                this.choices[i].position -= diff
                if(this.choices[i].position > this.choices.length){
                    let newdiff = this.choices[i].position - this.choices.length
                    this.choices[i].position = newdiff
                }
            }
            console.log(this.choices);
        },
        getRanked(id){
            switch(id){
                case this.selectedId - 2:
                    return "choice-1";
                case this.selectedId - 1:
                    return "choice-2";
                case this.selectedId:
                    return "choice-3";
                case this.selectedId + 1:
                    return "choice-4";
                case this.selectedId + 2:
                    return "choice-5";
            }
            
            if(id > this.selectedId + 2)
                return "choice-null-gauche";
            if(id < this.selectedId - 2)
                return "choice-null-droit";

            return "choice-null";
        },
        getSelectedElementColor(){
            let color = null;
            this.choices.forEach(choice => {
                if(choice.position == this.selectedId){
                    color = choice.color
                }
            })
            return color
        }
    }
}
</script>

<style scoped>
.choices-container{
    overflow: hidden;
    position: relative;

    width: 100%;
    height: 70px;
}
.choice{
    width: 40px;
    height: 40px;

    position: absolute;
    top: calc(30% - 20px);
    left: calc(50% - 20px);
    opacity: 0.8;

    cursor: pointer;

    transition: all 0.25s ease;
}

.choice-1{
    transform: translateX(-178px) translateY(50px);
    scale: 0.7;
}
.choice-2{
    transform: translateX(-75px) translateY(15px);
    scale: 0.9;
}

.choice-3{
    transform: translateX(0) translateY(0);
    scale: 1.1;
    opacity: 1;
}

.choice-4{
    transform: translateX(75px) translateY(15px);
    scale: 0.9;
}
.choice-5{
    transform: translateX(178px) translateY(50px);
    scale: 0.7;
}
.choice-null{
    transform: translateY(-150px);
}
.choice-null-gauche{
    transform: translateX(180px) translateY(150px);
    scale: 0.5;
}
.choice-null-droit{
    transform: translateX(-180px) translateY(150px);
    scale: 0.5;
}

p{
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}
</style>