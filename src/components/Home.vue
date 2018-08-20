<template lang="pug">
  .home
    main-header
    router-view
    main-footer

    .upload
      el-upload(
      :action="uploadUrl",
      auto-upload=false,
      :on-remove="handleRemove",
      :http-request="fnUploadRequest",
      :on-success="fnUploadSuccess",
      list-type="picture-card")
        i(class="el-icon-plus")
      el-dialog(:visible.sync="dialogVisible")
        img(width="100%", :src="dialogImageUrl" alt="")
        <!--el-button(size="small" type="primary") 点击上传-->
        <!--div(slot="tip" class="el-upload__tip") 只能上传jpg/png文件，且不超过500kb-->
</template>

<script>

  import Header from './layout/Header.vue'
  import Footer from './layout/Footer.vue'
  import {getTempCos} from '../common/utils'
  export default {
    name: 'home',
    data () {

      return {
        msg: 'home',
        uploadUrl: '',
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    components: {
//      ElButton, ElUpload,
      MainHeader: Header,
      MainFooter: Footer,
    },
    methods: {
      handleRemove(file, fileList) {
      },

      fnUploadRequest(file) {
        let cos = getTempCos()
        cos.sliceUploadFile({
          Bucket: "alone-1256956459",
          Region: "ap-chengdu",
          Key: file.file.name,
          Body: file.file,
          onHashProgress: function (progressData) {
            console.log('校验中', JSON.stringify(progressData));
          },
          onProgress: function (progressData) {
            console.log('上传中', JSON.stringify(progressData));
          },
        }, function (err, data) {
          console.log(err, data);
        });
      },

      fnUploadSuccess(data){
          console.log(data, '1')
      },
    },
  }
</script>
