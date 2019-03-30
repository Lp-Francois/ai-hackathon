<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span class="navbar-item" href="#">
          <img src="~@/assets/logo.png" height="100">
        </span>
      </div>
      
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <span class="navbar-item brand">
            
          </span>
          <!--
          <a class="navbar-item">
            Documentation
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  nav {
    background-color: white;
    border-top: 5px solid #00d1b2;
    -moz-box-shadow:    3px 3px 5px 4px #ccc;
    -webkit-box-shadow: 3px 3px 5px 4px #ccc;
    box-shadow:         3px 3px 5px 4px #ccc;
  }

  .brand {
    color: grey;
  }
  
</style>
