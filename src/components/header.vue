<template lang="html">
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">干货集中营</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                    <ul class="nav navbar-nav">
                        <li>
                            <router-link :to="{name: 'index'}">首页</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'history'}">历史</router-link>
                        </li>
                        <li class="dropdown">
                            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">分类 <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <router-link :to="{ name: 'category', params: { type: 1 }}">前端</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'category', params: { type: 6 }}">福利</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'category', params: { type: 2 }}">Android</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'category', params: { type: 3 }}">iOS</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'category', params: { type: 5 }}">App</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'category', params: { type: 7 }}">瞎推荐</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'category', params: { type: 4 }}">拓展资源</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="https://github.com/sinchang/vue-gank" target="_blank">Github</a></li>
                        <li><a @click.prevent="isShow=true">提交干货</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <modal v-show="isShow" @close="isShow=false"></modal>
    </div>
</template>

<script>
    import modal from './modal'

    export default {
        name: 'v-header',
        data() {
            return {
                isShow: false
            }
        },
        components: {
            modal
        }
    }
</script>