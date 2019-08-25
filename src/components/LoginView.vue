<template>
  <div class="main-navbar sticky bg-white">
    <div class="main-content-container container-fluid px-4">
      <!-- Page Header -->
      <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
          <span class="text-uppercase page-subtitle">Overview</span>
          <h3 class="page-title">User Profile</h3>
        </div>
      </div>
      <!-- End Page Header -->
      <!-- Default Light Table -->
      <div class="row">
        <div class="col-lg-8">
          <div class="card card-small mb-4">
            <div class="card-header border-bottom">
              <h6 class="m-0">Account Details</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-3">
                <div class="row">
                  <div class="col">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="userId">ID</label>
                          <input
                            type="text"
                            v-model="id"
                            class="form-control"
                            id="id"
                            placeholder="ID"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="fePassword">Password</label>
                          <input
                            type="password"
                            v-model="password"
                            class="form-control"
                            id="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-12">
                          <label for="feDescription">Description</label>
                          <textarea class="form-control" name="feDescription" rows="5" readonly>Please, Log In for this Webpage</textarea>
                        </div>
                      </div>
                      <button @click.prevent="getUserLogin" class="btn btn-accent">Create Account</button>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      username: "",
      email: "",
      password: "",
      address: ""
    };
  },
  methods: {
    async getUserLogin() {
      await this.$store.dispatch("FETCH_LOGINS", {
        id: this.id,
        password: this.password
      });
      await this.$router.push("/main");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>