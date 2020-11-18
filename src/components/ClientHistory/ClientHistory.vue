<template>
  <div class="client-history">
    <div class="issues">
      <h2>Resolved Issues <s-chip type="secondary" small>0</s-chip></h2>
      <ul>
        <li><s-chip large type="danger">Mobile App</s-chip></li>
        <li><s-chip large type="info">Transfers</s-chip></li>
        <li><s-chip large type="primary">Business</s-chip></li>
        <li><s-chip large type="success">Account</s-chip></li>
      </ul>
    </div>

    <div class="history-container">
      <div class="history" v-for="i in 3" :key="i">
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            nostrum, soluta libero deleniti
          </p>
          <small>21 Jun 2019</small>
        </div>
        <div class="action">
          <i class="mdi mdi-dots-vertical"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./ClientHistory.scss"/>