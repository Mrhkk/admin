<!--  -->
<template>
  <div class="login_container">
    <!-- 三颗流星 -->
    <span class="shooting-star gif1"></span>
    <span class="shooting-star gif2"></span>
    <span class="shooting-star gif3"></span>
    <span class="shooting-star gif4"></span>
    <span class="shooting-star gif5"></span>
    <span class="shooting-star gif6"></span>
    <span class="shooting-star gif7"></span>
    <!-- 三颗流星 end-->
    <transition name="form-fade" mode="in-out">
      <div class="login_container" v-if="showLogin">
        <div class="login_box">
          <div class="avatar_box">
            <img src="../assets/logo.png" alt />
          </div>
          <el-form
            label-width="0px"
            class="login_form"
            :model="loginForm"
            :rules="loginRules"
            ref="loginFormRef"
          >
            <el-form-item prop="username">
              <el-input
                prefix-icon="el-icon-user-solid"
                v-model="loginForm.username"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                prefix-icon="el-icon-s-goods"
                v-model="loginForm.password"
                type="password"
              ></el-input>
            </el-form-item>
            <el-form-item class="btns">
              <el-button type="primary" @click="login">登录</el-button>
              <el-button type="info" @click="resetLoginForm">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import router, { asyncRouterMap } from "../router";
import { gen, random } from "@/utils/util";
export default {
  data() {
    return {
      add: null,
      gen: null,
      showLogin: false,
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    params() {
      return new Promise((reslove, reject) => {
        let d = 2;
        setTimeout(() => {
          if (d == 1) {
            reslove(1);
          } else {
            reject(2);
          }
        }, 1000);
      });
    },
    // 封装随机数方法
    randomDistance(max, min) {
      var distance = Math.floor(Math.random() * (max - min + 1) + min);
      return distance;
    },
    resetLoginForm() {
      // var g = gen(1);
      // g.next();
      // console.log(g)
      // g.throw("出错了");
      // setTimeout(() => {
      //   console.log(1);
      // }, 500);
      // setTimeout(() => {
      //   console.log(2);
      // }, 100);
      // this.$refs.loginFormRef.resetFields();
      // this.gen = this.kai()
      // this.gen.next()
      // this.add = this.add2()
      // console.log(this.add.next(10))
      let num = 10;switch(num){case num >9 && num<11: console.log(2); break; default: console.log(1)}
    },
    * kai() {
      yield setTimeout(() => {console.log(1); this.gen.next()}, 500);
      setTimeout(() => {
        console.log(2);
      }, 100);
    },
    * add2 () {
       console.log('start')
       let x = yield '2'
       console.log('one' + x)
       let y = yield '3'
       console.log('two' + y)
       return x + y
    },

    login() {
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) return;
        console.log(valid);
        this.ajax("/login/doLogin", {
          name: this.userName,
          password: this.userPwd
        }).then(res => {
          this.log("login:", res);
          if (res.code === 200) {
            sessionStorage.setItem("voteToken", res.data.token);
            sessionStorage.setItem("voteUserName", res.data.obj.userName);
            this.$router.push("/firstPage");
          } else {
            this.$message.error("异常：" + res.msg);
          }
        });
        router.addRoutes(asyncRouterMap);
        this.$router.push("/home");
      });
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    // var a = [];
    // for (var i = 0; i < 5; i++) {
    //   a[i] = function() {
    //     console.log(i);
    //   };
    // }
    // a[2]();
    var a; if(true) {a=5; function a(){} a=0; console.log(a)}console.log(a)
    console.log("第一次循环主执行栈开始1");

    setTimeout(function() {
      console.log("第二次循环开始，宏任务队列的第: :个宏任务执行中5");
      new Promise(function(resolve) {
        console.log("宏任务队列的第一个宏任务的微任务继续执行6");
        resolve();
      }).then(function() {
        console.log("第二次循环的微任务队列的微任务执行7");
      });
    }, 0);

    new Promise(function(resolve) {
      console.log("第一次循环主执行栈进行中2...");

      resolve();
    }).then(function() {
      console.log("第一次循环微任务，第一-次循环结束4");

      setTimeout(function() {
        console.log("第二次循环的宏任务队列的第二个宏任务执行8");
      });
    });

    console.log("第一次循环主执行栈完成3");
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.showLogin = true;
    this.params().then((res) => {
       console.log(res)
    })
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.login_container {
  background-color: #2b4b6b;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.avatar_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s ease;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translateY(-50px);
  opacity: 0;
}

@keyframes shooting-star {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(30deg);
  }
  10%,
  100% {
    opacity: 0;
    transform: translate3d(1000px, 604px, 0) rotate(30deg);
  }
}
.shooting-star {
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 10px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background: #fff;
  background: url("../assets/shooting-star.png") center center no-repeat;
  background-size: 100% 100%;
  transform: rotate(30deg);
  z-index: 10000;
}
.gif1 {
  animation: 7s shooting-star ease-in infinite;
}
.gif2 {
  animation: 4s shooting-star ease-in infinite;
  top: 20px;
  left: 560px;
}
.gif3 {
  animation: 6s shooting-star ease-in infinite;
  top: 500px;
  left: 100px;
}
.gif4 {
  animation: 5s shooting-star ease-in infinite;
  top: 60px;
  left: 160px;
}
.gif5 {
  animation: 4s shooting-star ease-in infinite;
  top: 100px;
  left: 60px;
}
.gif6 {
  animation: 6s shooting-star ease-in infinite;
  top: 400px;
  left: 200px;
}
.gif7 {
  animation: 5s shooting-star ease-in infinite;
  top: 600px;
  left: 30px;
}
</style>
