<template>
  <div class="flex flex-col lg:flex-row">
    <section>
      <button class="flex w-full items-center" @click.prevent="onBack">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 fill-current text-blue-500"
        >
          <path
            d="M2.35 11.65L5.14 8.86003C5.46 8.54003 6 8.76003 6 9.21003V11H20C20.55 11 21 11.45 21 12C21 12.55 20.55 13 20 13H6V14.79C6 15.24 5.46 15.46 5.15 15.14L2.36 12.35C2.16 12.16 2.16 11.84 2.35 11.65Z"
          />
        </svg>
        <span class="ml-3 font-sans-alt font-medium text-sm text-blue-500">Back to search</span>
      </button>
      <h1 class="mt-8 font-sans-alt font-bold text-sm uppercase text-gray-500">HOW TO APPLY</h1>

      <vue-simple-markdown
        :source="howToApply"
        class="mt-4 font-sans-alt font-medium text-sm text-indigo-700 lg:max-w-xs break-words"
        v-if="howToApply"
      ></vue-simple-markdown>
      <PuSkeleton width="100%" height="200px" v-else />
    </section>
    <section class="mt-8 lg:mt-0 lg:col-span-5 lg:ml-20">
      <div class="flex flex-col lg:flex-row items-start lg:items-center">
        <h1 class="font-sans font-bold text-2xl text-indigo-700">
          <PuSkeleton width="300px">{{title}}</PuSkeleton>
        </h1>
        <div
          class="border border-indigo-700 rounded font-sans font-bold text-indigo-700 text-xs py-1 px-2 inline-flex mt-1 lg:mt-0 lg:ml-5"
          v-if="jobType"
        >{{jobType}}</div>
        <PuSkeleton width="64px" height="28px" v-else />
      </div>

      <div class="flex mt-2 lg:mt-1">
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 fill-current text-gray-500"
        >
          <path
            d="M7.9925 0.5C3.8525 0.5 0.5 3.86 0.5 8C0.5 12.14 3.8525 15.5 7.9925 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 7.9925 0.5ZM8 14C4.685 14 2 11.315 2 8C2 4.685 4.685 2 8 2C11.315 2 14 4.685 14 8C14 11.315 11.315 14 8 14ZM7.835 4.25H7.79C7.49 4.25 7.25 4.49 7.25 4.79V8.33C7.25 8.5925 7.385 8.84 7.6175 8.975L10.73 10.8425C10.985 10.9925 11.315 10.9175 11.465 10.6625C11.6225 10.4075 11.54 10.07 11.2775 9.92L8.375 8.195V4.79C8.375 4.49 8.135 4.25 7.835 4.25Z"
          />
        </svg>
        <span class="font-sans font-medium text-gray-500 text-xs ml-2">
          <PuSkeleton width="100px">{{timeAgo}}</PuSkeleton>
        </span>
      </div>

      <div class="flex justify-start mt-8">
        <img
          :src="imageUrl"
          alt="profile image"
          class="self-start object-cover job-thumbnail"
          v-if="imageUrl"
        />
        <PuSkeleton width="45px" height="45px" v-else />

        <div class="ml-3">
          <div class="flex flex-col justify-between h-full">
            <h2 class="font-sans font-bold text-lg text-indigo-700">
              <PuSkeleton width="100px">{{company}}</PuSkeleton>
            </h2>
            <div class="inline-flex">
              <svg
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 fill-current text-gray-500"
              >
                <path
                  d="M8 0C3.86 0 0.5 3.36 0.5 7.5C0.5 11.64 3.86 15 8 15C12.14 15 15.5 11.64 15.5 7.5C15.5 3.36 12.14 0 8 0ZM7.25 13.4475C4.2875 13.08 2 10.56 2 7.5C2 7.035 2.06 6.5925 2.1575 6.1575L5.75 9.75V10.5C5.75 11.325 6.425 12 7.25 12V13.4475ZM12.425 11.5425C12.23 10.935 11.675 10.5 11 10.5H10.25V8.25C10.25 7.8375 9.9125 7.5 9.5 7.5H5V6H6.5C6.9125 6 7.25 5.6625 7.25 5.25V3.75H8.75C9.575 3.75 10.25 3.075 10.25 2.25V1.9425C12.4475 2.835 14 4.9875 14 7.5C14 9.06 13.4 10.4775 12.425 11.5425Z"
                />
              </svg>
              <h3 class="font-sans font-medium text-gray-500 text-xs ml-2 align-middle">
                <PuSkeleton width="100px">{{location}}</PuSkeleton>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <vue-simple-markdown
          :source="description"
          class="mt-4 font-sans font-normal text-base text-indigo-700 leading-normal"
          v-if="description"
        ></vue-simple-markdown>
        <PuSkeleton width="100%" height="300px" v-else />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { format } from "timeago.js";

export default {
  name: "JobPosting",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      createdAt: null,
      title: null,
      company: null,
      description: null,
      location: null,
      howToApply: null,
      imageUrl: null,
      jobType: null
    };
  },
  computed: {
    timeAgo() {
      if (this.createdAt) return format(this.createdAt);
      else return null;
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${this.id}.json?markdown=true`
      );
      // await Promise(resolve => {
      //   setTimeout(resolve, 10000);
      // });

      this.createdAt = data.created_at;
      this.title = data.title;
      this.company = data.company;
      this.location = data.location;
      this.description = data.description;
      this.howToApply = data.how_to_apply;
      this.imageUrl = data.company_logo;
      this.jobType = data.type;
    },
    onBack() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.job-thumbnail {
  width: 45px;
  height: 45px;
}
</style>
