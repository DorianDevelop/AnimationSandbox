<template>
    <div class="content">
        <div class="card">
            <div class="front">
                <h3>Dorian Faure.</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.content{
    perspective: 1000px;
}

.content:hover .card{
    transform: rotate(0);
}

.card{
    width: 200px;
    height: 300px;

    border-radius: 25px;

    filter: drop-shadow(0 1px 5px #fcfcfc);
    overflow: hidden;

    color: black;

    transform: rotateZ(-10deg) rotateY(25deg) rotateX(50deg) ;
    transition: all 1.5s ease;

    animation: floating 2s infinite reverse ease;
}
.front{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCFCFC;
}

@keyframes floating{
    0%{
        scale: 1;
    }
    50%{
        scale: 1.01;
    }
    100%{
        scale: 1;
    }
}
</style>