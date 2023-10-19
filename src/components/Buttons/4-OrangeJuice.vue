<template>
    <div class="content">
        <i>Orange juice</i>
        <div class="btn-container">
            <button>&lt;Button&gt;</button>
        </div>
        <div class="btn-container">
            <a href="#">&lt;A balise&gt;</a>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.content{
    padding-top: 3rem;
    background: white;
}
.content i{
    color: #e04903 !important;
    z-index: 10;
}
.btn-container{
    padding: 1px;
}
button, a{
    background: #252525;
    text-align: center;
    color: white;

    width: 150px;
    height: 48px;
    border-radius:24px;
    font-size: 1rem;

    text-decoration: none;
    cursor: pointer;
    transition: all 0.5s ease;

    display: flex;
    align-items: center;
    justify-content: center;
    gap:0.5rem;
    border: none;

    position: relative;
}
a::before{
    content:'->';
    display: inline-block;
    margin-left: -1.5rem;
    opacity: 0;

    transition: opacity 0.2s ease, margin-left 0.5s ease;
}
button:hover, a:hover{
    background: #e04903;
    width: 170px;
}

a:hover::before{
    opacity: 1;
    margin-left: -0.5rem;
}
</style>