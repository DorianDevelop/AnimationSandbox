<template>
    <div class="content">
        <i>Incoming switch</i>
        <div class="btn-container">
            <button>&lt;Button&gt;</button>
        </div>
        <div class="btn-container">
            <a href="#">
                &lt;A&gt;
            </a>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.content{
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    position: relative;
    padding-top: 3rem;

    .btn-container{

        transition: all 2s ease;
        background: linear-gradient(90deg, #ffffff 50%, #252525 50%); 
        background-size: 300px;
        background-position: -150px;

        &:hover {
            background-position: 0px;
            button, a{
                background-position: 0px;
            }
        }

        button, a{
            border: 1px solid rgba(253, 253, 253, 0.247);
            background: linear-gradient(90deg, #252525 50%, #ffffff 50%); 
            background-size: 300px;
            background-position: -150px;
            text-align: center;
            color: transparent;
            background-clip: text;

            padding: 1rem 2.5rem;
            width: 150px;
            font-size: 1rem;

            text-decoration: none;
            cursor: pointer;
            transition: all 2s ease;

            display: inline-block;
        }
    }
}
</style>