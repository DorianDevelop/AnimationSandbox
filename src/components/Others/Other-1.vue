<template>
    <div class="content">
        <div class="scratch-container">
            <div class="scratch-front"></div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Other-1",
}
</script>

<style scoped>
.scratch-container{
    width: 350px;
    height: 50px;
    border: 1px dashed white;
    border-radius: 25px;
    background: #353535;
    position: relative;

    overflow: hidden;
}

.scratch-front{
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: white;

    transition: transform 1s ease;
}

.scratch-container:hover .scratch-front{
    transform: translateX(100%);
}
</style>