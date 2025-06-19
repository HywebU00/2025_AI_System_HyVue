<template>
  <div class="editorUi">
    <ul>
      <li>
        <v-btn variant="text" :ripple="false" class="bold"></v-btn>
      </li>
      <li>
        <v-btn variant="text" :ripple="false" class="italic"></v-btn>
      </li>
      <li>
        <v-btn variant="text" :ripple="false" class="list_bullet"></v-btn>
      </li>
      <li>
        <v-btn variant="text" :ripple="false" class="list_ordered"></v-btn>
      </li>
      <li>
        <v-btn variant="text" :ripple="false" class="link"></v-btn>
      </li>
      <li>
        <v-btn variant="text" :ripple="false" class="image"></v-btn>
      </li>
      <li>
        <v-btn variant="text" :ripple="false" class="emoji"></v-btn>
      </li>
    </ul>
    <v-textarea
      class="textArea"
      label=""
      single-line
      rows="1"
      hide-details="auto"
      variant="solo"
    ></v-textarea>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
