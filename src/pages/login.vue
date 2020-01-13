<template>
    <div class="login">
        <div class="container">
            <div class="login-header">
                <div class="login-logo"></div>
            </div>
            <div class="login-body">
                <form action="" class="login-box">
                    <div class="box-container">
                        <div class="login-type">
                            <span class="byAccount">账号登录</span>
                            <span class="byQRcode">扫码登录</span>
                        </div>
                        <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username">
                        <input type="password" placeholder="密码" v-model="password">
                        <input type="button" value="登录" @click="login">
                        <div class="body-info">
                            <div class="left-info" @click="register">
                                <a href="" >手机短信登录/注册</a>
                            </div>
                            <div class="right-info">
                                <a href="">立即注册</a><span>|</span>
                                <a href="">忘记密码</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="login-footer">
                <div class="login-link-box">
                    <a href="javascript:;">简体</a><span>|</span>
                    <a href="javascript:;">繁体</a><span>|</span>
                    <a href="javascript:;">English</a><span>|</span>
                    <a href="javascript:;">常见问题</a><span>|</span>
                    <a href="javascript:;">隐私政策</a>
                </div>
                <div class="login-copyright">
                    <span>小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</span>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return {
            username:'',
            password:'',
            userId:'',
            res:{}
        }
    },
    methods:{
        login(){
            let { username,password } = this;
            this.axios.post('/user/login',{
                username,
                password
            }).then((res)=>{
                this.res=res;
                this.$cookie.set('userId',res.id,{expires:'Session'});
                this.$store.dispatch('saveUserName',res.username);
                this.$router.push({
                    name:'index',
                    params:{
                        from:'login'
                    }   
                });
            })
        },
        register(){
            this.axios.post('/user/register',{
                username:'dusqi',
                password:'123456',
                email:'dusiqi@12.cn'
            }).then(()=>{
                this.$message.success('注册成功');
            })
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
.login{
    .container{
        display: block;
        .login-header{
            height: 112px;
            .login-logo{
                @include bgImg(200px,100px,'/imgs/login-logo.png');
                margin-top: 6px;
                margin-left: 20px;
            }
        }    
        .login-body{
            position: relative;
            @include bgImg(100%,576px,'/imgs/login-bg.jpg',auto);
            .login-box{
                width: 410px;
                height: 510px;
                position: absolute;
                top: 37px;
                right: 20px;
                background-color: #fff;
                .box-container{
                    width: 348px;
                    color: #999;
                    font-size: 14px;
                    margin: 0 auto;
                    .login-type{
                        text-align: center;
                        font-size: 24px;
                        margin-top: 39px;
                        margin-bottom: 50px;
                        .byAccount{
                            color: #f60;
                            padding-right: 35px;
                            border-right: 2px solid #d7d7d7;
                        }
                        .byQRcode{
                            margin-left: 35px;
                            color: #666;
                        }
                    }
                    input{
                        display: block;
                        outline: none;
                        height: 50px;
                        width: 100%;
                        border: 1px solid #e5e5e5;
                        margin-bottom: 20px;
                        padding-left: 18px;
                        box-sizing: border-box;
                        &::placeholder{
                            color: #999;
                        }
                        &[type='button']{
                            background-color: #f60;
                            color: #fff;
                            font-size: 16px;
                            margin-bottom: 6px;
                        }
                    }
                    .body-info{
                        @include flex();
                        .left-info{
                            a{
                                color: #f60;
                            }
                        }
                        .right-info{
                            a{
                                color: #999;
                                margin:0 7px;
                                vertical-align: middle;
                                &:last-child{
                                    margin-right: 0;
                                }
                            }
                        }
                    }
                }
                
            }
        }
        .login-footer{
            display: block;
            height: 391px;
            padding-top: 250px;
            box-sizing: border-box;
            text-align: center;
            font-size: 14px;
            color: #333;
            .login-link-box{
                margin-bottom: 14px;
                a{
                    color: #333;
                    margin: 0 15px 0 9px;
                }
            }
        }
    }
}
</style>