<template>
  <div class="home">
    <div class="relative">
      <img src="@/assets/backgroundImg.png" alt="background" class="h-32 rounded w-full" />
      <div
        class="flex shadow p-1 align-center bg-white rounded absolute search-absolute mx-5 inset-x-0 items-center lg:max-w-3xl xxl:max-w-5xl lg:inset-auto search-width"
      >
        <svg
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 fill-current text-gray-500 ml-4"
        >
          <path
            d="M10.5 5V3.5H7.5V5H10.5ZM3 7.25V14C3 14.4125 3.3375 14.75 3.75 14.75H14.25C14.6625 14.75 15 14.4125 15 14V7.25C15 6.8375 14.6625 6.5 14.25 6.5H3.75C3.3375 6.5 3 6.8375 3 7.25ZM15 5C15.8325 5 16.5 5.6675 16.5 6.5V14.75C16.5 15.5825 15.8325 16.25 15 16.25H3C2.1675 16.25 1.5 15.5825 1.5 14.75L1.5075 6.5C1.5075 5.6675 2.1675 5 3 5H6V3.5C6 2.6675 6.6675 2 7.5 2H10.5C11.3325 2 12 2.6675 12 3.5V5H15Z"
            fill="#B9BDCF"
          />
        </svg>
        <form @submit.prevent="onSearch" class="w-full">
          <input
            class="w-full px-2 text-indigo-700 leading-tight focus:outline-none border-none bg-white text-xs"
            id="job"
            type="text"
            placeholder="Title, companies, expertise or benefits"
            v-model="searchQuery"
          />
        </form>

        <button
          class="bg-blue-500 font-sans font-medium text-base text-white px-6 py-2 rounded focus:outline-none focus:shadow-outline"
          @click.prevent="onSearch"
        >Search</button>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row">
      <section>
        <div class="mt-8">
          <label class="container font-sans-alt font-medium text-sm text-indigo-700">
            <input type="checkbox" v-model="fullTime" />
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

            <form @submit.prevent="onSearch" class="w-full flex">
              <input
                class="w-full px-2 text-indigo-700 leading-tight focus:outline-none border-none bg-white text-xs"
                id="location"
                type="text"
                placeholder="City, state, zip code or country"
                v-model="locationQuery"
              />
            </form>
          </div>
        </div>
        <div class="flex flex-col mt-6 px-2">
          <label class="container font-sans-alt font-medium text-sm text-indigo-700">
            <input type="checkbox" value="London" v-model="checkedLocations" />
            <span class="ml-3">London</span>
          </label>
          <label class="container font-sans-alt font-medium text-sm text-indigo-700">
            <input type="checkbox" value="Amsterdam" v-model="checkedLocations" />
            <span class="ml-3">Amsterdam</span>
          </label>

          <label class="container font-sans-alt font-medium text-sm text-indigo-700">
            <input type="checkbox" value="New York" v-model="checkedLocations" />
            <span class="ml-3">New York</span>
          </label>

          <label class="container font-sans-alt font-medium text-sm text-indigo-700">
            <input type="checkbox" value="Berlin" v-model="checkedLocations" />
            <span class="ml-3">Berlin</span>
          </label>
        </div>
      </section>

      <section class="w-full">
        <ol class="mt-6 px-2 lg:px-0 lg:pl-2 lg:ml-8">
          <li v-for="job in currentJobList" :key="job.id" class="mb-6">
            <button @click.prevent="onJobPosting(job.id)" class="w-full">
              <JobCard
                :company="job.company"
                :job-title="job.title"
                :job-type="job.type"
                :job-location="job.location"
                :created-at="job.created_at"
                :image-url="job.company_logo"
                class="w-full"
              />
            </button>
          </li>
        </ol>

        <div class="hidden lg:flex lg:justify-end">
          <PaginationControl :pageCount="pageCount" @page-change="onPageChange" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import JobCard from "@/components/JobCard.vue";
import PaginationControl from "@/components/PaginationControl.vue";
export default {
  name: "Home",
  components: {
    JobCard,
    PaginationControl
  },
  data() {
    return {
      jobList: [],
      page: 1,
      searchQuery: "",
      locationQuery: "",
      fullTime: true,
      checkedLocations: ["New York"]
    };
  },
  computed: {
    currentJobList() {
      return this.jobList.slice((this.page - 1) * 5, (this.page - 1) * 5 + 5);
    },
    pageCount() {
      return Math.ceil(this.jobList.length / 5);
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code"
      );
      this.jobList = data;
    },
    onPageChange(index) {
      this.page = index;
    },
    async onSearch() {
      if (this.locationQuery !== "") {
        const { data } = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=${this.searchQuery}&full_time=${this.fullTime}&location=${this.locationQuery}`
        );
        this.jobList = data;
      }

      this.checkedLocations.forEach(async location => {
        const { data } = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=${this.searchQuery}&full_time=${this.fullTime}&location=${location}`
        );
        this.jobList.push(...data);
      });

      this.searchQuery = "";
    },
    onJobPosting(id) {
      console.log("kiminonaewa", id);
      this.$router.push({ path: `/${id}` });
    }
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

@media (min-width: 1024px) {
  .search-width {
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
