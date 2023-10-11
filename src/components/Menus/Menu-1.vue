<template>
    <div class="content">
        <i>Round navigation</i>
        <div class="choices-container">
            <div class="choice" v-bind:class="getRanked(choice.id)" v-for="choice in choices" v-bind:key="choice.id" v-bind:style="{ 'background-color': choice.color }" @click="makeItSelected(choice.id)"></div>
            <p v-bind:style="{ 'color': choices[selectedId-1].color }">{{ choices[selectedId-1].color }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name : "Menu-1",
    data() {
        return {
            selectedId : 5,
            choices : [
                {"id" : 1, "color" : "red"},
                {"id" : 2, "color" : "blue"},
                {"id" : 3, "color" : "yellow"},
                {"id" : 4, "color" : "purple"},
                {"id" : 5, "color" : "orange"},
                {"id" : 6, "color" : "pink"},
                {"id" : 7, "color" : "#cc99ff"},
                {"id" : 8, "color" : "brown"},
                {"id" : 9, "color" : "white"},
            ]
        };
    },
    methods:{
        makeItSelected(id){
            console.log(id);
            this.selectedId = id
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