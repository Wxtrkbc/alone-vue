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
      img(width="100%", :src="uploadCOSUrl" alt="")
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
        dialogVisible: false,
        uploadCOSUrl: ''
      }
    },
    components: {
      MainHeader: Header,
      MainFooter: Footer,
    },
    methods: {
      handleRemove(file, fileList) {
      },
      fnUploadRequest(file) {
        var _this = this;
        let cos = getTempCos();
        cos.sliceUploadFile({
          Bucket: "alone-1256956459",
          Region: "ap-chengdu",
          Key: file.file.name,
          Body: file.file,
        },
          function (err, data) {
            _this.uploadCOSUrl = 'https://' + data.Location
        });
      },

      fnUploadSuccess(data){
      },
    },
  }
</script>
