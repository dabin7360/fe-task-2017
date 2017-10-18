<template>
    <div>
        <div>
            <router-link to="/index">Home</router-link>
            <p class="txt">my color<span>hehe</span></p>
        </div>
        <div>
            <router-view></router-view>
        </div>
        <div class="ani-wrap">
            <div class="ani-room">
                <div class="ball"></div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data : ()=>{
            return {}
        },
        created : function () {
            let param = {
                "departureCityCode":"2500",
                "arrivalCityCode":"1615",
                "departureCityName":"上海",
                "arrivalCityName":"苏州",
                "departureDate":"2017-09-23"
            };
            //this.$store.dispatch('getInfoFromPhp', param)
        }
    }
    console.log('hahaha');
</script>

<style lang="scss" scoped>
    p{
        transform:translate(200px,0);
        color: red;
        span{
            color: #000;
        }
    }
    .ani-room{
        width: 500px;
        height: 60px;
        border:3px solid #dedede;
        position: relative;
        .ball{
            width: 35px;
            height:35px;
            border:2px solid #000;
            border-radius: 35px;
            position: absolute;
            left:0;
            bottom: 0;
        }
    }
    
    @keyframes scrollBall {
        
    }
</style>