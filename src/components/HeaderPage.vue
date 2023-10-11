<template>
    <header>
        <a href="/">Home</a>
        <a href="#Portfolio">Portfolio</a>
    </header>
</template>

<script>
export default {
    name : 'HeaderPage'
}
</script>

<style scoped>
header{
    width: 100%;
    padding: 0.5rem 3rem;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

a{
    font-size: 1.1rem;
    border: 1px solid white;
    padding: 0.2rem 1rem;
}

a:hover{
    opacity: 0.5;
}

a:active{
    opacity: 0.9;
}
</style>