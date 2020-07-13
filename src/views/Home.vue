<template>
  <div class="home">
    <div>
      <div class="relative">
        <img src="@/assets/backgroundImg.png" alt="background" class="h-32 rounded" />
        <div
          class="flex shadow p-1 align-center bg-white rounded absolute search-absolute mx-5 inset-x-0"
        >
          <div class="align-bottom">
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
          </div>
          <input
            class="w-full px-2 text-indigo-700 leading-tight focus:outline-none border-none bg-white text-xs"
            id="job"
            type="text"
            placeholder="City, state, zip code or country"
          />
          <button
            class="bg-blue-500 font-sans font-medium text-base text-white px-6 py-2 rounded"
          >Search</button>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row">
      <section>
        <div class="mt-8">
          <label class="container font-sans-alt font-medium text-sm text-indigo-700">
            <input type="checkbox" />
            <span class="ml-3">Full time</span>
          </label>
        </div>
        <div class="mt-8">
          <h1 class="uppercase font-sans-alt font-bold text-sm text-gray-500">Location</h1>
          <div class="flex shadow p-3 align-center bg-white rounded mt-3 max-w-screen-lg lg:w-96">
            <svg
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 fill-current text-gray-500 align-middle"
            >
              <path
                d="M8 0C3.86 0 0.5 3.36 0.5 7.5C0.5 11.64 3.86 15 8 15C12.14 15 15.5 11.64 15.5 7.5C15.5 3.36 12.14 0 8 0ZM7.25 13.4475C4.2875 13.08 2 10.56 2 7.5C2 7.035 2.06 6.5925 2.1575 6.1575L5.75 9.75V10.5C5.75 11.325 6.425 12 7.25 12V13.4475ZM12.425 11.5425C12.23 10.935 11.675 10.5 11 10.5H10.25V8.25C10.25 7.8375 9.9125 7.5 9.5 7.5H5V6H6.5C6.9125 6 7.25 5.6625 7.25 5.25V3.75H8.75C9.575 3.75 10.25 3.075 10.25 2.25V1.9425C12.4475 2.835 14 4.9875 14 7.5C14 9.06 13.4 10.4775 12.425 11.5425Z"
              />
            </svg>
            <input
              class="w-full px-2 text-indigo-700 leading-tight focus:outline-none border-none bg-white text-xs"
              id="location"
              type="text"
              placeholder="City, state, zip code or country"
            />
          </div>
        </div>
        <div class="flex flex-col mt-6 px-2">
          <label class="container font-sans-alt font-medium text-sm text-indigo-700">
            <input type="checkbox" />
            <span class="ml-3">London</span>
          </label>
          <label class="container font-sans-alt font-medium text-sm text-indigo-700">
            <input type="checkbox" />
            <span class="ml-3">Amsterdam</span>
          </label>

          <label class="container font-sans-alt font-medium text-sm text-indigo-700">
            <input type="checkbox" checked="checked" />
            <span class="ml-3">New York</span>
          </label>

          <label class="container font-sans-alt font-medium text-sm text-indigo-700">
            <input type="checkbox" />
            <span class="ml-3">Berlin</span>
          </label>
        </div>
      </section>

      <ol class="mt-6 px-2 w-full lg:ml-8">
        <li v-for="x in 4" :key="x" class="mb-6">
          <JobCard
            company="Kasisto"
            job-title="Front-End Software Engineer"
            job-type="Full Time"
            job-location="New York"
            created-at="Mon Jun 15 07:23:47 UTC 2020"
          />
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JobCard from "@/components/JobCard.vue";

export default {
  name: "Home",
  components: {
    JobCard
  }
};
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px theme("colors.white") inset;
  -webkit-text-fill-color: theme("colors.indigo.700");
  caret-color: theme("colors.white");
}

::-webkit-input-placeholder {
  @apply text-gray-500 text-xs;
}
::-moz-placeholder {
  @apply text-gray-500 text-xs;
}
:-ms-input-placeholder {
  @apply text-gray-500 text-xs;
}
::placeholder {
  @apply text-gray-500 text-xs;
}

.search-absolute {
  top: 50%;
  transform: translate(0%, -50%);
}
</style>
