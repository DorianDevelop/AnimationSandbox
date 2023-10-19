<template>
    <div class="content">
        <i>Fade, up and switch color</i>
        <div class="btn-container">
            <button>&lt;Button&gt;</button>
        </div>
        <div class="btn-container">
            <a href="#">&lt;A&gt;</a>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.content{
    padding-top: 3rem;

    .btn-container{
        padding: 1px;

        button, a{
            border: 1px solid rgba(253, 253, 253, 0.247);
            background: #252525;
            text-align: center;
            color: white;

            padding: 1rem 2.5rem;
            width: 150px;
            font-size: 1rem;

            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s ease, color 0.15s ease;

            display: inline-block;
        }
    }
    

    .btn-container:hover {
        button, a{
            opacity: 0.8;
            transform: translateY(-10px);
        }
    }

    button:active ,
    a:active{
        background: white;
        color: #252525;
    }
}
</style>