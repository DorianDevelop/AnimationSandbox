<template>
	<div class="content">
		<i>Smooth navigation</i>
		<div class="navigation">
            <div class="barre" :style="{'left' : leftPos + 'px'}"></div>
			<div class="item" @click="makeItActive(0)" :class="{ active: (selectedId == 0) }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .913-.593.998.998 0 0 0-.17-1.076l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14zm5.949-.316C8.98 13.779 9.762 16 12 16c2.269 0 3.042-2.287 3.05-2.311l1.9.621C16.901 14.461 15.703 18 12 18s-4.901-3.539-4.95-3.689l1.899-.627z"></path></svg>
                <p class="name">Home</p>
            </div>
            <div class="item" @click="makeItActive(1)" :class="{ active: (selectedId == 1) }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M11 6H9v3H6v2h3v3h2v-3h3V9h-3z"></path><path d="M10 2c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path></svg>
                <p class="name">Loupe</p>
            </div>
            <div class="item" @click="makeItActive(2)" :class="{ active: (selectedId == 2) }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v7z"></path><circle cx="9.5" cy="11.5" r="1.5"></circle><circle cx="14.5" cy="11.5" r="1.5"></circle></svg>
                <p class="name">Chat</p>
            </div>
            <div class="item" @click="makeItActive(3)" :class="{ active: (selectedId == 3) }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v7z"></path><circle cx="9.5" cy="11.5" r="1.5"></circle><circle cx="14.5" cy="11.5" r="1.5"></circle></svg>
                <p class="name">Chat</p>
            </div>
		</div>
	</div>
</template>

<script>
export default {
    data(){
        return{
            selectedId : 0,
            leftPos : 61
        }
    },
    methods:{
        makeItActive(id){
            this.selectedId = id
            
            let left = (61 + (70 + 10)*id)
            this.leftPos = left
        }
    }
};
</script>

<style scoped>
.navigation{
    color: rgb(160, 160, 160);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 100%;
    height: 100%;

    padding: 1rem 3rem;
    position: relative;
}
.barre{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: 2px;
    width: 70px;
    background: white;
    transition: all 0.3s ease;
}
.item{
    display: flex;
    flex-direction: column;

    align-items: center;
    cursor: pointer;

    transition: all 0.3s ease;

    width: 70px;
}
svg{
    fill: rgb(160, 160, 160);
    transition: all 0.3s ease;
}

.active{
    color: white;
}
.active svg{
    fill: white;
}

</style>
