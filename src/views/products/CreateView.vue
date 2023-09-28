<template>
  <v-row>
    <v-col cols="12" lg="8">
      <div class="bg-white px-5 py-7">
        <form @submit.prevent="submit">
          <div class="mb-4">
            <v-text-field
              v-model="form.name"
              label="Product Name"
              class="border-[1px] rounded-none border-gray-400"
              outlined
            ></v-text-field>
          </div>
          <div class="mb-4">
            <v-textarea
              v-model="form.description"
              label="Description"
              outlined
              class="border-[1px] rounded-none border-gray-200"
            ></v-textarea>
          </div>
          <v-select
            v-model="form.status"
            :items="['Active', 'Disabled']"
            label="Select"
            class="border-[1px] rounded-none border-gray-400"
          ></v-select>
          <div class="mt-5">
            <v-btn class="me-4 bg-[#0F60FF] text-white" type="submit"> submit </v-btn>
            <v-btn> Cancel </v-btn>
          </div>
        </form>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ProductCreate",
  data() {
    return {
      form: {
        name: "",
        description: "",
        status: "Active",
      },
      errors: {},
    };
  },
  methods: {
    submit() {
      alert("Product title:", this.form.name);
    },
  },
};
</script>

<style></style>
