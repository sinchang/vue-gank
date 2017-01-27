<template lang="html">
  <div class="">
    <div class="modal">
      <div class="modal-dialog modal-lg">
        <form class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="$emit('close')">×</button>
            <h4 class="modal-title">提交干货</h4>
          </div>
          <div class="modal-body">
            <div class="form-horizontal">
              <fieldset>
                <div class="form-group">
                  <label for="url" class="col-lg-2 control-label">网页地址：</label>
                  <div class="col-lg-10">
                    <input type="url" class="form-control" id="url" placeholder="请输入想要提交的网页地址" autocomplete="off" v-model="url">
                  </div>
                </div>
                <div class="form-group">
                  <label for="desc" class="col-lg-2 control-label">内容描述：</label>
                  <div class="col-lg-10">
                    <textarea class="form-control" rows="3" id="desc" v-model='desc'></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label for="username" class="col-lg-2 control-label">您的网络ID：</label>
                  <div class="col-lg-10">
                    <input type="text" class="form-control" id="username" placeholder="请输入您的网络ID" autocomplete="off" v-model='who'>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-2 control-label">干货类型</label>
                  <div class="col-lg-10">
                    <select class="form-control" v-model='type'>
                                            <option value="Android">Android</option>
                                            <option value="iOS">iOS</option>
                                            <option value="休息视频">休息视频</option>
                                            <option value="福利">福利</option>
                                            <option value="拓展资源">拓展资源</option>
                                            <option value="前端">前端</option>
                                            <option value="瞎推荐">瞎推荐</option>
                                            <option value="App">App</option>
                                        </select>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('close')">取消</button>
            <button type="button" class="btn btn-primary" @click="submitForm">提交</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import util from '../common/js/util'
  import constant from '../common/js/constant'

  export default {
    name: 'modal',
    data() {
      return {
        url: '',
        desc: '',
        who: '',
        type: '',
        debug: false
      }
    },
    methods: {
      submitForm() {
        if (!util.checkUrl(this.url)) {
          alert('url 错误');
          return;
        }

        let data = {
          url: this.url,
          desc: this.desc,
          who: this.who,
          type: this.type,
          debug: this.debug
        }

        axios.post(constant.APIURL + 'add2gank', data)
          .then(function (res) {
            if (res.data.error) {
              alert(res.data.msg);
              return;
            }
            alert('提交成功！');
            $emit('close');
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style lang="css">

</style>
