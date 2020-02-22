<template>
  <div class="login-wrap">
    <div class="login-box">
      <div class="title-box">
        <img src="./images/logo.png" alt class="logo" />
        <span class="left-title">黑马面面</span>
        <span class="line"></span>
        <span class="right-title">用户登录</span>
      </div>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="43px"
        class="demo-ruleForm"
      >
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入手机号" prefix-icon="el-icon-user"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>

        <el-form-item prop="code">
          <el-row>
            <el-col :span="17">
              <el-input v-model="ruleForm.code" placeholder="请输入验证码" prefix-icon="el-icon-key"></el-input>
            </el-col>
            <el-col :span="7">
              <img :src="codeUrl" alt class="code" @click="getCode">
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item prop="checked">
          <el-checkbox v-model="ruleForm.checked" class="agree">
            <span class="agree-inner">
              我已阅读并同意
              <el-link type="primary">用户协议</el-link>
              <el-link type="primary">隐私条款</el-link>
            </span>
          </el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="btn-box">登录</el-button>
          <el-button type="primary" @click="resetForm('ruleForm')" class="btn-box">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img src="./images/login_banner_ele .png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
        // 验证码
        codeUrl:process.env.VUE_APP_URL+'/captcha?type=sendsms',
      ruleForm: {
        phone: "",
        password: "",
        code: "",
        checked: false
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
           {pattern:/0?(13|14|15|18|17)[0-9]{9}/,message:'手机号码格式不正确',trigger:'blur'}
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 12, message: "密码是5-12位数之间", trigger: "blur" }
        ],
        code: [
            { required: true, message: "请输入验证码", trigger: "blur" },
        ],
        checked: [
          { pattern: /true/, message: "请勾选同意协议", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("登录成功!");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getCode(){
        this.codeUrl=process.env.VUE_APP_URL+'/captcha?type=sendsms'+'&t='+Date.now()
    }
  }
};
</script>

<style lang="less">
.login-wrap {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  .login-box {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    padding-right: 41px;
    box-sizing: border-box;
  }
  .title-box {
    display: flex;
    align-items: center;
    margin-top: 48px;
    margin-left: 48px;
    margin-bottom: 29px;
    .logo {
      width: 22px;
      height: 17px;
      margin-right: 16px;
    }
    .left-title {
      font-size: 22px;
      margin-right: 14px;
    }
    .line {
      width: 1px;
      height: 28px;
      background: rgba(199, 199, 199, 1);
      margin-right: 12px;
    }
    .right-title {
      font-size: 21px;
    }
  }
  .code {
    width: 100%;
    height: 42px;
    vertical-align: top;
  }
  .agree {
    display: flex;
    .agree-inner {
      display: flex;
      align-items: center;
    }
  }
  .btn-box {
    width: 100%;
    &:nth-child(2) {
      margin-left: 0;
      margin-top: 26px;
    }
  }
}
</style>