<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dialog">
                <div class="modal-header">
                    <span>{{title}}</span>
                    <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
                </div>
                <div class="modal-body">
                    <slot name='body'></slot>
                </div>
                <div class="modal-footer">
                    <a href="javascript:;" class="btn" v-if="btnType==1" v-on:click="$emit('submit')">{{confirmText}}</a>
                    <a href="javascript:;" class="btn" v-if="btnType==2" v-on:click="$emit('cancel')">{{cancelText}}</a>
                    <div class="btn-group" v-if="btnType==3">
                        <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{confirmText}}</a>
                        <a href="javascript:;" class="btn btn-default" v-on:click="$emit('cancel')">{{cancelText}}</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name:'modal',
    props:{
        modalType:{
            //弹框类型，小框，大框，表单类型，默认表单
            type:String,
            default:'form'
        },
        //弹框标题
        title:String,
        //按钮类型：1：只有确定，2取消 3确定+取消
        btnType:String,
        confirmText:{
            type:String,
            default:'确定'
        },
        cancelText:{
            type:String,
            default:'取消'
        },
        showModal:Boolean,
    }
}
</script>