<template>
  <div class="bg-white p-5 flex justify-start rounded shadow">
    <img src="https://dummyimage.com/90x90/000/fff" alt="profile image" class="self-start" />
    <div class="ml-4 flex flex-col justify-start flex-1">
      <h1 class="font-sans font-bold text-indigo-700 text-xs">{{company}}</h1>
      <h2 class="font-sans text-indigo-700 text-base mt-2">{{jobTitle}}</h2>
      <div class="flex mt-3 justify-between items-center">
        <div
          class="border border-indigo-700 rounded font-sans font-bold text-indigo-700 text-xs py-1 px-2 box-content"
        >{{jobType}}</div>
        <div class="hidden lg:block">
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
            <h3
              class="font-sans font-medium text-gray-500 text-xs ml-2 align-middle"
            >{{jobLocation}}</h3>
          </div>
          <div class="inline-flex ml-6">
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
            <span class="font-sans font-medium text-gray-500 text-xs ml-2">{{timeAgo}}</span>
          </div>
        </div>
      </div>

      <div class="flex mt-6 lg:hidden">
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
          <h3 class="font-sans font-medium text-gray-500 text-xs ml-2 align-middle">{{jobLocation}}</h3>
        </div>
        <div class="inline-flex ml-6">
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
          <span class="font-sans font-medium text-gray-500 text-xs ml-2">{{timeAgo}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "timeago.js";

export default {
  name: "JobCard",
  props: {
    company: {
      type: String,
      required: true
    },
    jobType: {
      type: String,
      required: true
    },
    jobTitle: {
      type: String,
      required: true
    },
    jobLocation: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    }
  },
  computed: {
    timeAgo() {
      return format(this.createdAt);
    }
  }
};
</script>

<style>
</style>
